var player1 = true;
var player2 = false;

var button0 = document.getElementById("button0");
var button1 = document.getElementById("button1");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var button5 = document.getElementById("button5");
var button6 = document.getElementById("button6");
var button7 = document.getElementById("button7");
var button8 = document.getElementById("button8");

var reset = document.getElementById("reset");

// var blue = document.getElementById("blueDot");

var counter = 0;

for (var i=0; i<9 ; i++){

  console.log("button" +  i);

  var clickTarget = document.getElementById("button" + i);

  clickTarget.addEventListener("click", function clickBox(e) {

    var button = e.target

    if (button.innerHTML !=""){

      alert('this button has already been clicked');

    } else {

      if(player1 == true){
         button.style.backgroundColor = "#010163";
         button.style.color = "white";
         button.innerHTML="X";
         document.getElementById("displayResult").innerHTML="Player Two Turn";
         player1 = false;
      } else {
         button.style.backgroundColor="#CF0000";
         button.innerHTML="o"; 
         button.style.color = "white";
         document.getElementById("displayResult").innerHTML="Player One Turn";
         player1 = true;
      }
      winner();
      counter ++
    }
  });
}

        
function winner() {
 if(
  ((button0.innerHTML=="X") && (button1.innerHTML=="X") && (button2.innerHTML=="X")) ||
  ((button3.innerHTML=="X") && (button4.innerHTML=="X") && (button5.innerHTML=="X")) || 
  ((button6.innerHTML=="X") && (button7.innerHTML=="X") && (button8.innerHTML=="X")) ||
  ((button0.innerHTML=="X") && (button3.innerHTML=="X") && (button6.innerHTML=="X")) || 
  ((button1.innerHTML=="X") && (button4.innerHTML=="X") && (button7.innerHTML=="X")) || 
  ((button2.innerHTML=="X") && (button5.innerHTML=="X") && (button8.innerHTML=="X")) || 
  ((button0.innerHTML=="X") && (button4.innerHTML=="X") && (button8.innerHTML=="X")) || 
  ((button2.innerHTML=="X") && (button4.innerHTML=="X") && (button6.innerHTML=="X")) 
   ) 
  {
  document.getElementById("displayResult").innerHTML="Player One Wins !";
  
  }
  else if
   (
  ((button0.innerHTML=="o") && (button1.innerHTML=="o") && (button2.innerHTML=="o")) ||
  ((button3.innerHTML=="o") && (button4.innerHTML=="o") && (button5.innerHTML=="o")) || 
  ((button6.innerHTML=="o") && (button7.innerHTML=="o") && (button8.innerHTML=="o")) ||
  ((button0.innerHTML=="o") && (button3.innerHTML=="o") && (button6.innerHTML=="o")) || 
  ((button1.innerHTML=="o") && (button4.innerHTML=="o") && (button7.innerHTML=="o")) || 
  ((button2.innerHTML=="o") && (button5.innerHTML=="o") && (button8.innerHTML=="o")) || 
  ((button0.innerHTML=="o") && (button4.innerHTML=="o") && (button8.innerHTML=="o")) || 
  ((button2.innerHTML=="o") && (button4.innerHTML=="o") && (button6.innerHTML=="o")) 
   ) 
{
  document.getElementById("displayResult").innerHTML="Player Two Wins !";
  }
  

  else {
   if(counter === 8) {
  document.getElementById("displayResult").innerHTML="It's a Tie!";
   }
 } 
};

//RESET FUNCTION
reset.addEventListener("click",function clearGrid() {

  for(var i=0; i<9;i++) {

    var clearReset = document.getElementById("button" + i);
    console.log("button" + i)
    clearReset.style.backgroundColor = null ;
    clearReset.innerHTML = "" ;
  }
  counter=0;
  player1=true;
  player2=false;
  document.getElementById("displayResult").innerHTML="Let's Play !";
});


 document.getElementById("pickBlue").addEventListener("mouseover",function colorMouse(){
     document.getElementById("pickBlue").style.color= "#010163";
     document.getElementById("pickBlue").innerHTML= "Player One Is Blue";
});

 document.getElementById("pickRed").addEventListener("mouseover",function colorMouse(){
     document.getElementById("pickRed").style.color= "#CF0000";
     document.getElementById("pickRed").innerHTML= "Player Two Is Red";
});



