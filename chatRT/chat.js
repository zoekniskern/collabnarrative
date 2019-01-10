/*
Created by: Kenrick Beckett

Name: Chat Engine
*/


var instanse = false;
var state;
var mes;
var file;
var wid = 2048;
var hei = 1536/2;
var widRed = (616);
var heiRed = (755);
var beach = 'images/beach.png';
var woods = 'images/woods.png';
var paris = 'images/paris.png';


function charLoad(ImagSrc, xloc){
  var img = new Image();

  // User Variables - customize these to change the image being scrolled, its
  // direction, and the speed.

  //img.src = 'images/red_left.png'
  img.src = ImagSrc;
  var CanvasXSize = wid;
  var CanvasYSize = hei;
  var speed = 30; // lower is faster
  var scale = 1;

  var dx = 0.75;
  var imgW;
  var imgH;
  var x = xloc;
  var clearX;
  var clearY;
  var ctx;

  img.onload = function() {
      imgW = widRed;
      imgH = heiRed;

      clearX = imgW;
      clearY = imgH;

      // get canvas context
      canvas = document.getElementById('canvas');

      ctx = canvas.getContext('2d');

      canvas.width = wid;
      canvas.height = hei;
      ctx.strokeStyle = "#FF0000";
      // set refresh rate
      requestAnimationFrame(draw);
  }

  function draw() {
    ctx.clearRect(0, 0, clearX, clearY); // clear the canvas

    var y = hei - img.height/2;
    ctx.drawImage(img, x, y, img.width/2, img.height/2);

    // amount to move
    requestAnimationFrame(draw);
  }
}//end of Char Load


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
        clearX = imgW;
        clearY = imgH;

        // get canvas context
        canvas = document.getElementById('canvasRed');

        ctx = canvas.getContext('2d');

        canvas.width = wid;
        canvas.height = hei;
        ctx.strokeStyle = "#FF0000";
        // set refresh rate
        //return setInterval(draw, speed);
        requestAnimationFrame(draw);
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
              ctx.drawImage(img, -img.width/2 * count + x, y, img.width/2, img.height/2);
          }
        //   count++
        // }
          // draw additional image2
          if (x - imgW > 0) {
              ctx.drawImage(img, -img.width/2 * 2 + x, y, img.width/2, img.height/2);
          }
          // draw additional image3
          if (x - imgW > 0) {
              ctx.drawImage(img, -img.width/2 * 3 + x, y, img.width/2, img.height/2);
          }
          // draw additional image4
          if (x - imgW > 0) {
              ctx.drawImage(img, -img.width/2 * 4 + x, y, img.width/2, img.height/2);
          }
          // draw additional image5
          if (x - imgW > 0) {
              ctx.drawImage(img, -img.width/2 * 5 + x, y, img.width/2, img.height/2);
          }
          // draw additional image6
          if (x - imgW > 0) {
              ctx.drawImage(img, -img.width/2 * 6 + x, y, img.width/2, img.height/2);
          }
      }

      // image is > Canvas Size
      else {
          // reset, start from beginning
          if (x > (CanvasXSize)) {
              x = CanvasXSize - img.width/2;
          }
          // draw aditional image
          if (x > (CanvasXSize-img.width/2)) {
              ctx.drawImage(img, x - img.width/2 + 1, y, img.width/2, img.height/2);
          }
      }
      // draw image
      ctx.drawImage(img, x, y, img.width/2, img.height/2);
      // amount to move
      x += dx;

      requestAnimationFrame(draw);
    }//end of draw
  }//end of img cyc

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

var intro;

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
                                  intro = document.getElementById("intro");
                                  intro.style.display = "none";
                                }
                                else if($('#chat-mot').text().match('beach')){
                                    ImgCycle(beach);
                                    intro = document.getElementById("intro");
                                    intro.style.display = "none";
                                  }
                                  else if($('#chat-mot').text().match('paris')){
                                      ImgCycle(paris);
                                      intro = document.getElementById("intro");
                                      intro.style.display = "none";
                                    }
                                // }
                                // else if($('#chat-mot').text().match('red'||'blue'||'purple')){
                                  else if($('#chat-mot').text().match('red')){
                                    // var ImageSourceRed = 'images/red_left.png'
                                    // var redX = 550;
                                    // charLoad(ImageSourceRed, redX);

                                    e1 = $('#slide');
                                      e1.addClass('animateLilHood');
                                      // e1.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
                                      // function (e) {
                                      //     e1.removeClass('animate');
                                      // });
                                      e1 = $('#slide');
                                        e1.addClass('disapear');
                                      

                                  }
                                  else if($('#chat-mot').text().match('blue')){
                                    // var ImageSourceBlue = 'images/left_blue.png'
                                    // var redX = 550;
                                    // charLoad(ImageSourceBlue, redX);
                                    e1 = $('#slideB');
                                      e1.addClass('animateLilHood');
                                  }
                                  else if($('#chat-mot').text().match('purple')){
                                    // var ImageSourcePurp = 'images/purple_left.png'
                                    // var redX = 550;
                                    // charLoad(ImageSourcePurp, redX);
                                    e1 = $('#slideP');
                                      e1.addClass('animateLilHood');
                                  }
                                // }

                                //else if($('#chat-mot').text().match('wolf'||'bear'||'unicorn')){
                                  else if($('#chat-mot').text().match('wolf')){
                                    e1 = $('#slideWolf');
                                      e1.addClass('animateCreature');

                                      e1 = $('#slideWolfHouse');
                                        e1.addClass('animatehouse');
                                  }
                                  else if($('#chat-mot').text().match('bear')){
                                    e1 = $('#slideBear');
                                      e1.addClass('animateCreature');

                                      e1 = $('#slideBearHouse');
                                        e1.addClass('animatehouse');
                                  }
                                  else if($('#chat-mot').text().match('unicorn')){
                                    e1 = $('#slideUni');
                                      e1.addClass('animateCreature');

                                      e1 = $('#slideUniHouse');
                                        e1.addClass('animatehouse');
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
