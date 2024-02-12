Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});

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

function check () {
    img = document.getElementById('captured_image');
    classifier.classify(img, gotResult);
}

function gotResult(error, results) {
    if (errror) {
        console.error(error);
    } else {
        console.log(results);
        document.getElementById("gesture-name").innerHTML = results[0].label;
        classify.gotResult = results[0].label;
        speak();
        
        if(results[0].label =="OK")
        {
document.getElementById("gesture-icon").innerHTML = "&#128076;";
        }

        if(results[0].label =="Thumbs Up")
        {
document.getElementById("gesture-icon").innerHTML = "&#128077;";
        }

        if(results[0].label =="Peace")
        {
document.getElementById("gesture-icon").innerHTML = "&#9996;";
        }

       
    }
}

function speak () {
    var synth = window.speechSynthesis;
    speak_data_1 = "The hand gesture is " + classify.gotResult;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}
