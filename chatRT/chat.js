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
                                    $('#collage').append($("<img style='position:absolute; top:0px; left:0px; opacity:0.3;' src='https://owlt.org/media/djcatalog2/images/item/0/kurtz-woods-natural-area_f.JPG'>"));
                                    //alert('paris');


                                  }
                                  else if($('#chat-mot').text().match('beach')){
                                    $('#collage').append($("<img style='position:absolute; top:0px; left:0px; opacity:0.3;' src='http://static.asiawebdirect.com/m/phuket/portals/kosamui-com/homepage/chaweng-beach/pagePropertiesImage/chaweng.jpg.jpg'>"));
                                  }
                                  else if($('#chat-mot').text().match('paris')){
                                    $('#collage').append($("<img style='position:absolute; top:0px; left:0px; opacity:0.3;' src='https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/France/Paris/paris-vintage-car.jpg?imwidth=450'>"));
                                    var img = new Image();

                                      // User Variables - customize these to change the image being scrolled, its
                                      // direction, and the speed.

                                      img.src = 'data:image/png;base64,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';
                                      var CanvasXSize = window.innerWidth;
                                      var CanvasYSize = window.innerHeight;
                                      var speed = 30; // lower is faster
                                      var scale = 1.05;
                                      var y = -4.5; // vertical offset

                                      // Main program

                                      var dx = 0.75;
                                      var imgW;
                                      var imgH;
                                      var x = 0;
                                      var clearX;
                                      var clearY;
                                      var ctx;

                                      img.onload = function() {
                                          imgW = img.width * scale;
                                          imgH = img.height * scale;

                                          if (imgW > CanvasXSize) {
                                              // image larger than canvas
                                              x = CanvasXSize - imgW;
                                          }
                                          if (imgW > CanvasXSize) {
                                              // image width larger than canvas
                                              clearX = imgW;
                                          } else {
                                              clearX = CanvasXSize;
                                          }
                                          if (imgH > CanvasYSize) {
                                              // image height larger than canvas
                                              clearY = imgH;
                                          } else {
                                              clearY = CanvasYSize;
                                          }

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
                                              // draw additional image1
                                              if (x > 0) {
                                                  ctx.drawImage(img, -imgW + x, y, imgW, imgH);
                                              }
                                              // draw additional image2
                                              if (x - imgW > 0) {
                                                  ctx.drawImage(img, -imgW * 2 + x, y, imgW, imgH);
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
