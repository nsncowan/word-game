import React from 'react';
import PropTypes from "prop-types";


class WordControl extends React.Component {

  constructor(prop) {
    super(props)
    this.state = {
      guesses: [],
      targetWord: [],
      revealLetter: [],
      numberOfGuesses: null
    };
  }

  generateTargetWord = (word) => {
    const wordArray =  word.split('');
    this.setState({targetWord: wordArray});
  }

  addGuessToList = (letter) => {
    const newGuesses = this.state.guesses.concat(letter);
    this.setState({guesses: newGuesses});
    //missing functionality for checking already guessed letters
  }

  checkGuessAgainstTargetWord = (letter) => {
    const revealWord = this.state.targetWord.map((char) => {
      return char === letter ? char : '_';
    });
      this.setState({targetWord: revealWord});
  }

  // generateRevealLetter 
  // guess: ['a'] and targetWord: [c,a,m,p] , then give me revealWord: [ , a, , ]

  //isGameOver


  render() {
    let targetWord = null;
    let displayGuessList = null;
    let displayRevealedWord = null;
    let buttonText = null;

    displayGuessList = <GuessList addGuessToListProp={this.addGuessToList}/>
    displayRevealedWord = <DisplayTargetWord revealLetterProp={this.revealLetter} />
    gameOver = <CheckForGameOver checkNumberOfGuessesProp={this.checkNumberOfGuesses} checkWordCompleteProp={this.checkWordComplete} />


    return (
      <>
      <h1>Guess a Letter</h1>
      {guessForm}
      <h2>Spent Letters</h2>
      {displayGuessList}
      <h2>Guesses Left: </h2>
      <h1>Target Word</h1>
      {displayRevealedWord}
      </>
    );



  }

  
}


// 0. load a word, display nothing
// 3. targetWord: ['c', 'a', 'm'. 'p']
// 1. guess 'a'
//   - if not guessed, add to list of guesses, guesses: ['a'], increment by -1
//   - if guessed, throw message
// 4. iterate over targetWord
//   - where in target word does character === guess
//   - Generate a revealWord [ , 'a', , ]
//     - display will iterate, if its null, then show x, if its not null, show the letter
// 5. where it matches, reveal letter, where not, do nothing
// 6. repeat
// 7. if all letters are revealed, game over
// 8. if guess count === 0, game over