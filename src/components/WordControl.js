import React from 'react';
import PropTypes from "prop-types";
import GuessForm from './guessForm';
import { auth } from './../firebase.js';


class WordControl extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      guessList: [],
      targetWord: ['t', 'a', 'r', 'g', 'e', 't'],
      revealLetter: [],
      numberOfGuesses: 0,
      errorMessage: null,
      isGuessCorrect: null,
      endGameMessage: null
    };
  }

  componentDidMount(){
    this.initiateTargetLetters();
  }

    // loadTargetWord () 

  initiateTargetLetters = () => {
    const newRevealLetter = this.state.targetWord.map(letter => "_");
    this.setState({ revealLetter: newRevealLetter});
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
      this.evaluateGuess(char);
    }
    this.setState({ 
      guessList: newGuessList,
      numberOfGuesses: newNumberOfGuesses,
      errorMessage: newErrorMessage
    });
    this.gameOver();
  }
  
  evaluateGuess = (char) => {
    let guessMessage;
    if (this.state.targetWord.includes(char)) {
      guessMessage = "you guessed correctly";
      this.updateRevealLetters(char);
    }
    else {
      guessMessage = "wrong! try again!";
    }
    this.setState({ isGuessCorrect: guessMessage });
  }

  updateRevealLetters = (char) => {
    let updatedRevealLetter = this.state.revealLetter;
    this.state.targetWord.map((ch,index) => (ch === char) ? updatedRevealLetter[index] = char : null );
    this.setState({ revealLetter: updatedRevealLetter});
  }

  gameOver = () => {
    let gameOverMessage;
    if (this.state.revealLetter.join("") === this.state.targetWord.join("")) {
      gameOverMessage = "YOU WIN!!!";
    }
    else if (this.state.guessList.length === 5) {
      gameOverMessage = "YOU LOSE!!!"
    }
    this.setState({endGameMessage: gameOverMessage});
  }

/* 
  1. take targetWord
  2. map to create a dummyArray full of "_"
  3. take index of where guess occurs in targetWord
  4. in dummyArray, switch "_" at index from step three with guess letter
*/



  // generateTargetWord = (word) => {
  //   const wordArray =  word.split('');
  //   this.setState({targetWord: wordArray});
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
    if (auth.currentUser == null) {
      return (
        <React.Fragment>
          <h1>You must be signed in to access the game.</h1>
        </React.Fragment>
      )
    } else if (auth.currentUser != null) {

    return (
      <>
      <h1>Guess a Letter</h1>
      {guessForm}
      <h2>Answer:{this.state.revealLetter.join(' ')}</h2>
      <h2>Here are your guesses: {this.state.guessList}</h2>
      <h2>Number of Guesses: {this.state.numberOfGuesses}</h2>
      {this.state.errorMessage}
      <hr></hr>
      <h2>isGuessCorrect: {this.state.isGuessCorrect}</h2>
      <h1>{this.state.endGameMessage}</h1>
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
}
export default WordControl;
/* 
1. recieve an input guess *
2. display that guess *
3. display multiple guesses * 
4. ensure no duplicate guesses *
5. evaluate a guess to be correct or incorrect *
6. begin to reveal word with correct guesses
7. render (hidden) target word 
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