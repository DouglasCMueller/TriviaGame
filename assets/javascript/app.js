$(document).ready(function() {
    
    //Variables defined
    var questionOne = {
        question: "The third oldest institution of higher learning in the U.S. was established in New Haven, CT in 1701.  What is the name of this school?",
        answer: ["Yale University", "Harvard University", "Brown University", "Colby College"]};
    var questionTwo = {
        question: "In 1901, the first law regulating the speed of a motor vehicle was imposed in Connecticut. What was the speed limit?",
        answer: ["12 mph", "22 mph", "32 mph", "42 mph"]};
    var questionThree = {
        question: "The oldest public library in the U.S was established in 1771 in Connecticut.  What is the name of the library?",
        answer: ["The Scoville Memorial Library", "Hughes Memorial Library", "Ivoryton Library", "James Blackstone Memorial Library"]};
    var questionFour = {
        question: "The first hamburger in the United States was made in Connecticut.  Where?",
        answer: ["Louis' Lunch", "Shake Shack", "Elm Diner", "Route 80 Cafe"]};
    var questionFive = {
        question: "The world's first sports cable channel was launched in Bristol, CT in 1979.  What was it called?",
        answer: ["ESPN", "FSN1", "CBSN", "MLBN"]};
    var timeRemaining = 5;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;
    questionCounter = 1;
    function startScreen(){

    }
    function gameOver(){

    }
function startGame(){

    $("#timeRemaining").html("<br>Time Remaining: " + timeRemaining + " seconds <br><br>");
    //setting question counter to determine which question player is on
    if (questionCounter === 1){
        $(".question").append(questionOne.question);
        for (i=0; i<questionOne.answer.length; i++){
        $("#answer").append("<br>" + questionOne.answer[i]);
        };
        setInterval(function(){
        if (timeRemaining>0){
            $("#timeRemaining").html("<br>Time Remaining: " + timeRemaining + " seconds <br><br>");
            timeRemaining--;
            }
        else  {
            questionCounter++;
            unansweredQuestions++;
            startGame();
            }
        }, 1000);
    }
   
    if (questionCounter === 2){
        timeRemaining = 5;
        $("#timeRemaining").html("<br>Time Remaining: " + timeRemaining + " seconds <br><br>");
        $(".question").empty();
        $("#answer").empty();
        $(".question").append(questionTwo.question);
        for (j=0; j<questionTwo.answer.length; j++){
        $("#answer").append("<br>" + questionTwo.answer[j]);
        };
        setInterval(function(){
        if (timeRemaining>0){
        $("#timeRemaining").html("<br>Time Remaining: " + timeRemaining + " seconds <br><br>");
        timeRemaining--;
        }
        else {
            questionCounter++;
            unansweredQuestions++;
            startGame();
         }
        }, 1000);
    } 
    if (questionCounter === 3){
        timeRemaining = 5;
        $("#timeRemaining").html("<br>Time Remaining: " + timeRemaining + " seconds <br><br>");
        $(".question").empty();
        $("#answer").empty();
        $(".question").append(questionThree.question);
        for (i=0; i<questionThree.answer.length; i++){
        $("#answer").append("<br>" + questionThree.answer[i]);
        };
        setInterval(function(){
        if (timeRemaining>0){
        console.log(timeRemaining);
        $("#timeRemaining").html("<br>Time Remaining: " + timeRemaining + " seconds <br><br>");
        timeRemaining--;
        }
        else {
            questionCounter++;
            unansweredQuestions++;
            startGame();
         }
        }, 1000);
    } 
    if (questionCounter === 4){
        timeRemaining = 5;
        $("#timeRemaining").html("<br>Time Remaining: " + timeRemaining + " seconds <br><br>");
        $(".question").empty();
        $("#answer").empty();
        $(".question").append(questionFour.question);
        for (i=0; i<questionFour.answer.length; i++){
        $("#answer").append("<br>" + questionFour.answer[i]);
        };
        setInterval(function(){
        if (timeRemaining>0){
        console.log(timeRemaining);
        $("#timeRemaining").html("<br>Time Remaining: " + timeRemaining + " seconds <br><br>");
        timeRemaining--;
        }
        else {
            questionCounter++;
            unansweredQuestions++;
            startGame();
         }
        }, 1000);
    }        
    if (questionCounter === 5){
        timeRemaining = 5;
        $("#timeRemaining").html("<br>Time Remaining: " + timeRemaining + " seconds <br><br>");
        $(".question").empty();
        $("#answer").empty();
        $(".question").append(questionFive.question);
        for (i=0; i<questionFive.answer.length; i++){
        $("#answer").append("<br>" + questionFive.answer[i]);
        };
        setInterval(function(){
        if (timeRemaining>0){
        console.log(timeRemaining);
        $("#timeRemaining").html("<br>Time Remaining: " + timeRemaining + " seconds <br><br>");
        timeRemaining--;
        }
        else {
            questionCounter++;
            unansweredQuestions++;
            console.log(unansweredQuestions);
            startGame();
         }
        }, 1000);
    }              
    if (questionCounter >5){
        gameOver();
    }
}   

//   startGame();             
            
("#startButton").on("click",startGame());      



    

});