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
//Counters
var currentQuestion = 0;
var totalquestions;
var whichVar;
var promptDiv; // = document.getElementById("prompt");

//Story Variables
var homeList;
var colorList;
var creatureList;

var default_home = 'woods';
var default_color = "red";
var default_creature = 'wolf';
var home;
var color;
var creature;

//LIST OF ALL MENTIONS OF VARIABLES
homeList = document.getElementsByClassName("home");
colorList = document.getElementsByClassName("color");
colorCapList = document.getElementsByClassName("capital");
creatureList = document.getElementsByClassName("creature");

//PRINT RADIO BUTTONS BASED ON QUESTION #
function makeButtons(jsonObj, number) {

    //https://forums.tumult.com/t/how-create-radio-button-with-js/8184/4
    var json = jsonObj;
    var htmlDestination;
    var div1 = document.getElementById("question1");
    var div2 = document.getElementById("question2");
    var button1 = document.getElementById("submit1");
    var button2 = document.getElementById("submit2");

    totalquestions = json.length;
    var currentQuestion = json[number];
    var options = currentQuestion.options;

    var title = document.createElement("h3");
    title.innerHTML = currentQuestion.question;

    //--create label
    //var label = document.createElement("label");
    //--create form
    var form = document.createElement("form");
    //--set form name
    form.setAttribute("name", currentQuestion.label);
    form.setAttribute("class", "form");

    //-- create input for each option
    for(var y=0; y<options.length; y++) {
        var label = document.createElement("label");
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
        button1.style.display = "block";
        button2.style.display = "none";
    } else {
        //if question is odd, give to player 2
        htmlDestination = document.getElementById("question2");
        div1.innerHTML = "Please Wait";
        div2.innerHTML = "";
        button1.style.display = "none";
        button2.style.display = "block";
    }
    htmlDestination.innerHTML = "";
    htmlDestination.appendChild(title);
    htmlDestination.appendChild(form);
}

//ASSIGN RADIO VALUE TO CORRECT VARIABLE
function setQuestVar(){
    switch(currentQuestion){
        case 0:
            home = saveAnswer();
            break;
        case 1:
            color = saveAnswer();
            break;
        case 2:
            creature = saveAnswer();
            break;
        default:
            break;
    }

    console.log("home = " + home);
    console.log("color = " + color);
    console.log("creature = " + creature);
}

//ADVANCE QUESTION NUMBER
function nextQuestion(){
    if(currentQuestion<totalquestions-1){
        setQuestVar();
        currentQuestion+=1;
        console.log(currentQuestion);
        init();
    } else {
        setQuestVar();
        console.log('next section');
        updateAttr()
        promptDiv.style.display = "block";
    }
}

//GET RADIO BUTTON VALUE
function saveAnswer(){
    var value = document.getElementsByName('values');
    for(var i = 0; i < value.length; i++){
        if(value[i].checked){
            whichVar = value[i].value;
        }
    }
    return whichVar;
}

//REPLACE SPAN WITH VARIABLE VALUE IN PROMPT
function updateAttr(){
    //Home
    for(var i=0; i < homeList.length; i++){
        homeList[i].innerHTML = home;
    }

    //Colors
    for(var i=0; i < colorList.length; i++){
        colorList[i].innerHTML = color;
    }

    for(var i=0; i < colorCapList.length; i++){
        colorCapList[i].innerHTML = capitalizeFirstLetter(color);
        console.log("capitalize ran");
    }

    //Creature
    for(var i=0; i < creatureList.length; i++){
        creatureList[i].innerHTML = creature;
    }
}

//CAPITALIZE FIRST LETTER OF WORD
//https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


//INIT FUNCTION
function init() {
    home = default_home;
    color = default_color;
    creature = default_creature;
    promptDiv = document.getElementById("prompt");
    loadJSON(function(response) {
     // Parse JSON string into object
       var actual_JSON = JSON.parse(response);

       //console.log(actual_JSON[0]);

       makeButtons(actual_JSON, currentQuestion);
       
    })

}

//RUN INIT FUNCTION
window.onload = init();
 