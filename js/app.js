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


button0.addEventListener("click", function clickBox() {
  if(player1 == true){
    button0.innerHTML="X";
    player1 = false;
  } else {
    button0.innerHTML="o";
    player1 = true;
  }
  winner();
});

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

// //  // add the reset function here inside this fctn

// function winner() {
//     if (xIsWinner) {
//       alert("player X wins");
//     }
//     else if (oIsWinner) {
//        alert("player O wins");
//     } 
//       else {
//         alert("no winner");
//       }
/////////////////////////////////////////////////////////////////////////////////      
 //////////////////////////////////////////////////////////////////////////////////   
///////////////////////////////////////////////////////////////////////////////////
// function xIsWinner() {
//   return xWinsRows || xWinsColumn || xWinsDiagonal;
// }

// function oIsWinner() {
//   return oWinsRows || oWinsColumn || oWinsDiagonal;
// }

// function winsRows() {
//   if (((button0==="X") && (button1==="X") && (button2==="X")) ||
//      ((button3==="X") && (button4==="X") && (button5==="X")) ||
//      ((button6==="X") && (button7==="X") && (button8==="X"))) {
//       return xWinsRows;
//     } else if (((button0==="X") && (button1==="X") && (button2==="X")) ||
//      ((button3==="X") && (button4==="X") && (button5==="X")) ||
//      ((button6==="X") && (button7==="X") && (button8==="X"))) {
//       return oWinsRows;
//     } else {
//       return null;
//     }
// }

// function winsColumn() {
//   if (((button0==="X") && (button3==="X") && (button6==="X")) || 
//      ((button1==="X") && (button4==="X") && (button7==="X")) ||
//      ((button2==="X") && (button5==="X") && (button8==="X"))) {
//      return xWinsDiagonal;
//      }  else if (((button0==="o") && (button3==="o") && (button6==="o")) || 
//      ((button1==="o") && (button4==="o") && (button7==="o")) ||
//      ((button2==="o") && (button5==="X") && (button8==="o"))) {
//      return oWinsDiagonal;
//      } else {
//       return null;
//     }
//   }
// }
// var xWinsDiagonal1;
// var xWinsDiagonal2;
// var oWinsDiagonal1;
// var oWinsDiagonal2;

// function winsDiagonal1(){
//   if ((button0==="X") && (button4==="X") && (button8==="X")){
//     return xWinsDiagonal1;
//   } else if ((button2==="X") && (button4==="X") && (button6==="X")) {
//     return xWinsDiagonal2;
//   } else if ((button0==="o") && (button4==="o") && (button8==="o")) {
//     return oWinsDiagonal1;
//   } else if ((button2==="X") && (button4==="X") && (button6==="X")) { 
//     return oWinsDiagonal2;
//   }
// }
// function winner() {
//     if (xWinsDiagonal1 || xWinsDiagonal2 ) {
//       alert("player X wins");
//     }
//     else if (oWinsDiagonal1 || oWinsDiagonal2 ) {
//        alert("player O wins");
//     } 
//       else {
//         alert("no winner");
//       }
// }



// function winsDiagonal() {
//   if (((button0==="X") && (button4==="X") && (button8==="X")) || 
//      ((button2==="X") && (button4==="X") && (button6==="X"))) {
//     return xWinsDiagonal; 
//   } else if (((button0==="o") && (button4==="o") && (button8==="o")) || 
//             ((button2==="o") && (button4==="o") && (button6==="o"))) {
//     return oWinsDiagonal;
//   } else {
//     return null;
//   }
// }
// }
/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////
 /////////////////////////////////////////////////////////////////////////
 /////////////////////////////////////////////////////////////////////////
//  


//
//

var winnerList= [[button0,button1,button2],
             [button3,button4,button5],
             [button6,button7,button8],
             [button0,button3,button6],
             [button1,button4,button7],
             [button2,button5,button8],
             [button0,button4,button8],
             [button2,button4,button6]];

var x = "X";
var o = "o";

function winner(){ 
  if(winnerList == x){
    console.log("winner is player X");
  } else  {
 console.log("winner is player X");
  }
};

 // function winner(){
 //  if((winnerList[0]=="X") || (winnerList[1]=="X") || (winnerList[2]=="X") || (winnerList[3]=="X") || (winnerList[4]=="X") || (winnerList[5]=="X") || (winnerList[6]=="X")  || (winnerList[7]=="X") || (winnerList[8]=="X")){
 //    console.log("winner is player X");
 //  } else if ((winnerList[0]=="o") || (winnerList[1]=="o") || (winnerList[2]=="o") || (winnerList[3]=="o") || (winnerList[4]=="o") || (winnerList[5]=="o") || (winnerList[6]=="o")  || (winnerList[7]=="o") || (winnerList[8]=="o")){
 //    console.log("winner is player X");
 //  }
 //  else {
 //    return null;
 //  }
 // };          

// function winner() {
//  if(
//   ((button0==="X") && (button1==="X") && (button2==="X")) ||
//   ((button3==="X") && (button4==="X") && (button5==="X")) || 
//   ((button6==="X") && (button7==="X") && (button8==="X")) ||
//   ((button0==="X") && (button3==="X") && (button6==="X")) || 
//   ((button1==="X") && (button4==="X") && (button7==="X")) || 
//   ((button2==="X") && (button5==="X") && (button8==="X")) || 
//   ((button0==="X") && (button4==="X") && (button8==="X")) || 
//   ((button2==="X") && (button4==="X") && (button6==="X")) 
//    ) 
//   {
//          console.log("winner is player X");
//   }
//   else
  //  (
  // ((button0==="o") && (button1==="o") && (button2==="o")) ||
  // ((button3==="o") && (button4==="o") && (button5==="o")) || 
  // ((button6==="o") && (button7==="o") && (button8==="o")) ||
  // ((button0==="o") && (button3==="o") && (button6==="o")) || 
  // ((button1==="o") && (button4==="o") && (button7==="o")) || 
  // ((button2==="o") && (button5==="o") && (button8==="o")) || 
  // ((button0==="o") && (button4==="o") && (button8==="o")) || 
  // ((button2==="o") && (button4==="o") && (button6==="o")) 
  //  ) 
// {
//   console.log("winner is player o");
//   }
//  };







