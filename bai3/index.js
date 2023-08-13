var tyGia = 23500;

function quyDoi(params) {
  var usdAmount = document.getElementById("usdAmount").value;
  var vndAmount = usdAmount * tyGia;
  var ketQua = document.getElementById("ketQua");
  ketQua.innerHTML = vndAmount + " " + "VND";
}
