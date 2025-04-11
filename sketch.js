function setup() { //設定函數，訂定初始值的地方
  //建立依照視窗的高與寬當作畫布的寬高
  createCanvas(windowWidth, windowHeight);
  //設定顏色模式為HSB，色相範圍為0-360，飽和度和亮度範圍為0-100
  colorMode(HSB, 360, 100, 100);
  // 設定背景顏色
  background(255);
}

function draw() { //畫圖函數，畫面的地方
  // 根據滑鼠的 X 座標計算色相，範圍從 0 到 360
  let hue = map(mouseX, 0, windowWidth, 0, 360);
  // 根據滑鼠的 Y 座標計算亮度，範圍從 0 到 100
  let brightness = map(mouseY, 0, windowHeight, 0, 100);

  // 設定畫筆的顏色為計算出的色相和亮度，飽和度固定為100
  fill(hue, 100, brightness);
  // 設定無邊框
  noStroke();

  // 在滑鼠位置畫一個直徑為200px的圓
  ellipse(mouseX, mouseY, 200, 200);
}

//當視窗的大小改變時，重新設定畫布的寬高
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // 重新設定背景顏色
  background(255);
}
