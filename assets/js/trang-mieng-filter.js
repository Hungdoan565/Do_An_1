function timMonTrangMieng() {
    const tuKhoa = document.getElementById("searchInput").value.toLowerCase();
    fetch("/assets/data/trang_mieng.json")
      .then(response => response.json())
      .then(trangMieng => {
        const ketQua = trangMieng.filter(mon =>
          mon.title.toLowerCase().includes(tuKhoa) ||
          mon.ingredients.toLowerCase().includes(tuKhoa
        ));
        hienThiMonAn(ketQua, "featuredDesserts");
      });
}

function locTrangMiengTheoDanhMuc(danhMuc) {
    fetch("/assets/data/trang_mieng.json")
      .then(response => response.json())
      .then(trangMieng => {
        const ketQua = trangMieng.filter(mon => mon.category === danhMuc);
        hienThiMonAn(ketQua, "featuredDesserts");
      });
}