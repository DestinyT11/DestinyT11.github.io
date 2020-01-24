
for(var i = 0; i < 10; i++ ){
  var ans = Math.random(i);
  document.write("Loop: " + ans + "<br/>");
}

document.write("Part B: <br/>");
for(var i = 0; i < 20; i++ ){
  var ans = Math.sqrt(i);
  document.write("Loop:" + ans + "<br/>")
}
        
          
function myLoop(){
var end = document.getElementById("end").value;
var start = document.getElementById("start").value;
var jump = document.getElementById("jump").value;
  
    start = Number(start);
  end = Number(end);
  jump = Number(jump);
  
 console.log(start) 
console.log(typeof start);
console.log(typeof end);
console.log(typeof jump);
  
  start = Number(start);
  end = Number(end);
  jump = Number(jump);
  
for(var i = 0; i <= end; i+=jump)
{
  document.write('<p>' + i);
}
}
