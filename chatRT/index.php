
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">

<head>

    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />

    <title>The Dispatcher</title>

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
      */

    	// display name on page
    	$("#name-area").html("You are: <span>" + name + "</span>");

    	// kick off chat
        var chat =  new Chat();
    	$(function() {

    		 chat.getState();

    		 // watch textarea for key presses
             $(".sendie").keydown(function(event) {

                 var key = event.which;

                 //all keys including return.
                 if (key >= 33) {

                     var maxLength = $(this).attr("maxlength");
                     var length = this.value.length;

                     // don't allow new content if length is maxed out
                     if (length >= maxLength) {
                         event.preventDefault();
                     }
                  }
    		 																																																});
    		 // watch textarea for release of key press
    		 $('.sendie').keyup(function(e) {

    			  if (e.keyCode == 13) {

                    var text = $(this).val();
    				var maxLength = $(this).attr("maxlength");
                    var length = text.length;

                    // send
                    if (length <= maxLength + 1) {

    			        chat.send(text, name);
    			        $(this).val("");

                    } else {

    					$(this).val(text.substring(0, maxLength));

    				}


    			  }
             });

    	});

      /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
      function openNav() {
        document.getElementById("mySidebar").style.width = "250px";
        document.getElementById("main").style.marginLeft = "250px";
      }

      /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
      function closeNav() {
        document.getElementById("mySidebar").style.width = "0";
        document.getElementById("main").style.marginLeft = "0";
      }

    </script>

</head>

<body onload="setInterval('chat.update()', 1000)">
    <div id="mySidebar" class="sidebar">
      <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>
      <a href="writer.php" target="_blank" style="color:orange;">The Writer</a>
      <a href="reader.php" target="_blank" style="color:orange;">The Reader</a>
      <a href="viewer.php" target="_blank" style="color:orange;">The Viewer</a>
    </div>

    <div id="main">
      <button class="openbtn" onclick="openNav()"><img src="https://image.flaticon.com/icons/png/128/25/25442.png"  style="width:20px;height:20px; alt="backend button""></button>
    </div>

    <div id="page-wrap">

        <h1 align="center">COLLABORATIVE NARRATIVE</h1>
        <div class="wrapper">
        <p align="center" >
          This is a collaborative narrative written by you and the other people
          visiting this exhibition. <br> You will be asked questions and your answers will
          tell a new and unique version of <br> the story of Little Red Riding Hood.
        </p>
        <button class="BeginButton" onclick="location.href='writer.php'" target="_blank" style="width:300px;height:20px; alt="start button""> Begin</button>
        </div>

    </div>

</body>

</html>
