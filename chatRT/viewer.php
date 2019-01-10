<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <title>Chat</title>

    <link rel="stylesheet" href="style.css" type="text/css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="chat.js"></script>
    <script type="text/javascript">


    	// kick off chat
        var chat =  new Chat();
    	$(function() {

    		 chat.getState();

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

    <canvas id="canvasRed">

    </canvas>
    <canvas id="canvas"></canvas>

    <div id="intro"></div>

    <div style = "display:none" id="chat-wrap">
      <div id="chat-area"> </div>
      <div id="chat-mot"> </div>
    </div>
    <img id="slide" src="images/red_left.png" />
    <img id="slideB" src="images/left_blue.png" />
    <img id="slideP" src="images/purple_left.png" />
    <img id="slideBear" src="images/bear.png" />
    <img id="slideUni" src="images/unicorn.png" />
    <img id="slideWolf" src="images/wolf.png" />
    <img id="slideBearHouse" src="images/bear_bed.png" />
    <img id="slideUniHouse" src="images/unicorn_bed.png" />
    <img id="slideWolfHouse" src="images/wolf_bed.png" />
</body>

</html>
