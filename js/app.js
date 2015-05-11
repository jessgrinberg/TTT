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

var counter = 0;

button0.addEventListener("click", function clickBox() {
  if (button0.innerHTML !=""){
       alert('this button has already been clicked');
      }
  else {
    counter++
    if(player1 == true){
       button0.style.backgroundColor = "#010163";
       button0.style.color = "white";
       button0.innerHTML="X";
       document.getElementById("displayResult").innerHTML="Player Two Turn";
       player1 = false;
    } else {
       button0.style.backgroundColor="#CF0000";
       button0.innerHTML="o"; 
       button0.style.color = "white";
       document.getElementById("displayResult").innerHTML="Player One Turn";
       player1 = true;
    }
      winner();
      counter ++
    }
});

button1.addEventListener("click", function clickBox() {
  if (button1.innerHTML !=""){
       alert('this button has already been clicked');
      }
  else {
    if(player1 == true){
      button1.style.backgroundColor = "#010163";
      button1.innerHTML="X"; 
      button1.style.color = "white";
      document.getElementById("displayResult").innerHTML="Player Two Turn";
      player1= false;       
    } else {
      button1.style.backgroundColor="#CF0000";
     button1.innerHTML="o"; 
     button1.style.color = "white"; 
     document.getElementById("displayResult").innerHTML="Player One Turn"; 
     player1 = true;   
    }  
      winner();
      counter ++
    }
});

button2.addEventListener("click", function clickBox() {
  if (button2.innerHTML !=""){
        alert('this button has already been clicked');
      }
    else { 
  if(player1 == true){
    button2.style.backgroundColor="#010163";
    button2.innerHTML="X";
    button2.style.color = "white";
    document.getElementById("displayResult").innerHTML="Player Two Turn";
    player1= false; 
  } else {
    button2.style.backgroundColor="#CF0000";
    button2.innerHTML="o";
    button2.style.color = "white"; 
    document.getElementById("displayResult").innerHTML="Player One Turn";
    player1 = true; 
  }
      winner();
      counter ++
    }

});


button3.addEventListener("click", function clickBox() {
   if (button3.innerHTML !=""){
        alert('this button has already been clicked');
      }
    else {
  if(player1 == true){
    button3.style.backgroundColor = "#010163";
    button3.innerHTML="X";
    button3.style.color = "white";
    document.getElementById("displayResult").innerHTML="Player Two Turn";
    player1= false; 
  } else {
    button3.style.backgroundColor="#CF0000";
    button3.innerHTML="o";
    button3.style.color = "white"; 
    document.getElementById("displayResult").innerHTML="Player One Turn";
    player1 = true; 
  }
        winner();
        counter++
    }
});

button4.addEventListener("click", function clickBox() {
   if (button4.innerHTML !=""){
        alert('this button has already been clicked');
      }
    else {
  if(player1 == true){
    button4.style.backgroundColor = "#010163";
    button4.innerHTML="X";
    button4.style.color = "white";
    document.getElementById("displayResult").innerHTML="Player Two Turn";
    player1= false; 
  } else {
    button4.style.backgroundColor="#CF0000";
    button4.innerHTML="o"; 
    button4.style.color = "white"; 
    document.getElementById("displayResult").innerHTML="Player One Turn";
    player1 = true;
  }
        winner();
        counter++
    }
});

button5.addEventListener("click", function clickBox() {
   if (button5.innerHTML !=""){
        alert('this button has already been clicked');
      }
    else {
  if(player1 == true){
    button5.style.backgroundColor = "#010163";
    button5.innerHTML="X";
    button5.style.color = "white";
    document.getElementById("displayResult").innerHTML="Player Two Turn";
    player1= false;       
  } else {
    button5.style.backgroundColor="#CF0000";
    button5.innerHTML="o";
    button5.style.color = "white";
    document.getElementById("displayResult").innerHTML="Player One Turn";
    player1 = true;      
  }
        winner();
        counter++
    }
});

button6.addEventListener("click", function clickBox() {
   if (button6.innerHTML !=""){
        alert('this button has already been clicked');
      }
    else {
  if(player1 == true){
    button6.style.backgroundColor = "#010163";
    button6.innerHTML="X";
    button6.style.color = "white";
    document.getElementById("displayResult").innerHTML="Player Two Turn";
    player1= false;       
  } else {
    button6.style.backgroundColor="#CF0000";
    button6.innerHTML="o";  
    button6.style.color = "white"; 
    document.getElementById("displayResult").innerHTML="Player One Turn";
    player1 = true;   
  }
        winner();
        counter++
    }
});

button7.addEventListener("click", function clickBox() {
   if (button7.innerHTML !=""){
        alert('this button has already been clicked');
      }
    else {
  if(player1 == true){
    button7.style.backgroundColor = "#010163";
    button7.innerHTML="X";
    button7.style.color = "white";
    document.getElementById("displayResult").innerHTML="Player Two Turn";
    player1= false;       
  } else {
    button7.style.backgroundColor="#CF0000";
    button7.innerHTML="o"; 
    button7.style.color = "white";
    document.getElementById("displayResult").innerHTML="Player One Turn";
    player1 = true;     
  }
        winner();
        counter++
    
    }
});

button8.addEventListener("click", function clickBox() {
   if (button8.innerHTML !=""){
        alert('this button has already been clicked');
      }
    else {
  if(player1 == true){
    button8.style.backgroundColor = "#010163";
    button8.innerHTML="X";
    button8.style.color = "white";
    document.getElementById("displayResult").innerHTML="Player Two turn";
    player1= false; 
  } else {
    button8.style.backgroundColor="#CF0000";
    button8.innerHTML="o"; 
    button8.style.color = "white";
    document.getElementById("displayResult").innerHTML="Player One turn";
    player1 = true;  
  }
        winner();
        counter++
    }
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
   if(counter === 9) {
  document.getElementById("displayResult").innerHTML="It's a Tie!";
   }
 }
 
};





//RESET FUNCTION
reset.addEventListener("click",function clearGrid() {      

  reset.addEventListener("click", function clearBox0(){
    allButtons[0].style.backgroundColor = null ;
    allButtons[0].innerHTML = " " ;
    allButtons[0].innerHTML ="";
    counter=0;
  });
  reset.addEventListener("click",function clearBox1(){
    allButtons[1].style.backgroundColor = null ;
    allButtons[1].innerHTML = " " ;
    allButtons[1].innerHTML ="";
    counter=0;
  });
  reset.addEventListener("click", function clearBox2(){
    allButtons[2].style.backgroundColor = null ;
    allButtons[2].innerHTML = " " ;
    allButtons[2].innerHTML ="";
    counter=0;
  });
  reset.addEventListener("click", function clearBox3(){
    allButtons[3].style.backgroundColor = null ;
    allButtons[3].innerHTML = " " ;
    allButtons[3].innerHTML ="";
    counter=0;
  });
  reset.addEventListener("click", function clearBox4(){
    allButtons[4].style.backgroundColor = null ;
    allButtons[4].innerHTML = " " ;
    allButtons[4].innerHTML ="";
    counter=0;
  });
  reset.addEventListener("click", function clearBox5(){
    allButtons[5].style.backgroundColor = null ;
    allButtons[5].innerHTML = " " ;
    allButtons[5].innerHTML ="";
    counter=0;
  });
  reset.addEventListener("click", function clearBox6(){
    allButtons[6].style.backgroundColor = null ;
    allButtons[6].innerHTML = " " ;
    allButtons[6].innerHTML ="";
    counter=0;
  });
  reset.addEventListener("click", function clearBox7(){
    allButtons[7].style.backgroundColor = null ;
    allButtons[7].innerHTML = " " ;
    allButtons[7].innerHTML ="";
    counter=0;
  });
  reset.addEventListener("click", function clearBox8(){
    allButtons[8].style.backgroundColor = null ;
    allButtons[8].innerHTML = " " ;
    allButtons[8].innerHTML ="";
    counter=0;
  });
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



