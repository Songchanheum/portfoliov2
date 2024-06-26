function start() {
  const canvas = document.createElement("canvas");
  offScreenCanvas(canvas);
  let moveImgChar;
  let stopImgChar;

  const warpImg = [];

  let x = 1000,
    y = 1000; //정 가운데로 위치
  let w = 128,
    h = 128; //플레이어 이미지의 절반 사이즈
  let bgx = 750;

  let dx = 0;
  let dy = 0;
  let keycode;

  let type = "stop";
  let arrow = "right";
  let pressJump = false;
  let canJump = true;
  let jumpDown = false;

  canvas.width = W * 2;
  canvas.height = H * 2;
  canvas.style.width = W + "px";
  canvas.style.height = H + "px";
  canvas.style.position = "absolute";
  canvas.style.top = "220px";
  canvas.style.left = "50%";
  canvas.style.transform = "translateX(-50%)";

  document.body.appendChild(canvas);

  const context = canvas.getContext("2d");
  canvas.onmousedown = function (event) {
    const x = event.clientX - context.canvas.offsetLeft;
    const y = event.clientY - context.canvas.offsetTop;

    if (x > -163 && x < -106 && y > 44 && y < 89) {
      dx = -5;
      type = "move";
      arrow = "left";
    }
    if (x > -83 && x < -26 && y > 44 && y < 89) {
      dx = 5;
      type = "move";
      arrow = "right";
    }
    if (x > 163 && x < 240 && y > 44 && y < 89) {
      if (canJump) {
        pressJump = true;
        canJump = false;
      }
    }
    console.log(x, y);
  };
  canvas.onmouseup = function () {
    dx = 0;
    type = "stop";
    pressJump = false;
  };

  document.addEventListener("keydown", function (event) {
    //눌러진 key의 코드값
    keycode = event.keyCode;
    switch (keycode) {
      case 37:
        dx = -5;
        type = "move";
        arrow = "left";
        //imgLeft();
        break; //left
      case 39:
        dx = 5;
        type = "move";
        arrow = "right";
        //imgRight();
        break; //right
      case 32:
        if (canJump) {
          pressJump = true;
          canJump = false;
        }
        break; //right
    }
  });
  document.addEventListener("keyup", function (event) {
    //떨어진 key의 코드값
    keycode = event.keyCode;
    switch (keycode) {
      case 37:
      case 39:
        dx = 0;
        type = "stop";
        break;
      case 32:
        pressJump = false;
        break;
    }
  });

  let toggle = true;
  let moveCount = 0;
  function toggleImg() {
    if (moveCount > 30) {
      toggle = !toggle;
      moveCount = 1;
    }
    moveImgChar = toggle
      ? arrow === "left"
        ? canvas.offMove1L
        : canvas.offMove1R
      : arrow === "left"
      ? canvas.offMove2L
      : canvas.offMove2R;
  }
  function pressKeyChangeImg() {
    let left, right, space;
    left = arrow === "left" && type === "move" ? canvas.leftClick : canvas.left;
    right =
      arrow === "right" && type === "move" ? canvas.rightClick : canvas.right;
    space = pressJump ? canvas.spaceClick : canvas.space;

    return { left, right, space };
  }
  const draw = function () {
    let imgChar;
    if (!canJump) {
      imgChar = arrow === "left" ? canvas.offMove2L : canvas.offMove2R;
    } else {
      if (type === "move") {
        moveCount++;
        toggleImg();
        imgChar = moveImgChar;
      } else {
        moveCount = 0;
        stopImgChar = arrow === "left" ? canvas.offStopL : canvas.offStopR;
        imgChar = stopImgChar;
      }
    }
    const { left, right, space } = pressKeyChangeImg();
    context.strokeStyle = "rgba(0,0,0,0.5)";
    context.drawImage(canvas.offBG, bgx, 0, W, H, 0, 0, W * 2, H * 2);
    context.drawImage(imgChar, x - w, y - h * 3, w * 2, h * 2);
    context.drawImage(canvas.moveBg, 400, 50, 600, 160);
    context.drawImage(canvas.jumpBg, 1050, 50, 500, 160);
    context.drawImage(left, 670, 80, 120, 100);
    context.drawImage(right, 830, 80, 120, 100);
    context.drawImage(space, 1320, 80, 160, 100);

    warpDraw(context, warpImg, bgx);
  };

  const move = function () {
    if (bgx >= 0 && bgx <= W_SCREEN) {
      bgx += dx;
    } else {
      if (x - w >= 0 && x + w <= 2000) {
        x += dx * 2;
        if (x == 1000 && (bgx <= W_SCREEN || bgx >= 0)) {
          bgx += dx;
        }
      } else if (x - w < 0) {
        x = dx > 0 ? x + dx * 2 : x;
      } else if (x + w > 2000) {
        x = dx < 0 ? x + dx * 2 : x;
      }
    }
  };
  let jumpCount = 35;
  const jump = function () {
    if (canJump === false) {
      if (jumpDown) {
        jumpCount++;
        y = y + 9.8 * (jumpCount / 10);
        if (y >= 1000) {
          y = 1000;
          canJump = true;
          jumpDown = false;
          jumpCount = 35;
        }
      } else {
        jumpCount--;
        y = y - 9.8 * (jumpCount / 10);
        if (y <= 400 || jumpCount <= 10) {
          jumpDown = true;
        }
      }
    }
  };
  draw();
  // Update
  const update = function () {
    move();
    jump();
    draw();
  };
  setInterval(update, 1000 / 60);
  update();
}
