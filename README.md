# Scrabble Scorer

<p align="center"><img width="582" alt="Screen Shot 2021-07-15 at 6 40 34 PM" src="https://user-images.githubusercontent.com/79928899/125871144-90c8d23a-02e2-47b8-82e4-d2db94b82395.png"></p>
This was a program that I completed early on in my studies as a part of LC101. I've included some details below as well as a link to the repl.it where you can try it out.

## The Problem
The current Scrabble Scorer program takes in a word and returns its point value. The program needs to be rewritten for two reasons:

The data structure used to store the letter point values is inefficient.
The program should have three scoring algorithms and allow the user to pick which one to use.

## Requirements

1) Create an initialPrompt function that asks the user which scoring algorithm to use.
2) Create a transform function that takes in the oldPointStructure object and returns a newPointStructure object.
3) Code three different scoring functions for assigning points to a word.
4) Create a scoringAlgorithms array to hold three scoring objects. Each object will contain three key/value pairs.
5) Create a runProgram function to serve as the starting point for your program.

## Bonus Missions

Currently, the prompts accept ANY input values. The user could enter something other than 0, 1, or 2 when selecting the scoring algorithm, and they could enter numbers or symbols when asked for a word. Modify your code to reject invalid inputs and then re-prompt the user for the correct information.
Score words spelled with blank tiles by adding ' ' to the newPointStructure object. The point value for a blank tile is 0.


https://replit.com/@skylerhogan/scrabble-scorer
