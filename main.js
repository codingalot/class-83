var mouseEvent = "empty";
var last_position_of_x, last_position_of_y;

    canvas = document.getElementById('myCanvas');
    ctx = canvas.getContext("2d");
    
    color = "black";
    width_of_line = 2;

   var width=screen.width;
   new_width=screen.width-70;
   new_height=screen.height-300;
   if (width<992){
       document.getElementById("myCanvas").width=new_width;
       document.getElementById("myCanvas").height=new_height;
       document.body.style.overflow="hidden";
   }
   canvas.addEventListener("touchstart",mytouchstart);
   function mytouchstart(e){
       console.log("mytouchstart");
       last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
       last_position_of_y=e.touches[0].clientY-canvas.offsetTop;
   }
   canvas.addEventListener("touchmove",mytouchmove);
   function mytouchmove(e){
       console.log("mytouchmove");
       current_position_of_touch_x= e.touches[0].clientX-canvas.offsetLeft;
       current_position_of_touch_y= e.touches[0].clientY-canvas.offesetTop;
       ctx.beginPath();
       ctx.strokeStyle=color;
       ctx.lineWidth=width_of_line;
       ctx.moveTo(last_position_of_x, last_position_of_y);
       ctx.lineTo(current_position_of_touch_x, current_position_of_touch_y);
       ctx.stroke();
       last_position_of_x=current_position_of_touch_x;
       last_position_of_y=current_position_of_touch_y;
   }


