//JS file

// LOAD JSON
// //https://codepen.io/KryptoniteDove/post/load-json-file-locally-using-pure-javascript
function loadJSON(callback) {   

    var xobj = new XMLHttpRequest();
        xobj.overrideMimeType("application/json");
    xobj.open('GET', 'questions.json', true); // Replace 'my_data' with the path to your file
    xobj.onreadystatechange = function () {
          if (xobj.readyState == 4 && xobj.status == "200") {
            // Required use of an anonymous callback as .open will NOT return a value but simply returns undefined in asynchronous mode
            callback(xobj.responseText);
          }
    };
    xobj.send(null);  
 }

//GLOBAL VARIABLES
var currentQuestion = 0;

//PRINT RADIO BUTTONS BASED ON QUESTION #
function makeButtons(jsonObj, number) {

    //https://forums.tumult.com/t/how-create-radio-button-with-js/8184/4
    var json = jsonObj;
    var htmlDestination;
    var div1 = document.getElementById("question1");
    var div2 = document.getElementById("question2");

    var currentQuestion = json[number];
    var options = currentQuestion.options;

    var title = document.createElement("h3");
    title.innerHTML = currentQuestion.question;

    //--create label
    var label = document.createElement("label");
    //--create form
    var form = document.createElement("form");
    //--set form name
    form.setAttribute("name", currentQuestion.label);
    form.setAttribute("class", "form");

    //-- create input for each option
    for(var y=0; y<options.length; y++) {
        input = document.createElement("input");

        input.setAttribute("type", "radio");

        input.setAttribute('name', "values");
        input.setAttribute('value', options[y]);

        label.appendChild(input);
        label.innerHTML += "<span>" + options[y] + "</span><br>";
        
        form.appendChild(label);
    }

    if(number%2 == 0){
        //if question is even, give to player 1
        htmlDestination = document.getElementById("question1");
        div1.innerHTML = "";
        div2.innerHTML = "Please Wait";
    } else {
        //if question is odd, give to player 2
        htmlDestination = document.getElementById("question2");
        div1.innerHTML = "Please Wait";
        div2.innerHTML = "";
    }
    htmlDestination.innerHTML = "";
    htmlDestination.appendChild(title);
    htmlDestination.appendChild(form);
}

function nextQuestion(){
    currentQuestion+=1;
    console.log(currentQuestion);
    init();
}

//INIT FUNCTION
function init() {
    loadJSON(function(response) {
     // Parse JSON string into object
       var actual_JSON = JSON.parse(response);

       //console.log(actual_JSON[0]);

       makeButtons(actual_JSON, currentQuestion);
       
    })

}

//RUN INIT FUNCTION
window.onload = init();
 