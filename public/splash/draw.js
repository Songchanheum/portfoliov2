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
}
