// Hàm tạo object công thức mới, tự động gán ngày hiện tại nếu chưa có
function createRecipeObject(data) {
  const now = new Date();
  // Định dạng dd/MM/yyyy
  const pad = n => n < 10 ? '0' + n : n;
  const todayStr = pad(now.getDate()) + '/' + pad(now.getMonth() + 1) + '/' + now.getFullYear();
  return {
    ...data,
    date: data.date || todayStr,
    createdAt: data.createdAt || now.getTime(),
  };
}
// Xử lý submit form thêm công thức mới
const form = document.querySelector('#addRecipeForm');
if (form) {
  form.addEventListener('submit', function(e) {
    e.preventDefault();
    // Lấy dữ liệu từ form
    const formData = {};
    Array.from(form.elements).forEach(el => {
      if (el.name && el.type !== 'submit' && el.type !== 'button') {
        formData[el.name] = el.value;
      }
    });
    // Tạo object công thức mới, tự động gán ngày hiện tại nếu chưa có
    const recipe = createRecipeObject(formData);
    // Lưu lên Firebase
    if (typeof addRecipeToFirebase === 'function') {
      console.log('Gọi hàm addRecipeToFirebase', recipe);
      addRecipeToFirebase(recipe, function(id) {
        alert('Đăng công thức thành công!');
        form.reset();
      }, function(error) {
        alert('Có lỗi khi lưu công thức: ' + error.message);
      });
    } else {
      alert('Không tìm thấy hàm lưu công thức lên Firebase!');
    }
  });
}
// --- CẤU HÌNH API USDA ---
const USDA_API_KEY = '8zEf9uxXxi8guH9DohZdJoXHHMd4j24VgYJPfHvR';

// --- SỬ DỤNG LIBRETRANSLATE ---
// Dịch tiếng Việt sang tiếng Anh bằng LibreTranslate
async function translateToEnglish(text) {
  const url = 'https://libretranslate.de/translate';
  const body = {
    q: text,
    source: 'vi',
    target: 'en',
    format: 'text'
  };
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return data.translatedText;
}
// Lấy calories từ API USDA
// Hàm này sẽ tìm kiếm nguyên liệu trong cơ sở dữ liệu USDA và trả về calories
async function fetchCaloriesFromUSDA(ingredient, amount) {
  const searchUrl = `https://api.nal.usda.gov/fdc/v1/foods/search?api_key=${USDA_API_KEY}&query=${encodeURIComponent(ingredient)}`;
  const res = await fetch(searchUrl);
  const data = await res.json();
  if (data.foods && data.foods.length > 0) {
    const food = data.foods[0];
    const cal = food.foodNutrients.find(n => n.nutrientName === 'Energy' && n.unitName === 'KCAL');
    if (cal) {
      // Nếu người dùng nhập số lượng (ví dụ: 200g), lấy số gram
      let gram = 100;
      if (amount) {
        const match = amount.match(/(\d+)(g|gram|gr|ml|mL)?/i);
        if (match) gram = parseFloat(match[1]);
      }
      return cal.value * (gram / 100);
    }
  }
  return 0;
}

// Bảng quy đổi đơn vị phổ biến cho một số nguyên liệu
const UNIT_CONVERT_MAP = {
  'trứng': { unit: 'quả', approx: '50g' },
  'trứng gà': { unit: 'quả', approx: '50g' },
  'trứng vịt': { unit: 'quả', approx: '65g' },
  'cà chua': { unit: 'quả', approx: '80g' },
  'tôm': { unit: 'con', approx: '10g (tôm nhỏ)' },
  'khoai tây': { unit: 'củ', approx: '150g' },
  'hành tây': { unit: 'củ', approx: '100g' },
  'cà rốt': { unit: 'củ', approx: '60g' },
  'chuối': { unit: 'quả', approx: '100g' },
  'dưa leo': { unit: 'quả', approx: '120g' },
  'ớt': { unit: 'quả', approx: '10g' },
  'tỏi': { unit: 'tép', approx: '5g' },
  'hành tím': { unit: 'củ', approx: '10g' },
  // ... có thể bổ sung thêm
};

// Gợi ý quy đổi đơn vị động dưới từng dòng nguyên liệu
function showUnitSuggestion(inputEl, ingName) {
  const suggestDivId = 'unitSuggest_' + Math.random().toString(36).slice(2, 10);
  let suggestDiv = inputEl.parentNode.querySelector('.unit-suggest');
  if (!suggestDiv) {
    suggestDiv = document.createElement('div');
    suggestDiv.className = 'unit-suggest text-info small mt-1';
    inputEl.parentNode.appendChild(suggestDiv);
  }
  let found = null;
  for (const key in UNIT_CONVERT_MAP) {
    if (ingName.toLowerCase().includes(key)) {
      found = UNIT_CONVERT_MAP[key];
      break;
    }
  }
  if (found) {
    suggestDiv.style.display = 'block';
    suggestDiv.textContent = `Gợi ý: 1 ${found.unit} ≈ ${found.approx}`;
  } else {
    suggestDiv.style.display = 'none';
    suggestDiv.textContent = '';
  }
}

// Gắn sự kiện gợi ý quy đổi đơn vị cho từng dòng nguyên liệu
function bindUnitSuggestEvents() {
  const nameInputs = document.querySelectorAll('input[name="ingredientName[]"]');
  nameInputs.forEach(input => {
    input.addEventListener('input', function() {
      showUnitSuggestion(input, input.value.trim());
    });
    // Hiển thị ngay nếu đã có giá trị
    showUnitSuggestion(input, input.value.trim());
  });
}

// Debounce helper
function debounce(fn, delay) {
  let timer = null;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

// Bảng calories mặc định cho nguyên liệu phổ biến (tính trên 100g hoặc đơn vị phổ biến)
const DEFAULT_CALORIES = {
  'tôm': 100, // 100 kcal/100g
  'bơ': 720, // 720 kcal/100g (bơ động vật)
  'hành tây': 40, // 40 kcal/100g
  'dầu ăn': 900, // 900 kcal/100g (hoặc 900 kcal/100ml)
  'muối': 0, // 0 kcal
  'tỏi': 150, // 150 kcal/100g
  'đường': 400, // 400 kcal/100g
  'trứng': 155, // 155 kcal/100g (1 quả ~ 50g)
  'cà chua': 18, // 18 kcal/100g
  'khoai tây': 77, // 77 kcal/100g
  'bơ thực vật': 720, // 720 kcal/100g
  'bơ lạt': 720, // 720 kcal/100g
  'bơ động vật': 720, // 720 kcal/100g
  // ... có thể bổ sung thêm
};

// Quy đổi đơn vị phổ biến sang gram/ml
function parseAmountToGram(amount, name) {
  if (!amount) return 100; // Mặc định nếu không nhập
  let val = 100;
  let lower = amount.toLowerCase();
  // Ưu tiên số + gr/g/ml
  let match = lower.match(/(\d+(?:[.,]\d+)?)(\s*)(gr|g|ml|mL)/);
  if (match) {
    val = parseFloat(match[1].replace(',', '.'));
    return val;
  }
  // Đơn vị quả, củ, con, tép, thì quy đổi theo bảng phổ biến
  if (/quả|củ|con|tép/.test(lower)) {
    let num = 1;
    let m2 = lower.match(/(\d+)/);
    if (m2) num = parseFloat(m2[1]);
    // Quy đổi theo loại nguyên liệu
    if (/trứng/.test(name)) return num * 50;
    if (/cà chua/.test(name)) return num * 80;
    if (/tôm/.test(name)) return num * 10;
    if (/hành tây/.test(name)) return num * 100;
    if (/tỏi/.test(name)) return num * 5;
    if (/khoai tây/.test(name)) return num * 150;
    if (/ớt/.test(name)) return num * 10;
    if (/chuối/.test(name)) return num * 100;
    // ... bổ sung thêm nếu cần
    return num * 50; // fallback
  }
  // Đơn vị thìa canh, thìa cà phê, muỗng
  if (/thìa|muỗng|muong/.test(lower)) {
    // 1 thìa canh ~ 15g, 1 thìa cà phê ~ 5g
    if (/canh/.test(lower)) return 15;
    if (/cà phê|ca phe/.test(lower)) return 5;
    return 10;
  }
  // Đơn vị ml cho dầu ăn: 1ml ~ 0.92g (gần 1g)
  if (/ml/.test(lower) && /dầu/.test(name)) {
    let m3 = lower.match(/(\d+(?:[.,]\d+)?)/);
    if (m3) return parseFloat(m3[1].replace(',', '.'));
  }
  // Đơn vị gói (ví dụ: mì tôm, bánh phở đóng gói...)
  if (/gói/.test(lower)) {
    let num = 1;
    let m2 = lower.match(/(\d+)/);
    if (m2) num = parseFloat(m2[1]);
    return num; // trả về số gói, calories sẽ nhân trực tiếp
  }
  // Nếu chỉ có số
  let m4 = lower.match(/(\d+(?:[.,]\d+)?)/);
  if (m4) return parseFloat(m4[1].replace(',', '.'));
  return 100;
}

// Tính calories chỉ dùng bảng nội bộ, không gọi API
async function autoCalculateCalories() {
  const ingredientNames = Array.from(document.querySelectorAll('input[name="ingredientName[]"]'));
  const ingredientAmounts = Array.from(document.querySelectorAll('input[name="ingredientAmount[]"]'));
  const servingsInput = document.querySelector('input[name="servings"]');
  const caloriesInput = document.getElementById('caloriesInput');
  const infoDiv = document.getElementById('caloriesAutoInfo');
  const warningDiv = document.getElementById('caloriesWarning');
  if (!ingredientNames.length || !servingsInput || !caloriesInput) return;

  const ingredients = ingredientNames.map((el, i) => ({
    name: el.value.trim(),
    amount: ingredientAmounts[i] ? ingredientAmounts[i].value.trim() : ''
  })).filter(i => i.name && i.name.length >= 2);
  const servings = parseFloat(servingsInput.value) || 1;
  if (!ingredients.length) {
    infoDiv.style.display = 'none';
    infoDiv.textContent = '';
    warningDiv.style.display = 'none';
    caloriesInput.value = '';
    return;
  }

  infoDiv.style.display = 'block';
  infoDiv.textContent = 'Đang tự động tính calories...';
  warningDiv.style.display = 'none';

  let totalCalories = 0;
  let missing = [];
  for (let ing of ingredients) {
    let lowerName = ing.name.toLowerCase();
    // Ưu tiên tra cứu từ bảng ingredientsCalories
    let calPer100g = null;
    let found = ingredientsCalories.find(item => item.name.toLowerCase() === lowerName);
    if (found) {
      calPer100g = found.calories;
    } else {
      // fallback sang DEFAULT_CALORIES
      for (let key in DEFAULT_CALORIES) {
        if (lowerName.includes(key)) {
          calPer100g = DEFAULT_CALORIES[key];
          break;
        }
      }
    }
    // Nếu không nhập số lượng, mặc định 100g
    let gram = 100;
    if (ing.amount && ing.amount.length > 0) {
      gram = parseAmountToGram(ing.amount, lowerName);
    }
    let cal = 0;
    if (calPer100g !== null) {
      cal = calPer100g * (gram / 100);
    } else {
      missing.push(ing.name);
    }
    totalCalories += cal;
  }
  const caloriesPerServing = Math.round(totalCalories / servings);
  caloriesInput.value = caloriesPerServing;
  infoDiv.textContent = `Calories tự động: ${caloriesPerServing} kcal/khẩu phần.`;
  if (missing.length) {
    warningDiv.style.display = 'block';
    warningDiv.textContent = 'Không xác định được calories cho: ' + missing.join(', ');
  } else {
    warningDiv.style.display = 'none';
  }
  // Cảnh báo nếu người dùng override
  caloriesInput.addEventListener('input', function() {
    const userVal = parseFloat(caloriesInput.value);
    if (Math.abs(userVal - caloriesPerServing) > caloriesPerServing * 0.2) {
      warningDiv.style.display = 'block';
      warningDiv.textContent = 'Cảnh báo: Giá trị bạn nhập khác nhiều so với giá trị tính toán!';
    } else if (!missing.length) {
      warningDiv.style.display = 'none';
    }
  });
}

window.addEventListener('DOMContentLoaded', function() {
  // Bật lại auto-calculate calories, chỉ hiển thị dòng info
  var infoDiv = document.getElementById('caloriesAutoInfo');
  var tableDiv = document.getElementById('ingredientCaloriesTable');
  if (infoDiv) {
    infoDiv.style.display = 'none';
    infoDiv.textContent = '';
  }
  if (tableDiv) {
    tableDiv.style.display = 'none';
    tableDiv.innerHTML = '';
  }
  // Debounce cho autoCalculateCalories khi nhập liệu
  const ingredientsList = document.getElementById('ingredientsList');
  const servingsInput = document.querySelector('input[name="servings"]');
  if (ingredientsList && servingsInput) {
    const debouncedAutoCal = debounce(autoCalculateCalories, 500);
    ingredientsList.addEventListener('input', function(e) {
      if (e.target.matches('input[name="ingredientName[]"], input[name="ingredientAmount[]"]')) {
        debouncedAutoCal();
      }
    });
    servingsInput.addEventListener('input', debouncedAutoCal);
    // Theo dõi thêm/xóa nguyên liệu bằng MutationObserver
    const observer = new MutationObserver(() => {
      autoCalculateCalories();
    });
    observer.observe(ingredientsList, { childList: true });
  }
  // Ngăn nhập số âm cho calories
  const caloriesInput = document.getElementById('caloriesInput');
  if (caloriesInput) {
    caloriesInput.addEventListener('input', function() {
      if (parseFloat(this.value) < 0) this.value = 0;
    });
  }
});
// Nạp bảng nguyên liệu và calories cho autocomplete và tính toán
import ingredientsCalories from '../data/ingredients_calories.js';

// Tự động điền datalist gợi ý nguyên liệu
function fillIngredientDatalist() {
  const datalist = document.getElementById('ingredientSuggestions');
  if (!datalist) return;
  datalist.innerHTML = '';
  ingredientsCalories.forEach(item => {
    const opt = document.createElement('option');
    opt.value = item.name;
    datalist.appendChild(opt);
  });
}
window.addEventListener('DOMContentLoaded', fillIngredientDatalist);
// Sau khi DOM ready, load danh mục/tags từ Firebase (chỉ active=true)
document.addEventListener('DOMContentLoaded', function () {
  // Danh mục
  fetchActiveCategories(function(categories) {
    const tagSelect = document.getElementById('tagSelect');
    if (tagSelect) {
      tagSelect.innerHTML = '';
      categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'tag-item';
        btn.dataset.value = cat.name;
        btn.textContent = cat.name;
        tagSelect.appendChild(btn);
      });
      // Gán lại sự kiện chọn tag
      const tagsInput = document.getElementById('tagsInput');
      tagSelect.querySelectorAll('.tag-item').forEach((tag) => {
        tag.addEventListener('click', function () {
          this.classList.toggle('active');
          const selected = Array.from(
            tagSelect.querySelectorAll('.tag-item.active')
          ).map((t) => t.dataset.value);
          tagsInput.value = selected.join(',');
        });
      });
    }
  });
  // Tags công thức (nếu có UI riêng cho tags)
  // fetchActiveRecipeTags(function(tags) { ... });
});
