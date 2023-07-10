
let count = 0;
function openDraw(context, type){
    count ++;
    if(type === 'wait'){
        const openText = new Image();
        openText.src = IMG_PATH + "common/open" + (Math.trunc(count / 30) + 1)  + ".png";
        context.drawImage(openText,560,550);
       count = count > 150 ? 0 : count;
    }
}

function warpDraw(context, warpImg, bgx) {
    const warp = setupData?.map?.warp ?? [];
    warp.forEach((e,i) => {
        if(warpImg.length <= i){
            warpImg.push(new Image());
        }
        warpImg[i].src = IMG_PATH + "/"+ category +"/" + e.name + ".png";
        let movex = 0;
        let xPosition = 0;
        if(e.position[0] > 0){
            movex = bgx >= 0 ? bgx : 0;
            xPosition = e.position[2] * 2;
        }else{
            movex = bgx >= W_SCREEN ? 0 : W_SCREEN - bgx;
            xPosition = (e.position[2] - W_SCREEN) * 2;                
        }
        context.drawImage(warpImg[i],(movex/e.position[0]) * warpImg[i].width,0, warpImg[i].width, warpImg[i].height,xPosition,e.position[3] * 2,e.position[0]* 2,e.position[1] * 2 )
    })
}