function finishFunction() {
  alert("Thank you for completing the quiz.");
}

function rndm_colour(){
  var colours = ["red", "green", "blue", "purple", "light-blue", 
  "pink", "dark-khaki", "gold"];
  var choice = colours[Math.floor(Math.random() * colours.length)];
  return choice;
}

function change_heading() {
  color = rndm_colour();
  document.getElementById("quiztitle").style.color = color;

}

function show_hide(){
  if (document.getElementById("appear").style.display == 'none'){
    document.getElementById("appear").style.display = 'block';
  }else{
    document.getElementById("appear").style.display = 'none';
  }
}

function validateText() {
  var name = document.forms.Quiz.fullname.value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  } else {
    return true;
  }  
}


function validateNumber() {
  var x;
  // Get the value of the input field with id="numb"
  x = document.getElementById("numb").value;
  // If x value is equal to zero
  if (x == 0) {
    //if the 'x' variable is 0 show an alert in the browser:
    alert("You must enter a number above 0");
    return false;
  } else {
    return true;
  }
}


function validateRadio() {
  var x = document.forms.Quiz.elements.answerq1.value;
  if (x == "") {
    alert("One option must be selected");
    return false;
  }else{
    return true;
  }
}


function validateQuestions() {
      //if any of the validation functions return `false` indicate the data is not valid.
      if (validateText() && validateNumber() && validateRadio()){
        return true;
      }else{
        return false;
      }
    }


function validateQuestions() {
      //if any of the validation functions return `false` indicate the data is not valid.
      if (validateText() && validateNumber() && validateRadio()){
        return true;
      }else{
        return false;
      }
    }

function checkAnswers(){
  var score = 0;
  quiz = document.forms.Quiz.elements;
  answer1 = quiz.answerq1.value;
    if (answer1 == "Answer1"){
      score = score + 5;
  }
  
  answer2 = quiz.parisagreement.value;
    if(answer2 == "195"){
      score = score + 5;
    } else{
     score = score; 
    }
  showFeedback(score);
  
  //alert ('Well done, your score was... ' + score + '/10');
}

function showFeedback(score){
  document.forms.Quiz.style.display = "none";
  body = document.getElementsByTagName("body")[0];
  if (score == 0){
    body.innerHTML = '<h1>Do better next time, your score was... ' 
    + score + '/10' + '</h1>';
  } else if (score < 6){
    body.innerHTML = '<h1>You did well but there is room for improvement, your score was... ' + score + '/10' + '</h1>';
} else {
    body.innerHTML = '<h1>Excellent, you did great! Your score was... ' + score + '/10' + '</h1>';
}
   body.innerHTML += '<div><img src="https://images.vexels.com/media/users/3/160985/isolated/lists/0575e14e318af564acb6d62588f91164-planeta-terra-felicidade-risada-sorriso-gesto-plano.png"></div>';
}



function myMap() {
var mapProp= {
  center:new google.maps.LatLng(35.8617,104.1954),
  zoom:5,
};
var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);
}
