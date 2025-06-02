document.addEventListener("DOMContentLoaded", () => {
    const jsonFiles = [
      "/assets/data/mon_chinh.json",
      "/assets/data/thuc_uong.json",
      "/assets/data/trang_mieng.json",
      "/assets/data/an_sang.json",
      "/assets/data/an_vat.json"
    ];
  
    // Tải dữ liệu từ tất cả các file JSON
    Promise.all(jsonFiles.map(file => fetch(file).then(response => response.json())))
      .then(dataArrays => {
        const allDishes = dataArrays.flat(); // Kết hợp tất cả dữ liệu từ các file JSON
        displayDishes(allDishes.slice(0, 6), "featuredDishes"); // Hiển thị 6 món đầu tiên
        displayCategories(allDishes); // Hiển thị danh mục
      })
      .catch(error => console.error("lỗi khi lấy món ăn:", error));
  });
  
  // Hàm hiển thị danh sách món ăn
  function displayDishes(dishes, elementId) {
      const container = document.getElementById(elementId);
      container.innerHTML = dishes.map(dish => `
        <div class="col-md-4 mb-4">
          <div class="card dish-card" onclick="showDishDetail(${dish.id})">
            <img src="${dish.image}" class="card-img-top" alt="${dish.title}">
            <div class="card-body">
              <h5 class="card-title">${dish.title}</h5>
              <p class="card-text">${dish.category}</p>
              <button class="btn btn-sm" onclick="event.stopPropagation(); alert('Xem chi tiết ${dish.title}');">Xem chi tiết</button>
            </div>
          </div>
        </div>
      `).join("");
  }
  
  // Hàm hiển thị danh mục món ăn
  function displayCategories(dishes) {
      const categories = [...new Set(dishes.map(dish => dish.category))];
      const container = document.getElementById("categoryList");
      container.innerHTML = categories.map(category => `
        <div class="col-md-3 mb-3">
          <div class="category-card" onclick="filterByCategory('${category}')">
            <h5>${category}</h5>
          </div>
        </div>
      `).join("");
  }
  
  // Hàm lọc món ăn theo danh mục
  function filterByCategory(category) {
    const jsonFiles = [
      "/assets/data/mon_chinh.json",
      "/assets/data/thuc_uong.json",
      "/assets/data/trang_mieng.json",
      "/assets/data/an_sang.json",
      "/assets/data/an_vat.json"
    ];
  
    Promise.all(jsonFiles.map(file => fetch(file).then(response => response.json())))
      .then(dataArrays => {
        const allDishes = dataArrays.flat();
        const filteredDishes = allDishes.filter(dish => dish.category === category);
        displayDishes(filteredDishes, "featuredDishes");
      })
      .catch(error => console.error("Lỗi khi lọc món ăn:", error));
  }
  
  // Hàm tìm kiếm món ăn
  function searchDishes() {
    const query = document.getElementById("searchInput").value.toLowerCase();
    const jsonFiles = [
      "/assets/data/mon_chinh.json",
      "/assets/data/thuc_uong.json",
      "/assets/data/trang_mieng.json",
      "/assets/data/an_sang.json",
      "/assets/data/an_vat.json"
    ];
  
    Promise.all(jsonFiles.map(file => fetch(file).then(response => response.json())))
      .then(dataArrays => {
        const allDishes = dataArrays.flat();
        // Chỉ tìm kiếm trong tên món ăn
        const filteredDishes = allDishes.filter(dish =>
          dish.title.toLowerCase().includes(query)
        );
        displayDishes(filteredDishes, "featuredDishes");
      })
      .catch(error => console.error("Error searching dishes:", error));
  }
  
  // Hàm hiển thị chi tiết món ăn
  function showDishDetail(id) {
      window.location.href = `/pages/recipes/detail.html?id=${id}`;
  }
  

  function displayAllDishes() {
      const jsonFiles = [
          "/assets/data/mon_chinh.json",
          "/assets/data/thuc_uong.json",
          "/assets/data/trang_mieng.json",
          "/assets/data/an_sang.json",
          "/assets/data/an_vat.json"
      ];
  
      Promise.all(jsonFiles.map(file => fetch(file).then(response => response.json())))
          .then(dataArrays => {
              const allDishes = dataArrays.flat();
              displayDishes(allDishes, "featuredDishes");
          })
          .catch(error => console.error("Lỗi khi hiển thị tất cả món ăn:", error));
  }
  
  document.getElementById("searchInput").addEventListener("input", searchDishes);