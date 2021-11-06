function preload() {
	world_start = loadSound("world_start.wav");
	marioDie = loadSound("mariodie.wav");
	marioJump = loadSound("jump.wav");
	marioCoin = loadSound("coin.wav");
	marioKick = loadSound("kick.wav");
	marioGameOver = loadSound("gameover.wav")
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240, 336);
	instializeInSetup(mario);
	canvas.parent("canvas");

	video = createCapture(VIDEO);
	video.size(800, 400);
	video.parent("gameConsole");

	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
}

function modelLoaded(){
	console.log("Model successfuly loaded! 🎉");
}

function gotPoses(results) {
	if(results.length > 0){
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
	}
}

function draw() {
	game()
}