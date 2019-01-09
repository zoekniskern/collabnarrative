<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <title>Chat</title>

    <link rel="stylesheet" href="style.css" type="text/css" />

    <script type="text/javascript" src="jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="chat.js"></script>
    <script type="text/javascript">

        // ask user for name with popup prompt
        /*
      var name = prompt("Enter your chat name:", "Guest");

        // default name is 'Guest'
    	if (!name || name === ' ') {
    	   name = "Guest";
    	}

    	// strip tags
    	name = name.replace(/(<([^>]+)>)/ig,"");

    	// display name on page
    	$("#name-area").html("You are: <span>" + name + "</span>");
      */

    	// kick off chat
        var chat =  new Chat();
    	$(function() {

    		 chat.getState();

         // watch textarea for key presses
         // watch textarea for key presses
             $(".sendie").click(function(event) {
                  var key = $("input[name='values']:checked").val();

                 //var key = event.which;

                 //all keys including return.
                 // if (key >= 33) {
                 //
                 //     var maxLength = $(this).attr("maxlength");
                 //     var length = this.value.length;
                 //
                 //     // don't allow new content if length is maxed out
                 //     if (length >= maxLength) {
                 //         event.preventDefault();
                 //     }
                 //  }
                                                                                                       });
        //.sendietextarea for release of key press
        $('.sendie').click(function(e) {

           //if (e.keyCode == 13) {

                    var text = $("input[name='values']:checked").val();
           //var maxLength = $(this).attr("maxlength");
                    var length = text.length;

                    // send
                  //if (length <= maxLength + 1) {

                 chat.send(text, name);
                 $(this).val("");

                  //  } else {

           //	$(this).val(text.substring(0, maxLength));

         //	}


           //}
             });

    	});

    </script>


</head>

<body onload="setInterval('chat.update()', 1000)">
    <h2>The Viewer</h2>

    <canvas id="canvas" width=innerWidth height=innerHeight ></canvas>

        <div id="collage">

        </div>
    <p id="name-area"></p>

    <div id="chat-wrap">
      <div id="chat-area"> </div>
      <div id="chat-mot"> </div>
    </div>
</body>

</html>
