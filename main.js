const mason_audio = new Audio("mason.mp3");

function play_mason() {
  mason_audio.play();
}

function crash() {
  while(true)
    location.reload(1);
}

function timed_crash() {
  setTimeout(crash, 1000)
}

/*onbeforeunload = function(){};

setTimeout(function(){
  while(true)
    location.reload(1)
}, 1000)*/
