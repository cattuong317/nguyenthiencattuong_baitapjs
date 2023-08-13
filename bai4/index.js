function tinhChuViVaDienTich() {
  var chieuDai = document.getElementById("chieuDai").value;
  var chieuRong = document.getElementById("chieuRong").value;

  var chuVi = 2 * (chieuDai + chieuRong);
  var dienTich = chieuDai * chieuRong;

  var ketQuaChuVi = document.getElementById("ketQuaChuVi");
  var ketQuaDienTich = document.getElementById("ketQuaDienTich");

  ketQuaChuVi.innerHTML = "Chu vi của hình chữ nhật:" + " " + chuVi;
  ketQuaDienTich.innerHTML = "Diện tích của hình chữ nhật:" + " " + dienTich;
}
