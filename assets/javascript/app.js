var questions = {
	q1: "What color is the sky?",
	q2: "How many planets are in our solar system?",
	q3: "How many letters are in the alphabet?",
	a1: ["blue", "red", "green"],
	a2: ["8", "7", "9"],
	a3: ["26", "24", "27"]
}

var interval;
var answer;

var timer = {
	time: 6,
	decrement: function(){
    	timer.time--;
    	$("#timer").html("Time Remaining:" + timer.time);
    	if(timer.time === 0){
      	timer.stop();
      	$("#question").html("<h1>Time's up!</h2>")
    	}
    },
	start: function() {
      interval = setInterval(timer.decrement, 1000)
      
  	},
    stop: function(){
    	clearInterval(interval)
    },
    reset: function(){
    	timer.time = 6;
    },
};//end timer{}

function question1(){
	$("#question").html(questions.q1 + "<br><br>"
		+ "<button>" + questions.a1[0] + "</button><br><br>"
		+ "<button>" + questions.a1[1] + "</button><br><br>"
		+ "<button>" + questions.a1[2] + "</button><br><br>"
		)
	$("button").on("click", function(){
		if($(this).text() === "blue"){
			answer = true;
		} else{
			answer = false;
		}
		timer.stop();
		timer.reset();
		answerMessage();
		question2()
	});//end button click
};//end question3()

function question2(){
	$("#question").html(questions.q2 + "<br><br>"
		+ "<button>" + questions.a2[1] + "</button><br><br>"
		+ "<button>" + questions.a2[0] + "</button><br><br>"
		+ "<button>" + questions.a2[2] + "</button><br><br>"
		)
	timer.start();
	$("button").on("click", function(){
		if($(this).text() === "8"){
			answer = true;
		} else{
			answer = false;
		}
		timer.stop();
		answerMessage();
		question3();
	});//end button click
};//end question3()

function question3(){
	$("#question").html(questions.q3 + "<br><br>"
		+ "<button>" + questions.a3[2] + "</button><br><br>"
		+ "<button>" + questions.a3[1] + "</button><br><br>"
		+ "<button>" + questions.a3[0] + "</button><br><br>"
		)
	timer.start();
	$("button").on("click", function(){
		if($(this).text() === "26"){
			answer = true;
		} else{
			answer = false;
		}
		timer.stop();
		answerMessage();
	});//end button click
};//end question3()

function answerMessage (){
	if(answer === true){
		$("#question").html("<h1>You got it!</h2>")
	} else{
		$("#question").html("<h1>Wrong answer!</h2>")
	}
};//end answerMessage()

function startTrivia(){
	question1();
	timer.start();
};//end startTrivia()

$("#button").on("click", function(){
	$(this).hide();
	startTrivia();

}); //end #button click function





