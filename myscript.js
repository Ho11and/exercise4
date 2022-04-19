function myFunction(){
  var x =document.getElementById("myText1").value;
  var y =document.getElementById("myText2").value;
  var z = Number(x) + Number(y);
  if (x!=""){
    if(isNaN(x)){
      alert("error");
    }
  }
  if (y!=""){
    if(isNaN(y)){
      alert("error");
    }
  }
document.getElementById("demo").innerHTML =
"The  value of z is:" + z;
}

//Holland
//This JS can identify whether the user has entered a number. If so, the result will show the result of adding the two numbers. If not, error will be displayed.