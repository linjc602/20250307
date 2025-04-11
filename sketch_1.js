function setup() { //設定函數，訂定初始值的地方
    //建立依照視窗的高與寬當作畫布的寬高
    createCanvas(windowWidth, windowHeight)
    //畫布的背景色為8ecae6(8e為十六進位法的紅色，翻成10進位202)
    background(202,240,248)
  }
  
  function draw() { //畫圖函數，畫面的地方
    //畫布的背景顏色為8ecae6(8e為十六進位法的紅色，翻成10進位202)
    background(202,240,248);
    //設定畫筆的顏色為f4a261(f4為十六進位法的紅色，翻成10進位244)
    fill(2,62,138);
    //設定畫筆的粗細為10
    strokeWeight(10);
    //畫圓的邊框寬度為10);
    //ellipse(witdowWidth/2, windowHeight/2, 200, 200);
    //依照上面的原顏色與寬線顏色，從視窗的最左邊，產生連續的圓，視窗的最右邊
    for(let i = 0; i < windowWidth; i+=200){
      ellipse(i, windowHeight/2, 200, 200);
    }
    
    //設定畫筆的顏色為f4a261(f4為十六進位法的紅色，翻成10進位244)
    fill(244,162,97);
    //設定畫筆的粗細為10
    strokeWeight(10);
    //畫圓形
    ellipse(200, 100, 100, 100);
    
  
    //設定畫筆的顏色為f4a261(f4為十六進位法的紅色，翻成10進位244)
  
    //當視窗的大小改變時，重新設定畫布的寬高
    function windowResized() {
      resizeCanvas(windowWidth, windowHeight);
    }
  }
  