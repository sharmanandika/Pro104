Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
Camera=document.getElementById("camera");
Webcam.attach(Camera);
function take_snapshot(){
    Webcam.snap(function(data_URI){
        document.getElementById("result").innerHTML="<img id='Capture_image' src='"+data_URI+"'>";
    });
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/_UJ0i2q8U/model.json",modelloaded);
function modelloaded(){
    console.log("model is loaded");
}