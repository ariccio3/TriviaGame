

	var questions = [
		{
			question: "How many pet cats are there in the U.S.?",
			correct: "86,400,000",
			answers: ["525,000,000", "86,400,000", "6,300,000"]
		},
	 	{
			question: "In years, what is the average circulation time of a U.S. coin?",
			correct: "25 years",
			answers: ["25 years", "15 years", "32 years"]
		},
		{
			question: "How many dollars did the U.S. pay to Russia to aquire Alaska in 1867?",
			correct: "$7,200,000",
			answers: ["$47,000,000", "$102,000,000", "$7,200,000"]
		},
		{
			question: "In feet, how long is the Statue of Liberty's right arm?",
			correct: "42 feet",
			answers: ["51 feet", "27 feet", "42 feet"]
		},
		{
			question: "How many words are in the U.S. Declaration of Independence?",
			correct: "1,323",
			answers: ["3,348", "942", "1,323"]
		},
		{
			question: "How many U.S. states legaly allow first cousins to get married?",
			correct: "25",
			answers: ["8", "17", "25"]
		},
		{
			question: "What percent of Americans do work while on vacation?",
			correct: "59%",
			answers: ["74%","59%", "33%"]
		},
		{
			question: "What percent of Americans have never moved away from their hometown?",
			correct: "37%",
			answers: ["25%", "68%", "37%"]
		},
		{
			question: "In degrees Fahrenheit, what is the highest temperature ever recorded in the U.S.?",
			correct: "134°",
			answers: ["151°", "134°", "142°"]
		},
		{
			question: "In years, how old was Ben Franklin when he signed the U.S. Constitution?",
			correct: "81 years old",
			answers: ["81 years old", "75 years old", "66 years old"]
		},
		{
			question: "What percent of American adults have a tattoo?",
			correct: "21%",
			answers: ["21%", "33%", "54%"]
		},
		{
			question: "In what year did the U.S. establish 9-1-1 as an emergency phone number?",
			correct: "1968",
			answers: ["1950", "1929", "1968"]
		},
		{
			question: "How many hours per week does the average American watch TV?",
			correct: "19 hours",
			answers: ["11 hours", "19 hours", "17 hours"]
		},
		{
			question: "What percent of American adults average more than 8 hours of sleep per night?",
			correct: "28%",
			answers: ["38%", "58%", "28%"]
		},
		{
			question: "What percent of bank robberies in the U.S.are committed by women?",
			correct: "6.2%",
			answers: ["15.2%", "6.2%", "32.2%"]
		},
		{
			question: "What percent of U.S. presidents have served in the military?",
			correct: "72%",
			answers: ["59%", "41%", "72%"] 
		},
		{
			question: "What year did the U.S. Department of Defense acknowledge the existence of Area 51?",
			correct: "1994",
			answers: ["1994", "1969", "1981"]
		},
		{
			question: "What percent of Americans wash their hands after using a public restroom?",
			correct: "85%",
			answers: ["96%", "85%", "60%"]
		},
		{
			question: "How many U.S. state abbreviations do notcontain a vowel?",
			correct: "20",
			answers: ["15", "20", "10"]
		},
		{
			question: "What was the estimated population of the United States in July of 1776?",
			correct: "2.5 million",
			answers: ["10.5 million", "12.5 million", "2.5 million"]
		},
		{
			question: "How many servings of carbonated soft drinks does the average American drink per week?",
			correct: "13.75",
			answers: ["8.75", "13.75", "21.75"]
		},
		{
			question: "In what year did gumball machines first appear in the U.S.?",
			correct: "1907",
			answers: ["1907", "1876", "1927"]
		},
		{
			question: "How many nuclear power reactors are operating in the U.S.?",
			correct: "104",
			answers: ["84", "75", "104"]
		}
	];
	
	function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
	}

	// Need variables

	var correct = 0;
	var incorrect = 0;
	var unanswered = 0;
	var timeOutCounter = 5;
	var questionCount = 0;
	var correctAnswer;
	var currentQuestion;
	var red;
	var white;
	var blue;
	var intervalId;
	var countdownTimer;
	var questionCounter = 30;

	var startGame = function() {
		shuffle(questions);
		playGame();
		timer();
	};

	var playGame = function() {

		for (var i = 0; i < questions.length; i++) {
		currentQuestion = (questions[i].question);
		red = questions[i].answers[0];
		white = questions[i].answers[1];
		blue = questions[i].answers[2];
		correctAnswer = (questions[i].correct);
		
		$("#question").html(currentQuestion);
		$("#redBtn").html(red);
		$("#whiteBtn").html(white);
		$("#blueBtn").html(blue);
		$("#timer").html("Time Remaining: " + questionCounter + " Seconds");
		}
	};
		// action when red button clicked

		$("#redBtn").click(function() {

		if (red === correctAnswer){
			win();
			clearInterval(countdownTimer);
 			correct++;
		} else if (red !== correctAnswer) {
			lose();
			clearInterval(countdownTimer);
			incorrect++;
		} else {
			timesUp();
		}

		});

		// action when white button clicked

		$("#whiteBtn").click(function() {

		if (white === correctAnswer){
			win();
			clearInterval(intervalId);
 			correct++;
		} else if (white !== correctAnswer) {
			lose();
			clearInterval(intervalId);
			incorrect++;
		} else {
			timesUp();
		}
		});
		// action when blue button clicked

		$("#blueBtn").click(function() {

		if (blue === correctAnswer){
			win();
			clearInterval(intervalId);
 			correct++;
		} else if (blue !== correctAnswer) {
			lose();
			clearInterval(intervalId);
			incorrect++;
		} else {
			timesUp();
		}
		});
	

	var timer = function() {
			 intervalId = setInterval(decrement, 1000);
			};

	var decrement = function() {
		if (questionCounter > 0) {
		questionCounter--;
		$("#timer").html("Time Remaining: " + questionCounter + " Seconds")
			clockRunning = true;}
		if (questionCounter === 0) {
			unanswered++;
			timesUp();
			
		} 
	};

    function stop() {

      clearInterval(intervalId);
    }


	var pause = function() {
		timeOutCounter--;
		if (questionCount < 23) {
			playGame();
		} else {
			gameOver();
		}
	};


	var win = function() {
			$("#question").text("You are Correct!!");
			correct++;
			questionCount--;
			setTimeout(pause, 5000);
			playGame();

	};

	var lose = function () {
			$("#question").text("Sorry, the correct answer is " + correctAnswer);
			incorrect++;
			questionCount--;
			setTimeout(pause, 5000);
			playGame();
	};

	var timesUp = function() {
			$("#question").text("Times Up!! The correct answer is " + correctAnswer);
			unanswered++;
			questionCount--;
			setTimeout(pause, 5000);
			playGame();
	};
	
	var gameOver = function() {
		if (questionCount < 23) {
			$("#question").text("Correct: " + correct + "<br>" + "Incorrect: " + incorrect + "<br>" + "Unanswered: " + unanswered);
			$("#whiteBtn").html("Play Again?");
			stop();
		}
	};
	
	
	
    $(document).ready(function onPageLoad() {
    	startGame();
    	
// console.log(correct);
// console.log(incorrect);
// console.log(unanswered);
// console.log(questionCount);
    });
    





