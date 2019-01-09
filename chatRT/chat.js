/*
Created by: Kenrick Beckett

Name: Chat Engine
*/

var instanse = false;
var state;
var mes;
var file;

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
                                  $('#collage').append($("<img style='position:absolute; top:0px; left:0px; opacity:0.3;' src='https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Paris/paris-vintage-car.jpg?imwidth=450'>"));
                                    var img = new Image();

                                    // User Variables - customize these to change the image being scrolled, its
                                    // direction, and the speed.

                                    img.src = 'images/woods.png';
                                    var CanvasXSize = window.innerWidth;
                                    var CanvasYSize = window.innerHeight;
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
                                        imgW = window.innerWidth/4;
                                        imgH = window.innerHeight/4;

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
                                        ctx = document.getElementById('canvas').getContext('2d');
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
                                else if($('#chat-mot').text().match('beach')){
                                  $('#collage').append($("<img style='position:absolute; top:0px; left:0px; opacity:0.3;' src='https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Paris/paris-vintage-car.jpg?imwidth=450'>"));
                                    var img = new Image();

                                    // User Variables - customize these to change the image being scrolled, its
                                    // direction, and the speed.

                                    img.src = 'images/beach.png';
                                    var CanvasXSize = window.innerWidth;
                                    var CanvasYSize = window.innerHeight;
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
                                        imgW = window.innerWidth/4;
                                        imgH = window.innerHeight/4;

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
                                        ctx = document.getElementById('canvas').getContext('2d');
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
                                else if($('#chat-mot').text().match('paris')){
                                    $('#collage').append($("<img style='position:absolute; top:0px; left:0px; opacity:0.3;' src='https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Paris/paris-vintage-car.jpg?imwidth=450'>"));
                                      var img = new Image();

                                      // User Variables - customize these to change the image being scrolled, its
                                      // direction, and the speed.

                                      img.src = 'images/paris.png';
                                      var CanvasXSize = window.innerWidth;
                                      var CanvasYSize = window.innerHeight;
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
                                          imgW = window.innerWidth/4;
                                          imgH = window.innerHeight/4;

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
                                          ctx = document.getElementById('canvas').getContext('2d');
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
                                // }
                                // else if($('#chat-mot').text().match('red'||'blue'||'purple')){
                                  else if($('#chat-mot').text().match('red')){
                                    $('#collage').append($("<img style='position:absolute; top:0px; left:0px; opacity:0.3;' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMfS9vldgFE5EQtJ66SRu_0OQBsBwWWT-y1tygI7vKSbeUmDbk'>"));
                                    //alert('paris');
                                  }
                                  else if($('#chat-mot').text().match('blue')){
                                    $('#collage').append($("<img style='position:absolute; top:0px; left:0px; opacity:0.3;' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmN8yJDZjsziYXk5WYGQAbO-FrOPiMmDsFOZ78vDa6nT_3JbUv'>"));
                                  }
                                  else if($('#chat-mot').text().match('purple')){
                                    $('#collage').append($("<img style='position:absolute; top:0px; left:0px; opacity:0.3;' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-iv6olCPaXj-R5R9TC83ABEK_tKf1ZVGXCPranPH2yEkPgv_W'>"));
                                  }
                                // }
                                // else if($('#chat-mot').text().match('red'||'blue'||'purple')){
                                  else if($('#chat-mot').text().match('red')){
                                    $('#collage').append($("<img style='position:absolute; top:0px; left:0px; opacity:0.3;' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMfS9vldgFE5EQtJ66SRu_0OQBsBwWWT-y1tygI7vKSbeUmDbk'>"));
                                    //alert('paris');
                                  }
                                  else if($('#chat-mot').text().match('blue')){
                                    $('#collage').append($("<img style='position:absolute; top:0px; left:0px; opacity:0.3;' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmN8yJDZjsziYXk5WYGQAbO-FrOPiMmDsFOZ78vDa6nT_3JbUv'>"));
                                  }
                                  else if($('#chat-mot').text().match('purple')){
                                    $('#collage').append($("<img style='position:absolute; top:0px; left:0px; opacity:0.3;' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-iv6olCPaXj-R5R9TC83ABEK_tKf1ZVGXCPranPH2yEkPgv_W'>"));
                                  }
                                //}
                                //else if($('#chat-mot').text().match('wolf'||'bear'||'unicorn')){
                                  else if($('#chat-mot').text().match('wolf')){
                                    $('#collage').append($("<img style='position:absolute; top:0px; left:0px; opacity:0.3;' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5IQqbFuqqNUQgEj_p2kADQ-vlgq1qzSuDNTNj67D1-3_4L1cY'>"));
                                    //alert('paris');
                                  }
                                  else if($('#chat-mot').text().match('bear')){
                                    $('#collage').append($("<img style='position:absolute; top:0px; left:0px; opacity:0.3;' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShuttBW7VRVeWpi8eD6ef00yIx4YeiKFk8uVBb3d7-8iswey9u'>"));
                                  }
                                  else if($('#chat-mot').text().match('unicorn')){
                                    $('#collage').append($("<img style='position:absolute; top:0px; left:0px; opacity:0.3;' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpVGZ-9yp6yZVdqyEgUquQJSjsnupzAuHvypcVqgli5Urf2md2'>"));
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
