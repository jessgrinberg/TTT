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
var allButtons = [button0,button1,button2,button3,button4,button5,button6,button7,button8];


var blue = document.getElementById("blueDot");

// var blue = document.getElementById("blueDot")

// button1.onClick= new clickBox("return false");


button0.addEventListener("click", function clickBox() {
  if(player1 == true){
    button0.style.backgroundColor = "#010163";
    button0.style.color = "white";
    button0.innerHTML="X";
    player1 = false;
  } else {
    button0.style.backgroundColor="#CF0000";
    button0.innerHTML="o"; 
    button0.style.color = "white";
    player1 = true;
  }
  winner();
});

// button1.addEventListener("click", function clickBox() {
//   if(player1 == true){
//     button1.disabled= true; 
//     player1= false;       
//   } else {
//     button1.disabled= true;   
//     player1 = true;   
//   }  
//    winner();
// });

 document.getElementById("pickBlue").addEventListener("mouseover",function colorMouse(){
     document.getElementById("pickBlue").style.color= "#010163";
});

 document.getElementById("pickRed").addEventListener("mouseover",function colorMouse(){
     document.getElementById("pickRed").style.color= "#CF0000";
});



button1.addEventListener("click", function clickBox() {
  if(player1 == true){
    button1.style.backgroundColor = "#010163";
    button1.innerHTML="X"; 
    button1.style.color = "white";
    player1= false;       
  } else {
    button1.style.backgroundColor="#CF0000";
    button1.innerHTML="o"; 
    button1.style.color = "white";  
    player1 = true;   
  }  
  winner();
});

button2.addEventListener("click", function clickBox() {
  if(player1 == true){
    button2.style.backgroundColor="#010163";
    button2.innerHTML="X";
    button2.style.color = "white";
    player1= false; 
  } else {
    button2.style.backgroundColor="#CF0000";
    button2.innerHTML="o";
    button2.style.color = "white"; 
    player1 = true; 
  }
  winner();
});


button3.addEventListener("click", function clickBox() {
  if(player1 == true){
    button3.style.backgroundColor = "#010163";
    button3.innerHTML="X";
    button3.style.color = "white";
    player1= false; 
  } else {
    button3.style.backgroundColor="#CF0000";
    button3.innerHTML="o";
    button3.style.color = "white"; 
    player1 = true; 
  }
  winner();
});

button4.addEventListener("click", function clickBox() {
  if(player1 == true){
    button4.style.backgroundColor = "#010163";
    button4.innerHTML="X";
    button4.style.color = "white";
    player1= false; 
  } else {
    button4.style.backgroundColor="#CF0000";
    button4.innerHTML="o"; 
    button4.style.color = "white"; 
    player1 = true;
  }
  winner();
});

button5.addEventListener("click", function clickBox() {
  if(player1 == true){
    button5.style.backgroundColor = "#010163";
    button5.innerHTML="X";
    button5.style.color = "white";
    player1= false;       
  } else {
    button5.style.backgroundColor="#CF0000";
    button5.innerHTML="o";
    button5.style.color = "white";
    player1 = true;      
  }
  winner();
});

button6.addEventListener("click", function clickBox() {
  if(player1 == true){
    button6.style.backgroundColor = "#010163";
    button6.innerHTML="X";
    button6.style.color = "white";
    player1= false;       
  } else {
    button6.style.backgroundColor="#CF0000";
    button6.innerHTML="o";  
    button6.style.color = "white"; 
    player1 = true;   
  }
  winner();
});

button7.addEventListener("click", function clickBox() {
  if(player1 == true){
    button7.style.backgroundColor = "#010163";
    button7.innerHTML="X";
    button7.style.color = "white";
    player1= false;       
  } else {
    button7.style.backgroundColor="#CF0000";
    button7.innerHTML="o"; 
    button7.style.color = "white";
    player1 = true;     
  }
  winner();
});

button8.addEventListener("click", function clickBox() {
  if(player1 == true){
    button8.style.backgroundColor = "#010163";
    button8.innerHTML="X";
    button8.style.color = "white";
    player1= false; 
  } else {
    button8.style.backgroundColor="#CF0000";
    button8.innerHTML="o"; 
    button8.style.color = "white";
    player1 = true;  
  }
winner();
});

        
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
    document.getElementById("displayResult").innerHTML="Player One Wins";
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
  document.getElementById("displayResult").innerHTML="Player Two Wins";

  }
  else {
    return null;
  }
 };

// function winner() {
//  if (button0.style.backgroundColor==="#010163") 
// {
//   alert("winner is player X");
// }
// else{
//   return null;
// }
//   };



reset.addEventListener("click",function clearGrid() {      

  reset.addEventListener("click", function clearBox0(){
    allButtons[0].style.backgroundColor = null ;
    allButtons[0].innerHTML = " " ;
  });
  reset.addEventListener("click",function clearBox1(){
    allButtons[1].style.backgroundColor = null ;
    allButtons[1].innerHTML = " " ;
  });
  reset.addEventListener("click", function clearBox2(){
    allButtons[2].style.backgroundColor = null ;
    allButtons[2].innerHTML = " " ;
  });
  reset.addEventListener("click", function clearBox3(){
    allButtons[3].style.backgroundColor = null ;
    allButtons[3].innerHTML = " " ;
  });
  reset.addEventListener("click", function clearBox4(){
    allButtons[4].style.backgroundColor = null ;
    allButtons[4].innerHTML = " " ;
  });
  reset.addEventListener("click", function clearBox5(){
    allButtons[5].style.backgroundColor = null ;
    allButtons[5].innerHTML = " " ;
  });
  reset.addEventListener("click", function clearBox6(){
    allButtons[6].style.backgroundColor = null ;
    allButtons[6].innerHTML = " " ;
  });
  reset.addEventListener("click", function clearBox7(){
    allButtons[7].style.backgroundColor = null ;
    allButtons[7].innerHTML = " " ;
  });
  reset.addEventListener("click", function clearBox8(){
    allButtons[8].style.backgroundColor = null ;
    allButtons[8].innerHTML = " " ;
  });
   document.getElementById("displayResult").innerHTML="Winner?";
});






