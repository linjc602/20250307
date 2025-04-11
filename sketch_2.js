function setup() { //設定函數，訂定初始值的地方
    //建立依照視窗的高與寬當作畫布的寬高
    createCanvas(windowWidth, windowHeight)
    //畫布的背景色為8ecae6(8e為十六進位法的紅色，翻成10進位202)
    background(202,240,248)
  }
  //================================================================================================
  function draw() { //畫圖函數，畫面的地方
    //畫布的背景顏色為8ecae6(8e為十六進位法的紅色，翻成10進位202)
    background(202,240,248);
    
    // 根據滑鼠的 X 座標計算大小，範圍從 100 到 500
    let size = map(mouseX, 0, windowWidth, 100, 500);
    let spacing = size + 20; // 設定間距
  
    //設定畫筆的顏色為f4a261(f4為十六進位法的紅色，翻成10進位244)
    fill(2,62,138);
    //設定畫筆的粗細為10
    strokeWeight(10);
  
    // 使用迴圈畫滿整個畫布的方框
    for (let y = spacing / 2; y < windowHeight; y += spacing) {
      for (let x = spacing / 2; x < windowWidth; x += spacing) {
        rectMode(CENTER); //設定方框的中心點為基準
        rect(x, y, size, size); //畫方框
      }
    }
  
    //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    //設定畫筆的顏色為f4a261(f4為十六進位法的紅色，翻成10進位244)
    //圓的顏色為fefae0 (fe為十六進位法的值，翻成10進位為3)
    fill("#fefae0");
    //圓的邊框為fefae0 (fe為十六進位法的值，翻成10進位為64)
    stroke(0,180,216);
  
    // 使用迴圈畫滿整個畫布的圓
    for (let y = spacing / 2; y < windowHeight; y += spacing) {
      for (let x = spacing / 2; x < windowWidth; x += spacing) {
        ellipse(x, y, size, size); //畫圓
      }
    }
  }
  
  //當視窗的大小改變時，重新設定畫布的寬高
  function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }
  