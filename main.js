camera = document.getElementByyId("camera")

Webcam.attach( '#camera' )

function captureImage() {
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);
classifier= ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/qhqMFf_P-/model.json',modelLoaded);

function modelLoaded() {
    console.log('Model Loaded!');
    
}