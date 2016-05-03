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

var currentquestion = 0;
var currentChoice;
var correct = $('#quiz.correct');
var correctA = 0;
var incorrect = 0;
var unanswered = 0;
var submit = true;


$(document).ready(function(event){
	$('#start').on('click', function(){
			
		});
	$('#submit').append('<button' + submit + '>').hide();
	
	var refresh = (function(event){
		correctA = 0;
		incorrect = 0;
		unanswered = 0;
		$('#start').on('click', function(){
			
		});

	});

	 	var answers = $('#answers');

     	for (var i = 0; i < quiz.length; i++) {
	      answers.append('<h2>' + quiz[i].question + '</h2>');
	      for (var j = 0; j < quiz[i].choices.length; j++) {
	        answers.append('<button value="' + quiz[i].choices[j] + '" data-choice="' + quiz[i].choices[j] + '">' + quiz[i].choices[j]);
	      }
	    }

    // function processA(){
    // 	$('.choices').on('click', function(currentTarget){
    // 		correct = Number(correct) + Number($(this).val());
    // 		incorrect = Number(incorrect) + Number($(this).val());
    // 		if (currentChoice == correct) {
    // 			correctA ++;
    // 			console.log('correctA');
    // 		}
    // 	})
    // }
    // $('button').on('click', function(currentTarget){
    // 		correct = Number(correct) + Number($(this).val());
    // 		incorrect = Number(incorrect) + Number($(this).val());
    // 		if (currentChoice == correct) {
    // 			correctA ++;
    // 			console.log('correctA');
    // 		}
    // 	})


    $('button').on('click', function(e){
    	var clickedButton = $(this).data('choice');
    	for (var k = 0; k < quiz[i].correct; k++){
    		if (clickedButton == quiz[i].correct[k]){
    		return true;
    		alert("You chose correctly!");
    		correctA++;
    	} else(clickedButton !== quiz.correct[k])
    		return false;
    		incorrect ++;
    	};
    	})
    	// alert(clickedButton);
    	// if (clickedButton == quiz[i].correct[k]){
    	// 	return true;
    	// 	alert("You chose correctly!");
    	// 	correct++;
    	// } else(clickedButton !== quiz.correct[k])
    	// 	return false;
    	// 	incorrect ++;
    	// });
	});
	    
    function nextQuestion(){
    	submit = true;
		$('#questions').text(quiz[currentquestion]["question"]);
	};     

	// var quizQ = (function(){
	// 	Math.floor(Math.random() * quiz.question.length);
	// 	for (i = 0; i < quiz.question.length; i++);
	// });
	// console.log ('quizQ');
	  // function addChoices(choices) {
	  // 	for (var i = 0; i < quiz.choices.length;i ++){
	  // 		var b = $('<button>');
		 //  	 	b.addClass('btn btn-choices');
			//     b.attr('data-let', quiz.choices[i]);
			//     b.text(quiz.choices[i]);

   //    	 	$('#answers').append(b);
   //   		}
   //   	};
         

		
         // if (typeof choices !== "undefined" && $.type(choices) == "array") {
         //     $('#answers').empty();
         //     for (var i = 0; i < quiz.choices.length; i++) {
         //         $(document.createElement('button')).addClass('btn btn-choices').attr('#quiz.choices', i).text(quiz.choices[i]).appendTo('#answers');
         //         $('#choices').text(quiz[currentChoices]["choices"]);
             // }
      
//      };
	

// 	$(document.createElement('h2')).addClass('question').attr('id', 'question').text(quiz[0]['question']).appendTo('#questions');
 ;