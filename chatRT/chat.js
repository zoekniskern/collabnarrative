/*
Created by: Kenrick Beckett

Name: Chat Engine
*/

//GLOBAL VARIABLES
var instanse = false;
var state;
var mes;
var file;
var wid = 1024;
var hei = 768;
var widRed = (603);
var heiRed = (794);
var beach = 'images/beach.png';
var woods = 'images/woods.png';
var paris = 'images/paris.png';

//Draws characters
function charLoad(ImagSrc, xloc, yloc){
  var img = new Image();

  // User Variables - customize these to change the image being scrolled, its
  // direction, and the speed.

  //img.src = 'images/red_left.png'
  img.src = ImagSrc;
  var speed = 30; // lower is faster
  //var scale = 1;
  var y = yloc;
  //var y = 250; // vertical offset

  // Main program
  var dx = 0.75;
  var imgW;
  var imgH;
  var x = xloc;
  //var x = 550;
  var clearX;
  var clearY;
  var ctx;

  img.onload = function() {
      //imgW = widRed;
      //imgH = heiRed;

      // if (imgW > CanvasXSize) {
      //     // image larger than canvas
      //     x = CanvasXSize - imgW;
      // }
      // if (imgW > CanvasXSize) {
      //     // image width larger than canvas
          clearX = imgW;
      // } else {
      //     clearX = CanvasXSize;
      // }
      // if (imgH > CanvasYSize) {
      //     // image height larger than canvas
          clearY = imgH;
      // } else {
      //     clearY = CanvasYSize;
      // }

      // get canvas context
      canvas = document.getElementById('canvasRed');
      ctx = canvas.getContext('2d');

      canvas.width = wid;
      canvas.height = hei;
      ctx.strokeStyle = "#FF0000";
      // set refresh rate
      return setInterval(draw, speed);
  }

  function draw() {
    ctx.clearRect(0, 0, clearX, clearY); // clear the canvas

    // if image is <= Canvas Size
    if (imgW <= wid) {
        // reset, start from beginning
        if (x > wid) {
            x = -imgW + x;
        }

        var count = 1;

        // while (true) {
        // draw additional image1
        if (x > 0) {
            //ctx.drawImage(img, -imgW * count + x, y, imgW, imgH);
        }
      //   count++
      // }
        // // draw additional image2
        // if (x - imgW > 0) {
        //     ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
        // }
        // // draw additional image2
        // if (x - imgW > 0) {
        //     ctx.drawImage(img, -imgW * 3 + x, y, imgW, imgH);
        // }
        // // draw additional image2
        // if (x - imgW > 0) {
        //     ctx.drawImage(img, -imgW * 4 + x, y, imgW, imgH);
        // }
    }

    // image is > Canvas Size
    else {
        // // reset, start from beginning
        // if (x > (CanvasXSize)) {
        //     x = CanvasXSize - imgW;
        // }
        // // draw aditional image
        // if (x > (CanvasXSize-imgW)) {
        //     ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
        // }
    }
    // draw image
    ctx.drawImage(img, x, y,imgW, imgH);
    // amount to move
    // x += dx;
  }
}//end of char load
function ImgCycle (ImgSrc){

    var img = new Image();

    // User Variables - customize these to change the image being scrolled, its
    // direction, and the speed.

    img.src = ImgSrc;
    var CanvasXSize = wid;
    var CanvasYSize = hei;
    var speed = 30; // lower is faster
    var scale = 1;
    var y = 0; // vertical offset

    // Main program

    var dx = 0.75;
    var imgW;
    var imgH;
    var x = 0;
    var clearX;
    var clearY;
    var ctx;

    img.onload = function() {
        imgW = wid;
        imgH = hei;

        // if (imgW > CanvasXSize) {
        //     // image larger than canvas
        //     x = CanvasXSize - imgW;
        // }
        // if (imgW > CanvasXSize) {
        //     // image width larger than canvas
            clearX = imgW;
        // } else {
        //     clearX = CanvasXSize;
        // }
        // if (imgH > CanvasYSize) {
        //     // image height larger than canvas
            clearY = imgH;
        // } else {
        //     clearY = CanvasYSize;
        // }

        // get canvas context
        canvas = document.getElementById('canvas');

        ctx = canvas.getContext('2d');

        canvas.width = wid;
        canvas.height = hei;
        ctx.strokeStyle = "#FF0000";
        // set refresh rate
        return setInterval(draw, speed);
    }

    function draw() {
      ctx.clearRect(0, 0, clearX, clearY); // clear the canvas

      // if image is <= Canvas Size
      if (imgW <= CanvasXSize) {
          // reset, start from beginning
          if (x > CanvasXSize) {
              x = -imgW + x;
          }

          var count = 1;

          // while (true) {


          // draw additional image1
          if (x > 0) {
              ctx.drawImage(img, -imgW * count + x, y, imgW, imgH);
          }
        //   count++
        // }
          // draw additional image2
          if (x - imgW > 0) {
              ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
          }
          // draw additional image2
          if (x - imgW > 0) {
              ctx.drawImage(img, -imgW * 3 + x, y, imgW, imgH);
          }
          // draw additional image2
          if (x - imgW > 0) {
              ctx.drawImage(img, -imgW * 4 + x, y, imgW, imgH);
          }
      }

      // image is > Canvas Size
      else {
          // reset, start from beginning
          if (x > (CanvasXSize)) {
              x = CanvasXSize - imgW;
          }
          // draw aditional image
          if (x > (CanvasXSize-imgW)) {
              ctx.drawImage(img, x - imgW + 1, y, imgW, imgH);
          }
      }
      // draw image
      ctx.drawImage(img, x, y,imgW, imgH);
      // amount to move
      x += dx;
    }
  }


/////////////////CHAT STUFF BELOW


function Chat () {
    this.update = updateChat;
    this.send = sendChat;
	this.getState = getStateOfChat;
}

//gets the state of the chat
function getStateOfChat(){
	if(!instanse){
		 instanse = true;
		 $.ajax({
			   type: "POST",
			   url: "process.php",
			   data: {
			   			'function': 'getState',
						'file': file
						},
			   dataType: "json",

			   success: function(data){
				   state = data.state;
				   instanse = false;
			   },
			});
	}
}

//Updates the chat
function updateChat(){
	 if(!instanse){
		 instanse = true;
	     $.ajax({
			   type: "POST",
			   url: "process.php",
			   data: {
			   			'function': 'update',
						'state': state,
						'file': file
						},
			   dataType: "json",
			   success: function(data){
				   if(data.text){
						for (var i = 0; i < data.text.length; i++) {
                            //$('#chat-area').append($("<p>"+ data.text[i] +"</p>"));
                            $('#chat-mot').html($("<p>"+ data.text[i] +"</p>"));

                                //$( "#chat-area:contains('paris')" ).css( "color", "red" );
                                //if($(this).is(':contains("paris")') == true) alert('paris');
                                // if($('#chat-mot').text().match('woods'||'beach'||'paris')){
                                if($('#chat-mot').text().match('woods')){
                                  ImgCycle(woods);
                                }
                                else if($('#chat-mot').text().match('beach')){
                                    ImgCycle(beach);
                                  }
                                  else if($('#chat-mot').text().match('paris')){
                                      ImgCycle(paris);
                                    }
                                // }
                                // else if($('#chat-mot').text().match('red'||'blue'||'purple')){
                                  else if($('#chat-mot').text().match('red')){
                                    var ImageSourceRed = 'images/red_left.png'
                                    var redX = 550;
                                    var redY = 250;
                                    charLoad(ImageSourceRed, redX, redY);
                                  }
                                  else if($('#chat-mot').text().match('blue')){
                                    var ImageSourceBlue = 'images/left_blue.png'
                                    var redX = 550;
                                    var redY = 250;
                                    charLoad(ImageSourceBlue, redX, redY);
                                  }
                                  else if($('#chat-mot').text().match('purple')){
                                    var ImageSourcePurp = 'images/purple_left.png'
                                    var redX = 550;
                                    var redY = 250;
                                    charLoad(ImageSourcePurp, redX, redY);
                                  }
                                // }

                                //else if($('#chat-mot').text().match('wolf'||'bear'||'unicorn')){
                                  else if($('#chat-mot').text().match('wolf')){
                                    var ImageSourceWolf = 'images/wolf.png'
                                    var redX = 360;
                                    var redY = 250;
                                    charLoad(ImageSourceWolf, redX, redY);
                                  }
                                  else if($('#chat-mot').text().match('bear')){
                                    var ImageSourceBear = 'images/bear.png'
                                    var redX = 320;
                                    var redY = 250;
                                    charLoad(ImageSourceBear, redX, redY);
                                  }
                                  else if($('#chat-mot').text().match('unicorn')){
                                    var ImageSourceUni = 'images/unicorn.png'
                                    var redX = 290;
                                    var redY = 250;
                                    charLoad(ImageSourceUni, redX, redY);
                                  }
                                //}
                                // else if($('#chat-mot').text().match('paris')){
                                //   $('#collage').append($("<img style='position:absolute; top:0px; left:0px; opacity:0.3;' src='https://www.sortiraparis.com/images/55/82929/414066-le-marche-de-noel-des-tuileries-a-paris-allee.jpg'>"));
                                //   //alert('paris');
                                // }
                                // else if($('#chat-mot').text().match('rome')){
                                //   $('#collage').append($("<img style='position:absolute; top:0px; left:0px; opacity:0.3;' src='https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/ancient-rome.jpg'>"));
                                //   //alert('paris');
                                // }
                                else {
                                  //alert('rien');
                                }
                        }
				   }
				   document.getElementById('chat-area').scrollTop = document.getElementById('chat-area').scrollHeight;
				   instanse = false;
				   state = data.state;
			   },
			});
	 }
	 else {
		 setTimeout(updateChat, 1500);
	 }
}

//send the message
function sendChat(message, nickname)
{
    updateChat();
     $.ajax({
		   type: "POST",
		   url: "process.php",
		   data: {
		   			'function': 'send',
					'message': message,
					'nickname': nickname,
					'file': file
				 },
		   dataType: "json",
		   success: function(data){
			   updateChat();
		   },
		});
}
