const input = require('readline-sync');

// oldPointStructure:
const oldPointStructure = {
   1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
   2: ['D', 'G'],
   3: ['B', 'C', 'M', 'P'],
   4: ['F', 'H', 'V', 'W', 'Y'],
   5: ['K'],
   8: ['J', 'X'],
   10: ['Q', 'Z']
};

// transform function:
function transform(object) {
  let transformedObject = {}
  for (x in object) {
    for(i = 0; i < object[x].length; i++) {
      transformedObject[object[x][i]] = Number(x)
    }
  }
  transformedObject[" "] = 0
  return transformedObject
}

// Used the transform function to create the newPointStructure object here:
let newPointStructure = transform(oldPointStructure)

// Scoring Functions here:
function scrabbleScore(string, scoringStructure) {
  let score = 0
	for (i = 0; i < string.length; i++) {
    score += Number(scoringStructure[string[i]])
  }
	  return score
}

function simpleScore(string) {
  let score = 0
  for (i = 0; i < string.length; i++) {
    score += 1
  }
  return score
}

function bonusVowels(string) {
  let score = 0
  let vowels = ['A','E','I','O','U']
  
  for (i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toUpperCase())) {
      score += 3
      } else {
          score += 1
    }   
  }
  return score
}

// scoringAlgorithms array here:
let scrabbleScoring = {name:"Scrabble", description:"The traditional scoring algorithm.", scoreFunction:scrabbleScore};
let simpleScoring = {name:"Simple Score", description:"Each letter is worth 1 point.", scoreFunction:simpleScore};
let vowelScoring = {name:"Bonus Vowels", description:"Vowels are 3 pts, consonants are 1 pt.", scoreFunction:bonusVowels};
let scoringAlgorithms = [scrabbleScoring, simpleScoring, vowelScoring]

// initialPrompt function:
let initialPrompt = function() {
let pickAlgorithm = `Which scoring algorithm would you like to use?

0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}
1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}
2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}
  
Enter 0, 1, or 2: `

  let selectedAlgorithm = input.question(`Welcome to the Scrabble score calculator!
  
${pickAlgorithm}`)
  while (selectedAlgorithm != 0 && selectedAlgorithm != 1 && selectedAlgorithm != 2) {
	selectedAlgorithm = input.question(`\nUh oh! That's not going to work; let's try again!

Which scoring algorithm would you like to use?

0 - ${scoringAlgorithms[0].name}: ${scoringAlgorithms[0].description}
1 - ${scoringAlgorithms[1].name}: ${scoringAlgorithms[1].description}
2 - ${scoringAlgorithms[2].name}: ${scoringAlgorithms[2].description}

Please enter 0, 1, or 2: `)
  }
  console.log(`\nYou selected ${scoringAlgorithms[selectedAlgorithm].name} Scoring.`)
	return selectedAlgorithm 
}

// validate input function here:
let validInput = function(word, scoringStructure) {
  for (i = 0; i < word.length; i++) {
    if (!Object.keys(scoringStructure).includes(word[i])) {
      return false
    }
  }
  return true
}

// runProgram function here:
let runProgram = function(scoringArray, scoringStructure) {
  let selectedAlgorithm = initialPrompt()
  let word
  let valid
  
  while (word !== "STOP") {
    word = (input.question(`\nPlease enter a word you would like to have scored or "STOP" to quit: `))
    
    if (word === "STOP") {
      console.clear()
      return console.log("Goodbye! Thanks for playing. :)")
    } 

  word = word.toUpperCase().split("")
  valid = validInput(word, scoringStructure)

    while (valid === false) {
      word = input.question(`\nPlease enter a valid word to be scored, or "STOP" to quit: `)
      word = word.toUpperCase().split("")
      valid = validInput(word, scoringStructure)
    }
    console.log(`\n${word.join("")} is worth ${scoringAlgorithms[selectedAlgorithm].scoreFunction(word, newPointStructure)} points according to ${scoringAlgorithms[selectedAlgorithm].name} Scoring.`)
  }
}

// Call the runProgram function here:
runProgram(scoringAlgorithms, newPointStructure)
