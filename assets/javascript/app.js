//Display a single button on the screen that will start the game.
	//When this button is clicked it should hide itself and reveal the timer and question/answers.

var questions = [["What color is the sky?", "blue"], ["How many planets are in our solar system?", "8"], ["How many letters are in the alphabet?", "26"]]
var time = 5;
var intervalId;

$("button").on("click", function(){
	$(this).hide();
	startGame();	
}); //end start button click function


function questionOne(){
	$("#question").html("<h2>" + questions[0][0] + "</h2>" + "<br><br>"
		+ "<button>red</button><br><br>"
		+ "<button>blue</button><br><br>"
		+ "<button>green</button><br><br>"
		);
};//end questionOne

function questionTwo(){
	$("#question").html("<h2>" + questions[1][0] + "</h2>" + "<br><br>"
		+ "<button>4</button><br><br>"
		+ "<button>2</button><br><br>"
		+ "<button>8</button><br><br>"
		);
};//end questionTwo

function questionThree(){
	$("#question").html("<h2>" + questions[2][0] + "</h2>" + "<br><br>"
		+ "<button>15</button><br><br>"
		+ "<button>21</button><br><br>"
		+ "<button>26</button><br><br>"
		);
};//end questionThree

function startGame(){
	startTime();
	questionOne();
	if(time === 0){
		startTime();
		questionTwo();
	}
};

function startTime() {
	  time = 5;
      intervalId = setInterval(decrement, 1000);
      clearInterval(intervalId);
};

    
function decrement() {
      time--;
      $("#timer").html("<h2>Time Left: " + time + "</h2>");
};





console.log("hello");


