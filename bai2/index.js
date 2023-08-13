function tinhGiaTriTrungBinh(params) {
  var num1 = document.getElementById("number1").value;
  var num2 = document.getElementById("number2").value;
  var num3 = document.getElementById("number3").value;
  var num4 = document.getElementById("number4").value;
  var num5 = document.getElementById("number5").value;

  var average = (num1 + num2 + num3 + num4 + num5) / 5;

  var ketQua = document.getElementById("ketQua");
  ketQua.innerHTML = "Giá trị trung bình là: " + average;
}
