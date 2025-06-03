// Hàm lọc công thức cho trang list
// options: { keyword, category, ingredients, favorite, time, difficulty, rating }
function filterRecipes({
  recipes,
  keyword = '',
  category = '',
  ingredients = [],
  favorite = false,
  time = null, // { min, max }
  difficulty = '',
  rating = null // { min, max }
}) {
  return recipes.filter(recipe => {
    // Lọc theo từ khóa (chỉ tiêu đề và tags, cho phép chứa từ khóa, không phân biệt hoa thường)
    if (keyword) {
      const kw = keyword.toLowerCase();
      const inTitle = recipe.title && recipe.title.toLowerCase().includes(kw);
      const inTags = (recipe.tags||[]).some(tag => tag.toLowerCase().includes(kw));
      if (!(inTitle || inTags)) return false;
    }
    // Lọc theo danh mục
    if (category) {
      if (!Array.isArray(recipe.tags) || !recipe.tags.some(tag => tag.toLowerCase().includes(category.toLowerCase()))) return false;
    }
    // Lọc theo nguyên liệu (tất cả nguyên liệu đều phải có)
    if (ingredients && ingredients.length > 0) {
      const recipeIngredients = (recipe.ingredients||[]).map(i => i.toLowerCase());
      if (!ingredients.every(ing => recipeIngredients.some(i => i.includes(ing.toLowerCase())))) return false;
    }
    // Lọc theo yêu thích (nếu có)
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
}

// --- TÍCH HỢP HÀM LỌC VÀO TRANG LIST ---
// Giả sử đã import filterRecipes vào list.html
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    if (searchInput && searchBtn) {
      searchBtn.addEventListener('click', function () {
        const keyword = searchInput.value.trim();
        // recipes là mảng công thức đã load ở list.html
        if (typeof recipes !== 'undefined') {
          const filtered = filterRecipes({ recipes, keyword });
          // Render lại grid (giả sử có hàm renderRecipes)
          if (typeof renderRecipes === 'function') {
            filteredRecipes = filtered;
            currentPage = 1;
            renderRecipes(currentPage);
          }
        }
      });
      // Cho phép nhấn Enter để tìm kiếm
      searchInput.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') searchBtn.click();
      });
    }
  });
}