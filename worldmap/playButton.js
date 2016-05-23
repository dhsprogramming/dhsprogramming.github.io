var audio;
var text;
var button;

window.onload = function(){
	button = document.getElementById('button');
	audio = document.getElementById('sound');
	text = document.getElementById('playText');
	button.onclick = buttonClick;
	audio.addEventListener('play', playing, false);
	audio.addEventListener('pause', pausing, false);
}

var buttonClick = function() {
    if (audio.paused) {
        audio.play();
    }else{
       audio.pause();
    }
}

var playing = function(){
	//console.log("Played");
	text.innerHTML = "Pause";
	button.className += "shadow";
}

var pausing = function(){
	//console.log("Paused");
	text.innerHTML = "Play"
	button.className = button.className.replace( /(?:^|\s)shadow(?!\S)/g , '' );
}