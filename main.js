function setup() {
    video = createCapture(VIDEO);
    video.size(550,550);

    canvas = createCanvas(500,460);
    canvas.position(700,125);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
 

function draw() {
    image(video, 0, 0, 600, 400);
}


