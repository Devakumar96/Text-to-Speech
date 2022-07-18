let voicelist = responsiveVoice.getVoice();

let allVoices;

for(let i=0; i<voicelist.length; i++){

    let voice = '<option value = "'+voicelist[i].name+'"> '+voicelist[i].name+'<option>';
    
    allVoices = allVoices + voice;
}

document.getElementById("voice-list").innerHTML = allVoices;

let start = document.getElementById("start");

let pause = document.getElementById("pause");

let resume = document.getElementById("resume");

let canc = document.getElementById("canc");

let rate = document.getElementById("rate");

rate.oninput = function() {
    document.getElementById("rate-value").innerHTML = rate.value;
}
start.onclick = function(){
    let text = document.getElementById("text").value;

    let lang = document.getElementById("voice-list").value;

    let rateValue = document.getElementById("rate").value;

    responsiveVoice.speak(text,lang,{rate:rateValue});
}

pause.onclick = function(){

    if (responsiveVoice.isPlaying()){

        responsiveVoice.pause();

        pause.style.display = "none";

        resume.style.display = "inline";
    }
}
resume.onclick = function(){

    if(responsiveVoice.isPlaying()){

        responsiveVoice.resume();

        pause.style.display = "inline";

        resume.style.display = "none";

    }
}

canc.onclick = function (){
    
    responsiveVoice.cancel();
}