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
    var timeRemaining = 15;
  
    function startGame(){

    
        setInterval(function(){
            $("#timeRemaining").html("Time Remaining: " + timeRemaining + " seconds<br>");
            
            timeRemaining--;
        }, 1000);
              
          
    
          
  
          
            
  
      $(".question").append(questionOne.question);
      for (i=0; i<questionOne.answer.length;i++){
          $(".answer").append("<br>" + questionOne.answer[i]);
      }
     
  }
  
   
    

    ("#startButton").on("click",function(){
    startGame();
    });
    
    });