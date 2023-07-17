window.onload = function () {
  const canvas = document.createElement("canvas");

  let x = 1000,
    y = 1000; //정 가운데로 위치
  let w = 128,
    h = 128; //플레이어 이미지의 절반 사이즈
  let bgx = 750;

  canvas.width = W * 2;
  canvas.height = H * 2;
  canvas.style.width = W + "px";
  canvas.style.height = H + "px";
  canvas.style.transition = "all 0.5s linear";
  canvas.style.position = "absolute";
  canvas.style.top = "220px";
  canvas.style.left = "50%";
  canvas.style.transform = "translateX(-50%)";

  let type = "wait";

  document.body.appendChild(canvas);
  const context = canvas.getContext("2d");

  document.addEventListener("keypress", function (event) {
    //눌러진 key의 코드값
    keycode = event.keyCode;
    switch (keycode) {
      case 13:
        if (type === "wait") {
          type = "start";
          draw();
          setTimeout(function () {
            console.log("start");
            window.requestAnimationFrame(origin);
          }, 1000);
        }
        break;
    }
  });
  canvas.ontouchstart = function () {
    if (type === "wait") {
      type = "start";
      draw();
      setTimeout(function () {
        console.log("start");
        window.requestAnimationFrame(origin);
      }, 1000);
    }
  };
  const stopImgChar = new Image();
  stopImgChar.src = IMG_PATH + "/common/stopImg_right.png";
  const moveImgChar = new Image();
  moveImgChar.src = IMG_PATH + "/common/moveImg1_right.png";
  const imgBg = new Image();
  imgBg.src = IMG_PATH + "/" + category + "/bg.png";

  function draw() {
    context.strokeStyle = "rgba(0,0,0,0.5)";
    context.drawImage(imgBg, bgx, 0, 1000, 500, 0, 0, W * 2, H * 2);
    context.drawImage(stopImgChar, x - w, y - h * 3, w * 2, h * 2);
    openDraw(context, type);
    // context.drawImage(imgBg,1125,250,500,250,0,0,W*2,H*2)
    // context.drawImage(stopImgChar,x-(w*2),y-(h*6),w*4,h*4);
    window.requestAnimationFrame(draw);
  }

  let count = 0;
  function origin() {
    count += 10;
    if (count < 1000) {
      context.setTransform(
        2 - count / 1000,
        0,
        0,
        2 - count / 1000,
        -1000 + count,
        -1000 + count
      );
      window.requestAnimationFrame(origin);
    } else {
      context.setTransform(1, 0, 0, 1, -1000, -1000);
      window.cancelAnimationFrame(origin);
      canvas.style.display = "none";
      start();
    }
  }

  draw();
  context.transform(2, 0, 0, 2, -1000, -1000);
};
