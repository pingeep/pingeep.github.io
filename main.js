const mason_audio = new Audio("mason.mp3");

document.onclick = function user_click() {
  mason_audio.play();
  crash();
}

/*window.onbeforeunload = function user_leave() {
  crash();
}*/

function crash() {
  while(true)
    location.reload(1);
}

function timed_crash(timer) {
  setTimeout(crash, timer)
}

window.onload = function site_load() {
  timed_crash(500)
  mason_audio.play()
}
