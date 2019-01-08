<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <title>Collab Narrative</title>

    <link rel="stylesheet" href="style.css" type="text/css" />
    <link rel="stylesheet" href="question.css" type="text/css" />

    <script type="text/javascript" src="jquery-3.3.1.min.js"></script>
    <script type="text/javascript" src="chat.js"></script>
    <script type="text/javascript" src = "writer.js"></script>
    <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
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
    		 // watch textarea for release of key press
    		 $('.sendie').click(function(e) {
    			  //if (e.keyCode == 13) {
                    var text = $("input[name='values']:checked").val();
    				//var maxLength = $(this).attr("maxlength");
                    //var length = text.length;
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
<div id="chat-wrap"><div id="chat-area"></div></div>
    <div id="flexmain">
        <div id="right">
                <h1> 1 </h1>
                <div id="question1">
                </div>
                <button id="submit1" class="sendie" onclick="nextQuestion()">Next Question</button>
        </div>
        <div id="left">
                <h1> 2 </h1>
                <div id="question2">
                </div>
                <button id="submit2" class="sendie" onclick="nextQuestion()">Next Question</button>
        </div>
    </div>
</body>

</html>
