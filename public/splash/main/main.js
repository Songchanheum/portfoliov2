

const W = 1000;
const H = 500;

window.onload = function(){
	const canvas = document.createElement("canvas");

    let x=1000, y=1000; //정 가운데로 위치
    let w=128, h=128; //플레이어 이미지의 절반 사이즈
    let bgx = 750;

	canvas.width = W*2;
	canvas.height = H*2;
	canvas.style.width = W+"px";
	canvas.style.height = H+"px";
    canvas.style.transition = 'all 0.5s linear'
    
    let type = "wait"
    
	// const btn = document.createElement("button");
    // btn.width = 120;
    // btn.height = 120;
    // btn.addEventListener("click", function (){
    //     window.cancelAnimationFrame(draw)
    //     setTimeout(function(){
    //         console.log("start")
    //         window.requestAnimationFrame(origin)
    //     },1000);
    // })
	// document.body.appendChild(btn);
	document.body.appendChild(canvas);

    document.addEventListener('keypress', function(event){
        //눌러진 key의 코드값
        keycode=event.keyCode;
        switch(keycode){
            case 13: 
                if(type === 'wait'){
                    type = 'start'
                    window.cancelAnimationFrame(draw)
                    setTimeout(function(){
                        console.log("start")
                        window.requestAnimationFrame(origin)
                    },1000);
                }
                break; //left
        }
    })

    const stopImgChar= new Image();
    stopImgChar.src="../../images/common/stopImg.png";
    const moveImgChar= new Image();
    moveImgChar.src="../../images/common/moveImg1.png";
    const imgBg= new Image();
    imgBg.src="../../images/common/bg.png";
    
    const context= canvas.getContext('2d');
    function draw(){
        context.strokeStyle = "rgba(0,0,0,0.5)";
        context.drawImage(imgBg,bgx,0,1000,500,0,0,W*2,H*2)
        context.drawImage(stopImgChar,x-w,y-(h*3),w*2,h*2);
        // context.drawImage(imgBg,1125,250,500,250,0,0,W*2,H*2)
        // context.drawImage(stopImgChar,x-(w*2),y-(h*6),w*4,h*4);
        window.requestAnimationFrame(draw);
    }
    let count = 0;
    function origin(){
        count += 10;
        console.log(count);
        if(count < 1000){
            context.setTransform(2 - (count / 1000), 0, 0, 2 - (count / 1000) ,-1000 + count, -1000 + count)
            window.requestAnimationFrame(origin)
        }else{
            context.setTransform(1, 0, 0, 1, -1000, -1000)
            window.cancelAnimationFrame(origin)
            canvas.style.display="none"
            start(stopImgChar, moveImgChar, imgBg);
        }
    }

    draw();
    context.transform(2, 0, 0, 2, -1000, -1000)

};

function start(stopI, moveI, bgI){
	const canvas = document.createElement("canvas");

    const stopImgChar = stopI;
    const moveImgChar = moveI;
    const imgBg = bgI;

    let x=1000, y=1000; //정 가운데로 위치
    let w=128, h=128; //플레이어 이미지의 절반 사이즈
    let bgx = 750;

    let dx=0;
    let dy=0;
    let keycode;

    let type = "stop";
    let arrow = 'right';
    
	canvas.width = W*2;
	canvas.height = H*2;
	canvas.style.width = W+"px";
	canvas.style.height = H+"px";

	document.body.appendChild(canvas);

    const context= canvas.getContext('2d');

    document.addEventListener('keydown', function(event){
        //눌러진 key의 코드값
        keycode=event.keyCode;
        switch(keycode){
            case 37: 
                dx=-5; 
                type = 'move';
                arrow = 'left';
                //imgLeft();
                break; //left
            case 39: 
                dx=5; 
                type = 'move';
                arrow = 'right';
                //imgRight();
                break; //right
        }
    })
    document.addEventListener('keyup', function(event){
        //떨어진 key의 코드값
        keycode=event.keyCode;
        switch(keycode){
            case 37: 
            case 39: 
                dx=0; 
                type = "stop"
                break;
        }
    });

    let toggle = true;
    let moveCount = 0;
    function toggleImg(){
        if(moveCount > 30){
            toggle = !toggle;
            moveCount = 1;
        }
        moveImgChar.src = toggle ? "../../images/common/moveImg1_"+arrow+".png" : "../../images/common/moveImg2_"+arrow+".png"
    }
    const draw = function() {
        let imgChar;
        if(type === "move"){
            moveCount ++;
            toggleImg();
            imgChar = moveImgChar;
        }else{
            moveCount = 0;
            stopImgChar.src = "../../images/common/stopImg_"+arrow+".png" 
            imgChar = stopImgChar;
        }
        console.log(x, y, w, h)
        context.strokeStyle = "rgba(0,0,0,0.5)";
        context.drawImage(imgBg,bgx,0,1000,500,0,0,W*2,H*2)
        context.drawImage(imgChar,x-w,y-(h*3),w*2,h*2);
        // context.drawImage(imgChar,x-w,y-h,w*2,h*2);
        //window.requestAnimationFrame(draw);
    }
    //window.requestAnimationFrame(draw);

    const move = function() {
        console.log(x, bgx);
        if(bgx >= 0 && bgx <= 1500){
            bgx+=dx;
        }else{
            if(x-w >= 0 && x+w <= 2000){
                x += dx * 2;
               if(x == 1000 && (bgx <= 1500 || bgx >= 0)){
                    bgx += dx;
                }
            }else if(x-w < 0){
               x = dx > 0 ? x + dx * 2 : x;
            }else if(x+w > 2000){
                x = dx < 0 ? x + dx * 2 : x;
            }
        }
        
    }
    draw();
	// Update
	const update = function(){
        move();
        draw();
	};
	setInterval(update,1000/60);
	update();
}