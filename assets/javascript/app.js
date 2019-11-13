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
    image: "assets/images/speedLimitSign.jpg",},
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

    var count = 15;
    var timeRemaining = 5;
    var correctAnswers = 0;
    var incorrectAnswers = 0;
    var unansweredQuestions = 0;
    var questionCounter = 0;

   // define game over function
function gameOver(){
    $("#timeRemaining").empty();
    $(".question").empty();
    $("#answer").empty();
    $("#startButton").empty();
    $("#rightOrWrongGuess").empty();
    $("correctAnswerRevealed").empty();
    $("#tfinalScreenDetails").append("<br>Correct Answers: " + correctAnswers);
    $("#tfinalScreenDetails").append("<br>Incorrect Answers: " + incorrectAnswers);
    $("#tfinalScreenDetails").append("<br>Unanswered Questions: " + unansweredQuestions);
    $(".container").attr("color", "white");
    $("#answerImage").attr("src", "assets/images/connecticutFlagWaving.gif")
        
}
     //define start screen
    $("#startButton").click(function(){
    $(this).hide();
    counter = setInterval(timer, 1000);
    //call display game function
    displayGameQuestionsAndAnswers();
});
//define timer function
function timer(){
    count--;
    if (count<=0){
    clearInterval(counter);
    }
    $("#timeRemaining").html("<br>Time Remaining: " + count + " seconds <br>");
   }
function displayGameQuestionsAndAnswers() {  
    if (questionCounter > 4) {
        gameOver();
    }
    
    $(".question").append(questionArray[questionCounter].question);
   
    for (i=0; i<questionArray[questionCounter].answer.length; i++){
    var answerButton = $("<button>");
    answerButton.text(questionArray[questionCounter].answer[i]);
    answerButton.attr("data-indexValue",questionArray[questionCounter].answer[i]);
    $(".answer").append(answerButton);
    }
    }
    $(".answer").on("click", "button", function(){
        var userChoice = ($(this).attr("data-indexValue"))
        
    
    if(userChoice == questionArray[questionCounter].correctAnswer){
        
        
    $("#timeRemaining").empty();
    $(".question").empty();

    $("#startButton").empty();
        $(".answer").empty();
        $("#rightOrWrongGuess").append("Correct!")
        $("#correctAnswerRevealed").append(questionArray[questionCounter].correctAnswer)
        $("#answerImage").attr("src", questionArray[questionCounter].image)
        $("#answerImage").append(questionArray[questionCounter].image)
        clearInterval(counter);
        questionCounter++;
        correctAnswers++;
        displayGameQuestionsAndAnswers();

    }
    else if (userChoice !== questionArray[questionCounter].correctAnswer) {

        $("#timeRemaining").empty();
        $(".question").empty();
    
        $("#startButton").empty();
            $(".answer").empty();
            $("#rightOrWrongGuess").append("Incorrect!")
            $("#correctAnswerRevealed").append(questionArray[questionCounter].correctAnswer)
            $("#answerImage").attr("src", questionArray[questionCounter].image)
            $("#answerImage").append(questionArray[questionCounter].image)
            clearInterval(counter);
            questionCounter++;
            incorrectAnswers++;
            displayGameQuestionsAndAnswers();
}
});         

    



});


//     // define start game function
// // function startGame(){
 

// //     //
// //     //setting question counter to determine which question player is on
// //     if (questionCounter === 1){
    
// //         $("#answer").append("<br>" + questionOne.answer[i]);
   
// //         };
// //         setInterval(() => {
// //         if (timeRemaining>0){
// //             $("#timeRemaining").html("<br>Time Remaining: " + timeRemaining + " seconds <br><br>");
// //             timeRemaining--;
// //             }
// //         else  {
       
         
// //             questionCounter++;
// //             unansweredQuestions++;
          
// //             startGame();
// //             }
// //         }, 1000);
    
   
// //     else if (questionCounter === 2){
// //         timeRemaining = 5;
// //         $("#timeRemaining").html("<br>Time Remaining: " + timeRemaining + " seconds <br><br>");
// //         $(".question").empty();
// //         $("#answer").empty();
// //         $(".question").append(questionTwo.question);
// //         for (j=0; j<questionTwo.answer.length; j++){
// //             $("#answer").append("<br>" + questionTwo.answer[i]);
     
// //         };
// //         setInterval(function(){
// //         if (timeRemaining>0){
// //         $("#timeRemaining").html("<br>Time Remaining: " + timeRemaining + " seconds <br><br>");
// //         timeRemaining--;
// //         }
// //         else {
// //             questionCounter++;
// //             unansweredQuestions++;
            
// //             startGame();
// //          }
// //         }, 1000);
// //     } 
// //     else if (questionCounter === 3){
// //         timeRemaining = 5;
// //         $("#timeRemaining").html("<br>Time Remaining: " + timeRemaining + " seconds <br><br>");
// //         $(".question").empty();
// //         $("#answer").empty();
// //         $(".question").append(questionThree.question);
// //         for (i=0; i<questionThree.answer.length; i++){
// //             $("#answer").html("<br>" + questionThree.answer[i]);
           
// //         };
// //         setInterval(function(){
// //         if (timeRemaining>0){
// //         console.log(timeRemaining);
// //         $("#timeRemaining").html("<br>Time Remaining: " + timeRemaining + " seconds <br><br>");
// //         timeRemaining--;
// //         }
// //         else {
// //             questionCounter++;
// //             unansweredQuestions++;
// //             startGame();
// //          }
// //         }, 1000);
// //     } 
// //     else if (questionCounter === 4){
// //         timeRemaining = 5;
// //         $("#timeRemaining").html("<br>Time Remaining: " + timeRemaining + " seconds <br><br>");
// //         $(".question").empty();
// //         $("#answer").empty();
// //         $(".question").append(questionFour.question);
// //         for (i=0; i<questionFour.answer.length; i++){
// //             $("#answer").html("<br>" + questionFour.answer[i]);
     
// //         };
// //         setInterval(function(){
// //         if (timeRemaining>0){
// //         console.log(timeRemaining);
// //         $("#timeRemaining").html("<br>Time Remaining: " + timeRemaining + " seconds <br><br>");
// //         timeRemaining--;
// //         }
// //         else {
// //             questionCounter++;
// //             unansweredQuestions++;
// //             startGame();
// //          }
// //         }, 1000);
// //     }        
// //     else if (questionCounter === 5){
// //         timeRemaining = 5;
// //         $("#timeRemaining").html("<br>Time Remaining: " + timeRemaining + " seconds <br><br>");
// //         $(".question").empty();
// //         $("#answer").empty();
// //         $(".question").append(questionFive.question);
// //         for (i=0; i<questionFive.answer.length; i++){
// //         $("#answer").append("<br>" + questionFive.answer[i]);
// //         };
// //         setInterval(function(){
// //         if (timeRemaining>0){
// //         console.log(timeRemaining);
// //         $("#timeRemaining").html("<br>Time Remaining: " + timeRemaining + " seconds <br><br>");
// //         timeRemaining--;
// //         }
// //         else {
// //             questionCounter++;
// //             unansweredQuestions++;
// //             console.log(unansweredQuestions);
// //             startGame();
// //          }
// //         }, 1000);
// //     }              
// //     else{
// //         gameOver();
// //     }
// // }

    
// // // startScreen();      
            
// // // ("#startButton").on("click",startGame());      



