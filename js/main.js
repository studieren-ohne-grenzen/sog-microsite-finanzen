$.get("php/data.php", function(data) {
  var data = Papa.parse(data);

  var revStr = data["data"][14][2];
  var expStr = data["data"][14][3];
  var balStr = data["data"][14][4];

  var revNum = parseInt(revStr.replace(".", "").replace(",", ""));
  var expNum = parseInt(expStr.replace(".", "").replace(",", ""));
  var balNum = parseInt(balStr.replace(".", "").replace(",", ""));

  var maxNum = Math.max(revNum, expNum);

  var revWidth = (revNum / maxNum) * 400;
  $("#revenueBar").css("width", revWidth + "px");
  $("#revenueMarker").css("left", 400 + revWidth + "px");
  $("#revenueLabel").css("left", 360 + revWidth + "px");
  $("#revenueLabel").text(revStr);

  var expWidth = (expNum / maxNum) * 400;
  $("#expenditureBar").css("width", expWidth + "px");
  $("#expenditureBar").css("left", 400 - expWidth + "px");
  $("#expenditureMarker").css("left", 400 - expWidth + "px");
  $("#expenditureLabel").css("left", 360 - expWidth + "px");
  $("#expenditureLabel").text("-" + expStr);

  var balWidth = Math.abs((balNum / maxNum) * 400);
  $("#balanceBar").css("width", balWidth + "px");

  if (balNum >= 0) {
    $("#balanceBar").css("left", "400px");
    $("#balanceMarker").css("left", 400 + balWidth + "px");
    $("#balanceLabel").css("left", 360 + balWidth + "px");
  } else {
    $("#balanceBar").css("left", 400 - balWidth + "px");
    $("#balanceMarker").css("left", 400 - balWidth + "px");
    $("#balanceLabel").css("left", 360 - balWidth + "px");
  }

  $("#balanceLabel").text(balStr);
});
