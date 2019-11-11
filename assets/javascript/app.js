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
        var shuffle = ["retrr", "bank", "key", "issue"];
        var timeRemaining = 15;
        console.log(timeRemaining);
      counterArray =["5","4","3","2","1"];
            for (j=0; j<counterArray ;j++){
       
         console.log(counterArray[j]);

                
            console.log(j);
            }
            console.log(counterArray);
            console.log(j);
            // setInterval(function(){
            //     ("#timeRemaining") .text(timeRemaining-(timeRemaining-j)); }, 1000);
          
        
          

        $("#timeRemaining").append("Time Remaining: " + timeRemaining + " seconds")
    $(".question").append(questionOne.question);
    for (i=0; i<questionOne.answer.length;i++){
        $(".answer").append("<br>" + questionOne.answer[i]);
    }
   
    

    });