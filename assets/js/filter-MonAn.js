// Hàm lọc công thức cho trang list
// options: { keyword, category, ingredients, favorite, time, difficulty, rating, sortBy }
function filterRecipes(options) {
  const recipes = options.recipes;
  const keyword = options.keyword || '';
  const category = options.category || '';
  const ingredients = options.ingredients || [];
  const favorite = options.favorite || false;
  const time = options.time || null;
  const difficulty = options.difficulty || '';
  const rating = options.rating || null;
  const sortBy = options.sortBy || '';
  const activeCategories = options.activeCategories || [];
  let filtered = recipes.filter(recipe => {
    // Lọc theo từ khóa (chỉ tiêu đề và tags, cho phép chứa từ khóa, không phân biệt hoa thường)
    if (keyword) {
      const kw = keyword.toLowerCase();
      const inTitle = recipe.title && recipe.title.toLowerCase().includes(kw);
      const inTags = (recipe.tags||[]).some(tag => tag.toLowerCase().includes(kw));
      if (!(inTitle || inTags)) return false;
    }
       // Lọc theo danh mục, chỉ cho phép các danh mục active
    if (category) {
      if (!Array.isArray(recipe.tags) || !recipe.tags.some(tag => tag.toLowerCase().includes(category.toLowerCase()))) return false;
    // Nếu truyền vào activeCategories, chỉ cho phép các tag thuộc danh mục active

      if (activeCategories.length > 0) {
        const valid = recipe.tags.some(tag => activeCategories.includes(tag));
        if (!valid) return false;
      }
    }
    // Lọc theo yêu thích
    if (favorite && !recipe.favorite) return false;
    // Lọc theo thời gian nấu
    if (time && (time.min || time.max)) {
      if (typeof recipe.time !== 'number') return false;
      if (time.min && recipe.time < time.min) return false;
      if (time.max && recipe.time > time.max) return false;
    }
    // Lọc theo độ khó
    if (difficulty && recipe.difficulty?.toLowerCase() !== difficulty.toLowerCase()) return false;
    // Lọc theo rating
    if (rating && (rating.min || rating.max)) {
      if (typeof recipe.rating !== 'number') return false;
      if (rating.min && recipe.rating < rating.min) return false;
      if (rating.max && recipe.rating > rating.max) return false;
    }
    return true;
  });
  // Sắp xếp kết quả
  if (sortBy === 'rating') {
    filtered = filtered.sort((a, b) => (b.rating || 0) - (a.rating || 0));
  } else if (sortBy === 'time') {
    filtered = filtered.sort((a, b) => (a.time || 9999) - (b.time || 9999));
  } else if (sortBy === 'newest') {
    filtered = filtered.sort((a, b) => {
      // Ưu tiên trường createdAt (timestamp), nếu không có thì dùng date (dd/MM/yyyy), nếu không có thì giữ nguyên
      if (a.createdAt && b.createdAt) return b.createdAt - a.createdAt;
      if (a.date && b.date) {
        // Chuyển date dạng dd/MM/yyyy thành số để so sánh
        const parseDate = (d) => {
          if (typeof d === 'number') return d;
          if (typeof d === 'string') {
            const [day, month, year] = d.split('/').map(Number);
            if (!isNaN(day) && !isNaN(month) && !isNaN(year)) return year * 10000 + month * 100 + day;
          }
          return 0;
        };
        return parseDate(b.date) - parseDate(a.date);
      }
      return 0;
    });
  }
  return filtered;
}

// --- TÍCH HỢP HÀM LỌC VÀO TRANG LIST ---
// Giả sử đã import filterRecipes vào list.html
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const sortSelect = document.getElementById('sortSelect');
    function doFilterAndRender() {
      const keyword = searchInput.value.trim();
      const sortBy = sortSelect ? sortSelect.value : '';
      if (typeof recipes !== 'undefined') {
        const filtered = filterRecipes({ recipes, keyword, sortBy });
        if (typeof renderRecipes === 'function') {
          filteredRecipes = filtered;
          currentPage = 1;
          renderRecipes(currentPage);
        }
      }
    }
    if (searchInput && searchBtn) {
      searchBtn.addEventListener('click', doFilterAndRender);
      searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') doFilterAndRender();
      });
    }
    if (sortSelect) {
      sortSelect.addEventListener('change', doFilterAndRender);
    }
  });
}