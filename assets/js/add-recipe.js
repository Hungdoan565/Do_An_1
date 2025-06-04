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
    alert('Đã thêm công thức mới!');
    form.reset();
  });
}
