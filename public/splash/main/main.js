
window.onload = function(){
	// Canvas!
	var canvas = document.createElement("canvas");
	var w = 1500;
	var h = 600;
	canvas.width = w*2;
	canvas.height = h*2;
	canvas.style.width = w+"px";
	canvas.style.height = h+"px";
    canvas.style.backgroundColor = "#fff"
	document.body.appendChild(canvas);

    // 전역변수로서 이미지 객체 생성
    var x=1500, y=550; //정 가운데로 위치
    var w=64, h=64; //플레이어 이미지의 절반 사이즈

    var imgChar= new Image();
    imgChar.src="../../images/common/stopImg.png";
    // var imgBg= new Image();
    // imgBg.src="../../images/character.png";

	// Update
	var update = function(){

	};
	setInterval(update,1000/60);
	update();

    var context= canvas.getContext('2d');
    var draw = function() {
        context.drawImage(imgChar,x-w,y-h,w*2,h*2);
        context.strokeStyle = "rgba(0,0,0,0.5)";
        context.font="30px sans-serif";
        context.fillText(keycode, 10, 40);
        window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);
	// // RAF
	// var ctx = canvas.getContext("2d");
	// var draw = function(){

	// 	// Clear
	// 	ctx.clearRect(0,0,canvas.width,canvas.height);
	// 	ctx.lineWidth = 2;

	// 	// Draw Boids
	// 	ctx.strokeStyle = "rgba(255,255,255,0.5)";
	// 	for(var i=0;i<boids.length;i++) boids[i].draw(ctx);

	// 	// DRAW CIRCLE
	// 	_drawCircle(ctx, runRadius*0.7);

	// 	// RAF
	// 	window.requestAnimationFrame(draw);
	// };
	// window.requestAnimationFrame(draw);

};
