let count = 0;
function openDraw(context, type) {
  count++;
  if (type === "wait") {
    const openText = new Image();
    openText.src =
      IMG_PATH + "common/open" + (Math.trunc(count / 30) + 1) + ".png";
    context.drawImage(openText, 560, 550);
    count = count > 150 ? 0 : count;
  }
}

function warpDraw(context, warpImg, bgx) {
  const warp = setupData?.map?.warp ?? [];
  warp.forEach((e, i) => {
    if (warpImg.length <= i) {
      warpImg.push(new Image());
    }
    warpImg[i].src = IMG_PATH + "/" + category + "/" + e.name + ".png";
    let movex = 0;
    let xPosition = 0;
    if (e.position[0] > 0) {
      movex = bgx >= 0 ? bgx : 0;
      xPosition = e.position[2] * 2;
    } else {
      movex = bgx >= W_SCREEN ? 0 : W_SCREEN - bgx;
      xPosition = (e.position[2] - W_SCREEN) * 2;
    }
    context.drawImage(
      warpImg[i],
      (movex / e.position[0]) * warpImg[i].width,
      0,
      warpImg[i].width,
      warpImg[i].height,
      xPosition,
      e.position[3] * 2,
      e.position[0] * 2,
      e.position[1] * 2
    );
  });
}

function offScreenCanvas(canvas) {
  canvas.offBG = document.createElement("canvas");
  canvas.offBGContext = canvas.offBG.getContext("2d");
  canvas.offBG.width = 2500;
  canvas.offBG.height = 500;
  canvas.offStopL = document.createElement("canvas");
  canvas.offStopLContext = canvas.offStopL.getContext("2d");
  canvas.offStopL.width = 64;
  canvas.offStopL.height = 64;
  canvas.offStopR = document.createElement("canvas");
  canvas.offStopRContext = canvas.offStopR.getContext("2d");
  canvas.offStopR.width = 64;
  canvas.offStopR.height = 64;
  canvas.offMove1L = document.createElement("canvas");
  canvas.offMove1LContext = canvas.offMove1L.getContext("2d");
  canvas.offMove1L.width = 64;
  canvas.offMove1L.height = 64;
  canvas.offMove1R = document.createElement("canvas");
  canvas.offMove1RContext = canvas.offMove1R.getContext("2d");
  canvas.offMove1R.width = 64;
  canvas.offMove1R.height = 64;
  canvas.offMove2L = document.createElement("canvas");
  canvas.offMove2LContext = canvas.offMove2L.getContext("2d");
  canvas.offMove2L.width = 64;
  canvas.offMove2L.height = 64;
  canvas.offMove2R = document.createElement("canvas");
  canvas.offMove2RContext = canvas.offMove2R.getContext("2d");
  canvas.offMove2R.width = 64;
  canvas.offMove2R.height = 64;
  canvas.moveBg = document.createElement("canvas");
  canvas.moveBgContext = canvas.moveBg.getContext("2d");
  canvas.moveBg.width = 900;
  canvas.moveBg.height = 240;
  canvas.jumpBg = document.createElement("canvas");
  canvas.jumpBgContext = canvas.jumpBg.getContext("2d");
  canvas.jumpBg.width = 750;
  canvas.jumpBg.height = 240;

  canvas.right = document.createElement("canvas");
  canvas.rightContext = canvas.right.getContext("2d");
  canvas.right.width = 512;
  canvas.right.height = 486;
  canvas.rightClick = document.createElement("canvas");
  canvas.rightClickContext = canvas.rightClick.getContext("2d");
  canvas.rightClick.width = 512;
  canvas.rightClick.height = 486;
  canvas.left = document.createElement("canvas");
  canvas.leftContext = canvas.left.getContext("2d");
  canvas.left.width = 512;
  canvas.left.height = 486;
  canvas.leftClick = document.createElement("canvas");
  canvas.leftClickContext = canvas.leftClick.getContext("2d");
  canvas.leftClick.width = 512;
  canvas.leftClick.height = 486;
  canvas.space = document.createElement("canvas");
  canvas.spaceContext = canvas.space.getContext("2d");
  canvas.space.width = 700;
  canvas.space.height = 486;
  canvas.spaceClick = document.createElement("canvas");
  canvas.spaceClickContext = canvas.spaceClick.getContext("2d");
  canvas.spaceClick.width = 700;
  canvas.spaceClick.height = 486;

  const stopLImgChar = new Image();
  stopLImgChar.src = IMG_PATH + "/common/stopImg_left.png";
  stopLImgChar.addEventListener("load", () => {
    canvas.offStopLContext.drawImage(stopLImgChar, 0, 0);
  });
  const stopRImgChar = new Image();
  stopRImgChar.src = IMG_PATH + "/common/stopImg_right.png";
  stopRImgChar.addEventListener("load", () => {
    canvas.offStopRContext.drawImage(stopRImgChar, 0, 0);
  });

  const move1LImgChar = new Image();
  move1LImgChar.src = IMG_PATH + "/common/moveImg1_left.png";
  move1LImgChar.addEventListener("load", () => {
    canvas.offMove1LContext.drawImage(move1LImgChar, 0, 0);
  });

  const move1RImgChar = new Image();
  move1RImgChar.src = IMG_PATH + "/common/moveImg1_right.png";
  move1RImgChar.addEventListener("load", () => {
    canvas.offMove1RContext.drawImage(move1RImgChar, 0, 0);
  });

  const move2LImgChar = new Image();
  move2LImgChar.src = IMG_PATH + "/common/moveImg2_left.png";
  move2LImgChar.addEventListener("load", () => {
    canvas.offMove2LContext.drawImage(move2LImgChar, 0, 0);
  });

  const move2RImgChar = new Image();
  move2RImgChar.src = IMG_PATH + "/common/moveImg2_right.png";
  move2RImgChar.addEventListener("load", () => {
    canvas.offMove2RContext.drawImage(move2RImgChar, 0, 0);
  });

  const imgBg = new Image();
  imgBg.src = IMG_PATH + "/" + category + "/bg.png";
  imgBg.addEventListener("load", () => {
    canvas.offBGContext.drawImage(imgBg, 0, 0);
  });

  const moveBg = new Image();
  moveBg.src = IMG_PATH + "/common/move.png";
  moveBg.addEventListener("load", () => {
    canvas.moveBgContext.drawImage(moveBg, 0, 0);
  });

  const jumpBg = new Image();
  jumpBg.src = IMG_PATH + "/common/jump.png";
  jumpBg.addEventListener("load", () => {
    canvas.jumpBgContext.drawImage(jumpBg, 0, 0);
  });

  const right = new Image();
  right.src = IMG_PATH + "/common/right.png";
  right.addEventListener("load", () => {
    canvas.rightContext.drawImage(right, 0, 0);
  });

  const rightClick = new Image();
  rightClick.src = IMG_PATH + "/common/right-click.png";
  rightClick.addEventListener("load", () => {
    canvas.rightClickContext.drawImage(rightClick, 0, 0);
  });

  const left = new Image();
  left.src = IMG_PATH + "/common/left.png";
  left.addEventListener("load", () => {
    canvas.leftContext.drawImage(left, 0, 0);
  });

  const leftClick = new Image();
  leftClick.src = IMG_PATH + "/common/left-click.png";
  leftClick.addEventListener("load", () => {
    canvas.leftClickContext.drawImage(leftClick, 0, 0);
  });

  const space = new Image();
  space.src = IMG_PATH + "/common/space.png";
  space.addEventListener("load", () => {
    canvas.spaceContext.drawImage(space, 0, 0);
  });

  const spaceClick = new Image();
  spaceClick.src = IMG_PATH + "/common/space-click.png";
  spaceClick.addEventListener("load", () => {
    canvas.spaceClickContext.drawImage(spaceClick, 0, 0);
  });
}
