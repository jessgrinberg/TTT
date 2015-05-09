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

// var blue = document.getElementById("blueDot")

// button1.onClick= new clickBox("return false");


button0.addEventListener("click", function clickBox() {
  if(player1 == true){
    // button0.style.backgroundColor = "#010163";
    button0.innerHTML="X";
    player1 = false;
  } else {
    // button0.style.backgroundColor="#CF0000";
    button0.innerHTML="o"; 
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


button1.addEventListener("click", function clickBox() {
  if(player1 == true){
    button1.innerHTML="X"; 
    player1= false;       
  } else {
    button1.innerHTML="o";   
    player1 = true;   
  }  
  winner();
});

button2.addEventListener("click", function clickBox() {
  if(player1 == true){
    button2.innerHTML="X";
    player1= false; 
  } else {
    button2.innerHTML="o"; 
    player1 = true; 
  }
  winner();
});


button3.addEventListener("click", function clickBox() {
  if(player1 == true){
    button3.innerHTML="X";
    player1= false; 
  } else {
    button3.innerHTML="o"; 
    player1 = true; 
  }
  winner();
});

button4.addEventListener("click", function clickBox() {
  if(player1 == true){
    button4.innerHTML="X";
    player1= false; 
  } else {
    button4.innerHTML="o";  
    player1 = true;
  }
  winner();
});

button5.addEventListener("click", function clickBox() {
  if(player1 == true){
    button5.innerHTML="X";
    player1= false;       
  } else {
    button5.innerHTML="o";
    player1 = true;      
  }
  winner();
});

button6.addEventListener("click", function clickBox() {
  if(player1 == true){
    button6.innerHTML="X";
    player1= false;       
  } else {
    button6.innerHTML="o";   
    player1 = true;   
  }
  winner();
});

button7.addEventListener("click", function clickBox() {
  if(player1 == true){
    button7.innerHTML="X";
    player1= false;       
  } else {
    button7.innerHTML="o"; 
    player1 = true;     
  }
  winner();
});

button8.addEventListener("click", function clickBox() {
  if(player1 == true){
    button8.innerHTML="X";
    player1= false; 
  } else {
    button8.innerHTML="o"; 
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
         alert("winner is player X");
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
  alert("winner is player o");
  }
  else {
    return null;
  }
 };



reset.addEventListener("click",function clearGrid() {      

  reset.addEventListener("click", function clearBox0(){
    // allButtons[0].style.backgroundColor = null ;
    allButtons[0].innerHTML = " " ;
  });
  reset.addEventListener("click",function clearBox1(){
    allButtons[1].innerHTML = " " ;
  });
  reset.addEventListener("click", function clearBox2(){
    allButtons[2].innerHTML = " " ;
  });
  reset.addEventListener("click", function clearBox3(){
    allButtons[3].innerHTML = " " ;
  });
  reset.addEventListener("click", function clearBox4(){
    allButtons[4].innerHTML = " " ;
  });
  reset.addEventListener("click", function clearBox5(){
    allButtons[5].innerHTML = " " ;
  });
  reset.addEventListener("click", function clearBox6(){
    allButtons[6].innerHTML = " " ;
  });
  reset.addEventListener("click", function clearBox7(){
    allButtons[7].innerHTML = " " ;
  });
  reset.addEventListener("click", function clearBox8(){
    allButtons[8].innerHTML = " " ;
  });

});





