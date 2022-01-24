let startButton = document.querySelector("#start");



  const recognition = new webkitSpeechRecognition();


recognition.continous = false;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternative = 1;

const synth = window.speechSynthesis;

startButton.addEventListener('click',function(){
  recognition.start();
})

let utter = new SpeechSynthesisUtterance("Hi How are you");
utter.onend = function(){
  recognition.start();
}

recognition.onresults = function(e){
  const transcript = e.results[e.results.length-1][0];
  console.log(transcript)
  if(transcript === "hello"){
    recognition.stop();
    utter.text = "Hi , How are you?";
    synth.speak(utter);
    console.log("hi, how are you");
  }
}
