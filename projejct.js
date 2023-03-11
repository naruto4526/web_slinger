
  var index = 0;
  
  function showimg(j)
  {
    var x =document.getElementsByClassName("slide");
    for(var i = 0; i < x.length; i++)
    {
      x[i].style.display = "none";
    }
    x[j].style.display = "block";
  }
  showimg(index);

  function show(i)
  {
    var x =document.getElementsByClassName("slide");
    index += i;
    if ( index >= x.length)
      {
        index = 0;
      }
    else if ( index < 0)
      {
        index = x.length - 1;
      }
                
    showimg(index);
  }

  function anime()
  {
    var x = document.getElementsByClassName("a");
    var y = document.getElementsByClassName("fill");
    for(i = 0; i < y.length ; i++)
    {
      y[i].style.display = "none";
    }

    for(i = 0; i < x.length ; i++)
    {
      x[i].style.display = "block";
    }

  }

  function calc(){
    var checkboxes = document.getElementsByName('p1');
    var sum = 0;
    checkboxes.forEach(function(checkbox){
        if (checkbox.checked) {
          sum += parseInt(checkbox.value);
        }
    })
    document.getElementById('total').innerHTML=sum;
}
function show()
{
  var x = document.getElementsByClassName("video");
  x[0].style.display = "none";
  x[1].style.display="block";
}


var score = 0;
document.getElementById("sco").innerHTML = score;
function inc()
{
score++;

var x = document.getElementsByClassName("mov");
var t = Math.floor(Math.random()*28);
for(var i = 0; i <x.length; i++)
{
    x[i].style.display = "block";
}
for(var i = 0; i <= t; i++)
{
    x[i].style.display = "none";
}
document.getElementById("sco").innerHTML = score;
}
function start()
{
var x = document.getElementsByClassName("sprite");
x[0].style.display = "block";
}


