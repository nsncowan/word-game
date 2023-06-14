import React from 'react';
import PropTypes from "prop-types";
import GuessForm from './guessForm';


class WordControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      guessList: [],
      targetWord: [],
      revealLetter: [],
      numberOfGuesses: 0,
      errorMessage: null
    };
  }


  onGuessEvent = (char) => {
    let newGuessList;
    let newErrorMessage;
    let newNumberOfGuesses;
    if (this.state.guessList.includes(char)) {
      newGuessList = this.state.guessList;
      newNumberOfGuesses = this.state.numberOfGuesses;
      newErrorMessage = "You Can't Guess The Same Letter Multiple Times!";
    } else {
      newGuessList = this.state.guessList.concat(char);
      newNumberOfGuesses = this.state.numberOfGuesses + 1;
      newErrorMessage = null;
    }
    
    this.setState({ 
      guessList: newGuessList,
      numberOfGuesses: newNumberOfGuesses,
      errorMessage: newErrorMessage
     });
  }
  
  // generateTargetWord = (word) => {
  //   const wordArray =  word.split('');
  //   this.setState({targetWord: wordArray});
  // }

  // addGuessToList = (letter) => {
  //   const newGuesses = this.state.guesses.concat(letter);
  //   this.setState({guesses: newGuesses});
  //   //missing functionality for checking already guessed letters
  // }

  // checkGuessAgainstTargetWord = (letter) => {
  //   const revealWord = this.state.targetWord.map((char) => {
  //     return char === letter ? char : '_';
  //   });
  //     this.setState({targetWord: revealWord});
  // }

  // generateRevealLetter 
  // guess: ['a'] and targetWord: [c,a,m,p] , then give me revealWord: [ , a, , ]

  //isGameOver


  render() {
    let targetWord = null;
    let displayGuessList = null;
    let displayRevealedWord = null;
    let buttonText = null;
    let guessForm = null;

    guessForm = <GuessForm onGuessEvent1={this.onGuessEvent}/>
    // displayGuessList = <GuessList addGuessToListProp={this.addGuessToList}/>
    // displayRevealedWord = <DisplayTargetWord revealLetterProp={this.revealLetter} />
    // gameOver = <CheckForGameOver checkNumberOfGuessesProp={this.checkNumberOfGuesses} checkWordCompleteProp={this.checkWordComplete} />


    return (
      <>
      <h1>Guess a Letter</h1>
      {guessForm}
      <h2>Here are your guesses: {this.state.guessList}</h2>
      <h2>Number of Guesses: {this.state.numberOfGuesses}</h2>
      {this.state.errorMessage}
      <hr></hr>
      {console.log(this.state)}

      {/* <h2>Spent Letters</h2>
      {displayGuessList}
      <h2>Guesses Left: </h2>
      <h1>Target Word</h1>
      {displayRevealedWord} */}
      </>
    );
  }
  
 
}
export default WordControl;
/* 
1. recieve an input guess *
2. display that guess *
3. display multiple guesses * 
4. ensure no duplicate guesses *
5. render (hidden) target word 
6. evaluate a guess to be correct or incorrect
7. begin to reveal word with correct guesses
*/



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