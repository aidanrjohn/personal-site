var gameQueue;
var playerPress;
var playerTurn = false;
var pressNum;
var count;
var strict = false;




$("#start").mousedown(function(){
  
  $("#start").css("box-shadow", "none");
  
});

$("#start").mouseup(function(){
  
  $("#start").css("box-shadow", "1px 1px 1px 1px #999999");
  
});

$("#strict").mousedown(function(){
  
  $("#strict").css("box-shadow", "none");
  
});

$("#strict").mouseup(function(){
  
  $("#strict").css("box-shadow", "1px 1px 1px 1px #999999");
  
});

$("#green").mousedown(function(){
  
  greenDown();
});

$("#green").mouseup(function(){
  
  greenUp();
});

$("#red").mousedown(function(){
  
 redDown();
});

$("#red").mouseup(function(){
  
  redUp();
});

$("#yellow").mousedown(function(){
  
 yellowDown();
});

$("#yellow").mouseup(function(){
  
  yellowUp();
});

$("#blue").mousedown(function(){
  
 blueDown();
});

$("#blue").mouseup(function(){
  
  blueUp();
});

function greenUp() {
  
  $("#green").css("background", "#29a329");
}

function greenDown() {
  
  $("#green").css("background", "#33cc33");
  $.playSound("https://s3.amazonaws.com/freecodecamp/simonSound1");
}

function redUp() {
  
  $("#red").css("background", "#b30000");
  
}

function redDown() {
  
  $("#red").css("background", "#ff0000");
  $.playSound("https://s3.amazonaws.com/freecodecamp/simonSound2");
}

function yellowUp() {
  
  $("#yellow").css("background", "#e6e600");
}

function yellowDown() {
  
  $("#yellow").css("background", "#ffff1a");
    $.playSound("https://s3.amazonaws.com/freecodecamp/simonSound3");
}

function blueUp() {
  
   $("#blue").css("background", "#0000b3");
  
}

function blueDown() {
  
   $("#blue").css("background", "#0000ff");
  $.playSound("https://s3.amazonaws.com/freecodecamp/simonSound4");
 
}
function nextEvent() {
  
  if(count == 20) {
    
    win();
    
  }
  
  else {
  playerTurn = false;
  count++;
  updateDisplay(count);
  var color = Math.ceil(Math.random() * 4);
  gameQueue.push(color);
  console.log("Color: " + color);
  playQueue();
  }
  
}

function playQueue() {
  
  queueLoop(0);
  console.log("done");
  player();
  
}

function queueLoop (i) { 
   setTimeout(function () {    
      
     switch(gameQueue[i]){
        
      case 1:
        greenDown();
        setTimeout(function() {
        greenUp();
        }, 250);
        break;
      case 2:
        redDown();
        setTimeout(function() {
        redUp();
        }, 250);
        break;
      case 3:
        yellowDown();
        setTimeout(function() {
        yellowUp();
        }, 250);
        break;
      case 4:
        blueDown();
        setTimeout(function() {
        blueUp();
        }, 250);
        break;
    }
      i++;                     
      if (i < gameQueue.length) {            
         queueLoop(i);
      }                       
   }, 500)
}

function player() {
  console.log("Player turn");
  pressNum = 0;
  playerTurn = true;
}

function checkPlayerPress(i, press) {
  
    console.log("Player: " + press + "Game: " + gameQueue[i]);
    if(gameQueue[i] != press)
      messUp();
    else {
      console.log(i);
      if(i == gameQueue.length - 1)
        nextEvent();
      else
        pressNum++;
    }
    
  }
  
  

function greenPressed() {
  
   
  if(playerTurn)
    checkPlayerPress(pressNum, 1)
}

function redPressed() {
  
  if(playerTurn)
    checkPlayerPress(pressNum, 2)
}

function yellowPressed() {
  
  if(playerTurn)
    checkPlayerPress(pressNum, 3)
}

function bluePressed() {
  
  if(playerTurn)
    checkPlayerPress(pressNum, 4)
  
}

function strictPressed() {
  
  if(!strict) {
    
    strict = true;
    $("#strictLight").css("background", "#ff0000");
  }
  
  else {
    
    strict = false;
    $("#strictLight").css("background", "#990000");
  }
}

function startPressed() {
  
  clearScreen();
  count = 0;
  gameQueue = [];
  pressNum = 0;
  nextEvent();
  
}

function clearScreen() {
  
  $("#display").empty();
  
}

function updateDisplay(display) {
  
  $("#display").empty();
  $("#display").html(display);
}

function messUp(){
  
  if(strict) {
    
    startPressed();
    
  }
  
  else {
    
    playerTurn = false;
    updateDisplay("!");
    setTimeout(function() {
      
      updateDisplay(count);
      
    }, 500);
    
     
    playQueue();
  }
}

function win() {
  
  updateDisplay("Win!");
  setTimeout(function() {
    
    startPressed();
    
  }, 1000);
  
  
}