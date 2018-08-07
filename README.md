## Overview

Pig is a simple dice game first described in print by John Scarne in 1945. Pig is commonly used by mathematics teachers to teach probability concepts. The typical game of Pig will include two players, and a player will roll a die during his or her turn. If the player rolls a 1, they score nothing and it becomes the next player's turn. If the player rolls any other number, it is added to their round score and the player's turn continues. If a player chooses to hold, their round total is added to their total score, and it becomes the next player's turn. The first player to score 100 or more points wins.

There are many different rule variants for Pig, such as Two-Dice Pig, Big Pig, and Skunk. This game will follow the variation of the rules for Two-Dice Pig. For more information about the rules and origin of the game, please refer to the [Wikipedia page](https://en.wikipedia.org/wiki/Pig_(dice_game)) that describes this information in detail.

## Instructions

The game is played in rounds with two players. For each turn, a player rolls two dice as many times as he or she wishes. Each result is added to his or her _round_ score. If the player rolls a 1, his or her round score is set to zero and it immediately becomes the next player's turn. The player can choose to _hold_, which means that his or her round score is added to their _total_ score, and it immediately becomes the next player's turn. The first player to reach 100 points for his or her total score wins the game.

1. A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn. (Hint: Always save the previous dice roll in a separate variable)
2. Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100. (Hint: you can read that value with the .value property in JavaScript. This is a good oportunity to use google to figure this out :)
3. Add another dice to the game, so that there are two dices now. The player looses his current score when one of them is a 1. (Hint: you will need CSS to position the second dice, so take a look at the CSS code for the first one.)
