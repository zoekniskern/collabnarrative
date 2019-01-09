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
                <h1 class="author"> Author 1 </h1>
                <div id="question1">
                </div>
                <button id="submit1" class="sendie" onclick="nextQuestion()">Next Question</button>
        </div>
        <div id="left">
                <h1 class="author"> Author 2 </h1>
                <div id="question2">
                </div>
                <button id="submit2" class="sendie" onclick="nextQuestion()">Next Question</button>
        </div>
    </div>
    <div id="prompt">
        <h1 class="author"> Your Story </h1>
        <p>Once upon a time, there was a little girl who lived in a village near the <span class="home"></span>. She often wore a <span class="color"></span> riding cloak, so everyone called her Little <span class="color capital"></span> Riding Hood.</p>

        <p>One morning, her mother asked Little <span class="color capital"></span> Riding Hood to visit her grandmother. She packed a basket of cookies. On the way through the <span class="home"></span> to her grandmother’s house, a <span class="creature"></span> appeared. "What are you doing out here, little girl?" the <span class="creature"></span> asked in a friendly voice.</p>

        <p>"I'm on my way to see my Grandma." Little <span class="color capital"></span> Riding Hood replied. Then she realized how late she was and quickly excused herself. Meanwhile, the <span class="creature"></span> took a shortcut and arrived at Grandma's and knocked lightly at the door. </p>

        <p>Grandma, thinking that the knock was her granddaughter,let the <span class="creature"></span> inside. Poor Granny did not have time to say another word, before the <span class="creature"></span> gobbled her up! Then the <span class="creature"></span> poked through Granny's wardrobe to find a nightgown. He added a frilly sleeping cap, and dabbed some of Granny's perfume behind his ears.</p>

        <p>A few minutes later, <span class="color capital"></span> Riding Hood knocked on the door. The <span class="creature"></span> jumped into bed and pulled the covers over his nose. "Who is it?"</p>

        <p>"It's me, Little <span class="color capital"></span> Riding Hood."</p>

        <p>"Do come in, my dear," croaked the <span class="creature"></span>.</p>

        <br/>

        <button id="write" onclick="">Finish the story!</button>
    </div>
<!-- Chat wrap because it might error if deleted -->
</body>

</html>
