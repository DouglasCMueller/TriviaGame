$(document).ready(function() {
    
    //Variables defined

var questionArray =[ {
    question: "The third oldest institution of higher learning in the U.S. was established in New Haven, CT in 1701.  What is the name of this school?",
    answer: ["Yale University", "Harvard University", "Brown University", "Colby College"],
    correctAnswer:"Yale University",
    image: "assets/images/yaleUniversity.jpg",},
    {
    question: "In 1901, the first law regulating the speed of a motor vehicle was imposed in Connecticut. What was the speed limit?",
    answer: ["12 mph", "22 mph", "32 mph", "42 mph"],
    correctAnswer:"12 mph",
    image: "assets/images/12MphSpeedLimit.png",},
    {
    question: "The oldest public library in the U.S was established in 1771 in Connecticut.  What is the name of the library?",
    answer: ["The Scoville Memorial Library", "Hughes Memorial Library", "Ivoryton Library", "James Blackstone Memorial Library"],
    correctAnswer: ["The Scoville Memorial Library"],
    image: "assets/images/scofieldLibrary.jpg",},
    question = {
    question: "The first hamburger in the United States was made in Connecticut.  Where?",
    answer: ["Louis' Lunch", "Shake Shack", "Elm Diner", "Route 80 Cafe"],
    correctAnswer:"Louis' Lunch",
    image: "assets/images/louisLunch.jpg",},
    question = {
    question: "The world's first sports cable channel was launched in Bristol, CT in 1979.  What was it called?",
    answer: ["ESPN", "FSN1", "CBSN", "MLBN"],
    correctAnswer: "ESPN",
    image: "assets/images/espnHeadquarters.jpg",}];
    var governorImage = "assets/images/nedLamont.jpg"
var counter;
    var time = 15;
  
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;
    var questionCounter = 0;
    //clear image border lines
$("#answerImage").empty();
   // define game over function
function gameOver(){
    $("#timeRemaining").empty();
    $("#timeExpired").empty();
    $(".question").empty();
    $(".answer").empty();
    $("#startButton").empty();
    $("#rightOrWrongGuess").empty();
    $("correctAnswerRevealed").empty();
    $("#answerImage").empty();
    $("#finalScreenDetails").append("Correct Answers: " + correctAnswers + "<br>");
    $("#finalScreenDetails").append("Incorrect Answers: " + incorrectAnswers + "<br>");
    $("#finalScreenDetails").append("Unanswered Questions: " + unansweredQuestions + "<br><br>");
    $("#finalScreenDetails").append("Congratulations for completing the quiz from Connecticut Governor Ned Lamont! <br>")
    $("#answerImage").attr("src", governorImage)
    $("#answerImage").html(governorImage)
  
}
     //define start screen
     function startScreen(){
    $("#startButton").click(function(){
      //hide start button when clicked
    $(this).hide();
   
    //call display game function after start button clicked
    setTimeout(displayGameQuestionsAndAnswers, 500);
});}
//define timer function
// function timer(){
    
//     counter = setInterval(timer, 1000);
//     function countdown() {
//         if (time === 0){
//             clearInterval(counter);
//             userTimeExpired();
//         }
//         if (time > 0){
//             time--;
//         }
//         $$("timeRemaining").html("Time Remaining: " + time );
//         }
//     }
//    //define function for time expired
//    function userTimeExpired() {
//    if( time === 0){
// unansweredQuestions++;
// $("timeExpired").text("Your time ran out!")
// displayGameQuestionsAndAnswers();
//    }}
   //define function for displaying questions and answers
function displayGameQuestionsAndAnswers() {  
    $("#rightOrWrongGuess").empty();
    $("#correctAnswerRevealed").empty();
    $("#answerImage").attr('src', '');
    $("#answerImage").empty();

//after 5 questions game over
    if (questionCounter === 5) {
        gameOver();
    }
    //start timer
// timer();
//show question
    $(".question").append(questionArray[questionCounter].question);
   //create clickable answers
    for (i=0; i<questionArray[questionCounter].answer.length; i++){
    var answerButton = $("<button>");
    answerButton.text(questionArray[questionCounter].answer[i]);
    answerButton.attr("data-indexValue",questionArray[questionCounter].answer[i]);
    $(".answer").append(answerButton);
    }
    }
    //user clicks on an answer
    $(".answer").on("click", "button", function(){
        var userChoice = ($(this).attr("data-indexValue"))
//user correctly guesses
    if(userChoice == questionArray[questionCounter].correctAnswer){
        $("#timeRemaining").empty();
        $("#timeExpired").empty();
        $(".question").empty();
        $(".answer").empty();
        $("#startButton").empty();
        $("#rightOrWrongGuess").empty();
        $("correctAnswerRevealed").empty();
        $("#answerImage").empty();
        $("#rightOrWrongGuess").html("Correct!")
        $("#correctAnswerRevealed").html(questionArray[questionCounter].correctAnswer)
        $("#answerImage").attr("src", questionArray[questionCounter].image)
        $("#answerImage").html(questionArray[questionCounter].image)
        clearInterval(counter);
        questionCounter++;
        correctAnswers++;
        count=15;
        setTimeout(displayGameQuestionsAndAnswers, 2000);
    }
    else if (userChoice !== questionArray[questionCounter].correctAnswer) {
        $("#timeRemaining").empty();
        $("#timeExpired").empty();
        $(".question").empty();
        $(".answer").empty();
        $("#startButton").empty();
        $("#rightOrWrongGuess").empty();
        $("correctAnswerRevealed").empty();
        $("#answerImage").empty();
        $("#rightOrWrongGuess").append("Incorrect!")
        $("#correctAnswerRevealed").append("The right answer was " + questionArray[questionCounter].correctAnswer)
        $("#answerImage").attr("src", questionArray[questionCounter].image)
        $("#answerImage").append(questionArray[questionCounter].image)
        clearInterval(counter);
        count=15;
        questionCounter++;
        incorrectAnswers++;

        setTimeout(displayGameQuestionsAndAnswers, 2000);
}
});    
startScreen();     
});





