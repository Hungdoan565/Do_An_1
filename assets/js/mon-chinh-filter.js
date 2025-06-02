function timMonChinh() {
    const tuKhoa = document.getElementById("searchInput").value.toLowerCase();
    fetch("/assets/data/mon_chinh.json")
      .then(response => response.json())
      .then(monChinh => {
        const ketQua = monChinh.filter(mon =>
          mon.title.toLowerCase().includes(tuKhoa) ||
          mon.ingredients.toLowerCase().includes(tuKhoa)
        );
        hienThiMonAn(ketQua, "featuredMainDishes");
      });
}

function locMonChinhTheoDanhMuc(danhMuc) {
    fetch("/assets/data/mon_chinh.json")
      .then(response => response.json())
      .then(monChinh => {
        const ketQua = monChinh.filter(mon => mon.category === danhMuc);
        hienThiMonAn(ketQua, "featuredMainDishes");
      });
}