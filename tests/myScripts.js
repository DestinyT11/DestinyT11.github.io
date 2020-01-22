
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

for(var i = 0; i <= end; i++)
{
  document.write('<p>' + i);
}
}
