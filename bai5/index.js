function tinhTongHaiChuSo() {
  var soHaiChuSo = document.getElementById("soHaiChuSo").value;

  var hangChuc = Math.floor(soHaiChuSo / 10);
  var hangDonVi = soHaiChuSo % 10;

  var tongHaiChuSo = hangChuc + hangDonVi;

  var ketQuaElement = document.getElementById("ketQua");
  ketQuaElement.innerHTML = "Tổng hai chữ số là: " + tongHaiChuSo;
}
