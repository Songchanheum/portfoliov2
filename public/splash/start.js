function start(stopI, moveI, bgI) {
  const canvas = document.createElement("canvas");

  const stopImgChar = stopI;
  const moveImgChar = moveI;
  const imgBg = bgI;

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

  let canJump = true;
  let jumpDown = false;

  canvas.width = W * 2;
  canvas.height = H * 2;
  canvas.style.width = W + "px";
  canvas.style.height = H + "px";

  document.body.appendChild(canvas);

  const context = canvas.getContext("2d");

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
    }
  });

  let toggle = true;
  let moveCount = 0;
  function toggleImg() {
    if (moveCount > 30) {
      toggle = !toggle;
      moveCount = 1;
    }
    moveImgChar.src = toggle
      ? IMG_PATH + "/common/moveImg1_" + arrow + ".png"
      : IMG_PATH + "/common/moveImg2_" + arrow + ".png";
  }
  const draw = function () {
    let imgChar;
    if (!canJump) {
      moveImgChar.src = IMG_PATH + "/common/moveImg2_" + arrow + ".png";
      imgChar = moveImgChar;
    } else {
      if (type === "move") {
        moveCount++;
        toggleImg();
        imgChar = moveImgChar;
      } else {
        moveCount = 0;
        stopImgChar.src = IMG_PATH + "/common/stopImg_" + arrow + ".png";
        imgChar = stopImgChar;
      }
    }
    context.strokeStyle = "rgba(0,0,0,0.5)";
    context.drawImage(imgBg, bgx, 0, W, H, 0, 0, W * 2, H * 2);
    context.drawImage(imgChar, x - w, y - h * 3, w * 2, h * 2);
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
