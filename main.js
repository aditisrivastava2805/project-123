noseX=0;
noseY=0;
difference=0;
rightWristX=0;
leftWristX=0;


function setup() {
   video = createCapture(VIDEO);
   video.size(500,500);
   
   canvas = createCanvas(500,500);
   canvas.position(550,130);

   poseNet = ml5.poseNet(video, modelLoaded);
   poseNet.on('pose', gotPoses);
}

function draw(){
  background ("#61605f");  
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0 )
{
    console.log(results);
}
}

