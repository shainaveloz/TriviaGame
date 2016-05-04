var quiz = [
{
	"question" : "What is printed on the license plate of the time-traveling DeLorean?",
	"choices" : [
		"SCIENCE" , "OUTATIME", "TIME4U", "TIMETVL"],
	"correct" : "OUTATIME"
},
{
	"question" : "Marty meets Doc at which shopping mall in the first Back to the Future film?",
	"choices" : [
		"LONE PINE", "AVENTURA", "WILD OAK", "TWIN PINES"],
	"correct" : "TWIN PINES"
},
{
	"question" : "Who is playing in the World Series in 2015?",
	"choices" : [
		"CHICAGO VS MIAMI", "NEW YORK VS LOS ANGELES", "SEATTLE VS ATLANTA", "SAN FRANSICO VS TEXAS"],
	"correct" : "CHICAGO VS MIAMI"
},
{
	"question" : "What date do Marty, Doc, and Jennifer travel to in Back to the Future II?",
	"choices" : [
		"NOV. 8, 2015", "OCT. 21, 2015", "SEPT. 10, 2015", "AUG. 3, 2015"],
	"correct" : "OCT. 21, 2015"
},
{
	"question" : "What kind of drink does Marty ask for when he arrives in the old West?",
	"choices" : [
		"PEPSI", "COKE", "ICE WATER", "MILK"],
	"correct" : "ICE WATER"
},
{
	"question" : "After Marty arrives in 1855, the next train will be leaving town on Monday at what time?",
	"choices" : [
		"9:00 A.M.", "11:00 A.M.", "8:00 A.M.", "6:00 A.M."],
	"correct" : "8:00"
},
{
	"question" : "What is Buford Tannens nickname?",
	"choices" : [
		"CRAZY EYE", "MAD DOG", "WILD BULL", "LONE WOLF"],
	"correct" : "MAD DOG"
},
{
	"question" : "Marty is to meet up with Griff Tannen in which cafe in 2015?",
	"choices" : [
		"CAFE FUTURE", "SPACE DINER", "CAFE 80'S", "CAFE HOVERBOARD"],
	"correct" : "CAFE 80'S"
},
{
	"question" : "What does Biff run into after he chases Marty around the Hill Valley square?",
	"choices" : [
		"DIRT", "TAR", "GARBAGE", "MANURE"],
	"correct" : "MANURE"
},
{
	"question" : "What does Doc Brown call his dog in 1955?",
	"choices" : [
		"EINSTEIN", "GALILEO", "COPERNICUS", "TESLA"],
	"correct" : "COPERNICUS"
}];

var currentChoice;
var correctA = 0;
var incorrect;
var unanswered = 0;
var submit = true;



$(document).ready(function(event){

 	var answers = $('#answers');

	 	for (var i = 0; i < quiz.length; i++) {
	      answers.append('<h2>' + quiz[i].question + '</h2>');
	  	for (var j = 0; j < quiz[i].choices.length; j++) {
	        answers.append('<button value="' +	 quiz[i].choices[j] + '" data-choice="' + quiz[i].choices[j] + '" data-choice="' + quiz[i].correct[k] + '">' + quiz[i].choices[j]);
	  	}for (var k = 0; k < quiz[i].correct.length; k++){}
	 
	    }});


  
    $('button').on('click', function(e){
    	var clickedButton = $(this).data('choice');
    		for (var i = 0; i < quiz.length; i++){
    	 	for (var k = 0; k < quiz[i].correct.length; k++){
	      	if (clickedButton == quiz[i].correct[k]){
    		return correctA ++;
    		alert("You chose correctly!");
    }}}});


	$('#start').on('click', function(){
			startTimer();
			$('refresh').empty;
			$('refresh').append('#answers');
		});
	$('#submit').append('<button' + submit + '>').hide;
	
	function refresh (event){
		correctA = 0;
		incorrect = 0;
		unanswered = 0;
		$('#start').on('click', function(){
			
		});
		$('answers').empty();
		$('answers').append(nextQuestion);

	}
    	
	function startTimer(duration,display){
		var time = 0;
		$('#time-left').html('00:00');
		function start(){
			counter = setInterval(startTimer.count, 1000 * 30);
  	}
	  	function stop(){
	    	clearInterval(counter);
	  }
	  	function count(){
		  time++;
		  var converted = timeConverter(time);
		  $('#display').html(converted);
	}

	function timeConverter(t){
	  var minutes = Math.floor(t/60);
	  var seconds = t - (minutes * 60);
	  if (seconds < 10){
	    seconds = "0" + seconds;
	  }
	  if (minutes === 0){
	    minutes = "00";
	  } else if (minutes < 10){
	    minutes = "0" + minutes;
	  }
	  return minutes + ":" + seconds;
	}}

	function nextQuestion(){
    	$('#startTimer').replaceWith('#answers');
	};  


 //    