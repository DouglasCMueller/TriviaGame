# TriviaGame.github.io
Connecticut State Trivia Game!
Developer: Douglas C. Mueller
This is an trivia style game with a Connecticut State Theme. It is written in javascript with a jquery library.  To play, the user answers questions related to CT state trivia.
issues: (the game play itself is working just how I want it to.)
1. I tried to create a random array of answers per question using the SET object.  Pseudo-code would look like this:
    - generate random number corresponding to the index of answer array.
    - loop through the answer array and place random index array item in a SET, as each item in a set can't be duplicated.
    - issue is how many times you would have to loop to get the SET created with the 4 answers(i guess until the set length is equal to original array length - i just didn't want to get into it).
2. I am still having an issue with reset button at end.
    - i tried to add an actual reset button, but it looks clumsy.
    - i tried to reset game by recalling start screen function after a certain number of seconds using setTimeout in the game over function - that wouldn't call the start screen for some reason.

