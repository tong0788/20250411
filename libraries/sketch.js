let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight); // 全視窗畫布
  background('#faedcd'); // 設定背景顏色

  // 生成 40 個隨機圓形
  for (let i = 0; i < 40; i++) {
    circles.push({
      x: random(width),
      y: random(height),
      size: random(30, 100),
      color: color(random(255), random(255), random(255)) // 鮮豔顏色
    });
  }
}

function draw() {
  background('#faedcd'); // 重繪背景

  // 繪製圓形
  for (let circle of circles) {
    let dynamicSize = map(mouseX, 0, width, 10, 120); // 根據滑鼠 X 軸動態調整大小
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, dynamicSize, dynamicSize);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight); // 畫布隨視窗大小調整
}