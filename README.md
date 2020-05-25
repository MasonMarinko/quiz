Repository = https://github.com/MasonMarinko/quiz
Website URL = https://masonmarinko.github.io/quiz/

## GIVEN I am taking a code quiz
    - Questions are all related to coding.

## WHEN I click the start button
## THEN a timer starts and I am presented with a question
    - When you click on the start button you are met with a timer of 5 seconds then your first question.

## WHEN I answer a question
## THEN I am presented with another question
    - When you answer a question it moves on until there are no more questions.

## WHEN I answer a question incorrectly
## THEN time is subtracted from the clock
    - When you answer questions incorrectly you lose 5 seconds AND you lose points depending on how much time is left divided by 2.

## WHEN all questions are answered or the timer reaches 0
## THEN the game is over
    - When all questions are over you are met with a field to enter your initials.

## WHEN the game is over
## THEN I can save my initials and score
    - When the game is over it shows your score and name on screen. Also the console log has all previous scores stored by a key that is the name you inputted.

-------------

# NOTE
    
    One major note, I talked to a TA tonight about the project and getting help having scores show up on screen from previous attempts. The TA that helped me told me the way they read it you only need to save one score, and having them saved in console log that is enough.
