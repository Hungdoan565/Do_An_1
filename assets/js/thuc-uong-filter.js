function timThucUong() {
    const tuKhoa = document.getElementById("searchInput").value.toLowerCase();
    fetch("/assets/data/thuc_uong.json")
      .then(response => response.json())
      .then(thucUong => {
        const ketQua = thucUong.filter(mon =>
          mon.title.toLowerCase().includes(tuKhoa) ||
          mon.ingredients.toLowerCase().includes(tuKhoa)
        );
        hienThiMonAn(ketQua, "featuredBeverages");
      });
}

function locThucUongTheoDanhMuc(danhMuc) {
    fetch("/assets/data/thuc_uong.json")
      .then(response => response.json())
      .then(thucUong => {
        const ketQua = thucUong.filter(mon => mon.category === danhMuc);
        hienThiMonAn(ketQua, "featuredBeverages");
      });
}