function timMonAnVat() {
    const tuKhoa = document.getElementById("searchInput").value.toLowerCase();
    fetch("/assets/data/trang_mieng.json")
      .then(response => response.json())
      .then(anVat => {
        const ketQua = anVat.filter(mon =>
          mon.title.toLowerCase().includes(tuKhoa) ||
          mon.ingredients.toLowerCase().includes(tuKhoa)
        );
        hienThiMonAn(ketQua, "featuredSnacks");
      });
}

function locAnVatTheoDanhMuc(danhMuc) {
    fetch("/assets/data/trang_mieng.json")
      .then(response => response.json())
      .then(anVat => {
        const ketQua = anVat.filter(mon => mon.category === danhMuc);
        hienThiMonAn(ketQua, "featuredSnacks");
      });
}