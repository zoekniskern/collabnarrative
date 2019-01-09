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
                                if($('#chat-mot').text().match('paris')){
                                  $('#collage').append($("<img style='position:absolute; top:0px; left:0px; opacity:0.3;' src='https://www.sortiraparis.com/images/55/82929/414066-le-marche-de-noel-des-tuileries-a-paris-allee.jpg'>"));
                                  //alert('paris');
                                }
                                else if($('#chat-mot').text().match('paris')){
                                  $('#collage').append($("<img style='position:absolute; top:0px; left:0px; opacity:0.3;' src='https://www.sortiraparis.com/images/55/82929/414066-le-marche-de-noel-des-tuileries-a-paris-allee.jpg'>"));
                                  //alert('paris');
                                }
                                else if($('#chat-mot').text().match('rome')){
                                  $('#collage').append($("<img style='position:absolute; top:0px; left:0px; opacity:0.3;' src='https://www.timeshighereducation.com/sites/default/files/styles/the_breaking_news_image_style/public/ancient-rome.jpg'>"));
                                  //alert('paris');
                                }
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
