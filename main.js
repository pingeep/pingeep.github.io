const mason_audio = new Audio("mason.mp3");

window.onload = function site_load() {
  play_mason()
  timed_crash(4000)
}

function play_mason() {
  mason_audio.currentTime = 0;
  mason_audio.play();
}

function crash() {
  while(true)
    location.reload(1);
}

function timed_crash(timer) {
  setTimeout(crash, timer)
}

/*onbeforeunload = function(){};

setTimeout(function(){
  while(true)
    location.reload(1)
}, 1000)*/
