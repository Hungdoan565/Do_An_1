function timMonAnSang() {
    const tuKhoa = document.getElementById("searchInput").value.toLowerCase();
    fetch("/assets/data/an_sang.json")
      .then(response => response.json())
      .then(anSang => {
        const ketQua = anSang.filter(mon =>
          mon.title.toLowerCase().includes(tuKhoa) ||
          mon.ingredients.toLowerCase().includes(tuKhoa)
        );
        hienThiMonAn(ketQua, "featuredBreakfasts");
      });
}

function locAnSangTheoDanhMuc(danhMuc) {
    fetch("/assets/data/an_sang.json")
      .then(response => response.json())
      .then(anSang => {
        const ketQua = anSang.filter(mon => mon.category === danhMuc);
        hienThiMonAn(ketQua, "featuredBreakfasts");
      });
}