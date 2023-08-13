function tinhLuong(params) {
  var luongMoiNgay = 100000;
  var soNgay = document.getElementById("soNgayLamViec").value;
  var ketQua = document.getElementById("ketQua");

  var tongLuong = luongMoiNgay * soNgay;
  ketQua.innerHTML = tongLuong;
}
