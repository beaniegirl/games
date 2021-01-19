var canvas;
  var canvasContext;
  var ballX= 400;
  var ballY=100;
  var ballSpeedX=10;
  var ballSpeedY=10;
  var paddle1X=750;
  var score=0; 
  var screen=true;
  var speed =50;

  function mousepos(evt){
    
    var rect= canvas.getBoundingClientRect();
    var root=document.documentElement;
  // if (canvas.width<700){
    var mouseX= evt.clientX - rect.left - root.scrollLeft;
    var mouseY= evt.clientY - rect.top - root.scrollTop;
    return{
      x:mouseX,
      y:mouseY
    };
  }
  window.onload=function(){
    canvas=document.getElementById('gameCanvas');
    canvasContext=canvas.getContext('2d');
    canvasContext.font="40px";
    drawrect('rgb(0,0,0.6,0.5)',100,0,canvas.width,canvas.height);
    document.getElementById("button1").onclick=function(){screenON()};

    canvas.addEventListener('mousemove',function(evt){
      var mousePos= mousepos(evt); 
      if (mousePos.x>440 && mousePos.x<1060){

      paddle1X= mousePos.x-35;
      
      }
      });
      
      setInterval(function(){move();drawEverything()},speed);

    
  }
 
  function screenON(){
    screen=false;
    score=0;
    document.getElementById("button1").innerHTML="Stop";

    document.getElementById("button1").onclick=function(){screenOFF()};
  }
  function screenOFF(){
    screen=true;
    
    canvasContext.fillStyle="white";
    
    document.getElementById("button1").innerHTML = "Play";
    
    document.getElementById("button1").onclick=function(){screenON()};
  }
  function drawrect(color,x,y,width,height){
    canvasContext.fillStyle=color;
    canvasContext.fillRect(x,y,width,height);
  }
  function drawcircle(color,xc,yc,r,startang,endang,dir){
    canvasContext.fillStyle=color;
    canvasContext.beginPath();
    canvasContext.arc(xc,yc,r,startang,endang,dir);
    canvasContext.fill();

  }
  function drawEverything(){


    drawrect('black',400,100,700,400);
    if (screen){

      return;


    }
    drawcircle('blue',ballX,ballY,10,0,Math.PI*2,true);

    drawcircle('white',paddle1X+35,465,35,0,Math.PI,false);
    
    drawrect('white',paddle1X,100,70,10);
    canvasContext.font="30px Georgia";
    canvasContext.fillText(score,1070,125);
    
  }
  function ballreset(){
    
    ballX=410;
    ballY=110;
    ballSpeedY=-ballSpeedY;
    ballY+=ballSpeedY;
    
  }

  function move(){
    if (screen){
      
      return;
    }

    ballX+=ballSpeedX;
    ballY+=ballSpeedY;
    if (ballX>=1100){
      ballSpeedX=-ballSpeedX;
      ballX+=ballSpeedX;
    }
    if(ballX<=400){
      ballSpeedX=-ballSpeedX;
      ballX+=ballSpeedX;
    } 
    if (ballY>=500){
      if ((ballX>paddle1X) &&(ballX<(paddle1X+70)))
      {
        
        score++;
        ballSpeedY=-ballSpeedY;
        ballY+=ballSpeedY;

      }
      else{
        score=0;
        ballreset();
        
    }
  }
    if (ballY<=100){
      
      if ((ballX>paddle1X) &&(ballX<(paddle1X+70))){
        ballSpeedY=-ballSpeedY;
        ballY+=ballSpeedY;
        while (ballX>440 && ballX>1160){
          var deltax =ballX-(paddle1X+35);
          ballSpeedX= deltax*0.35;
        }
      }
      else{
        score=0;
        ballreset();

      }

    }
  }

  function buttIsOn(){
    var list=["I am the mighty RED","Do not touch me!","Can you read?","I said don't touch me!","No habla Ingles?","Are you a dimwit?","STOP IT AT ONCE","...","I've had enough","Going to blow your place up!","In 3!","2!","1!","YOU'RE DEAD!!!","STOOOOOP","Do you not know consent?","QUIT PLAYING","Don't you know the effects of long term abuse?","I can't take it anymore","Gonna self destruct in 3","2","1","Well..that didn't work","I'm gonna come get you","","","Still here?","omg","I give up","Going into hibernation","Curse you!","GOOD BYE!"]  
    console.log(i);
    document.getElementById("buttON").innerHTML=list[i];
    if (i>=list.length){
        document.getElementById("buttON").innerHTML="";
    }
    // else if (i=27){
    //     document.getElementById("buttON").scrollLeft()
        
    // }
    ++i;
    
    
  } 