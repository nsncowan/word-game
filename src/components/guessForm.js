import React from "react";
import PropTypes from "prop-types";


function GuessForm(props) {

  function handleNewGuessFormSubmission(event) {
    event.preventDefault();
    props.onGuessEvent1(event.target.guess.value);
  }

  return (
    <>
      <form onSubmit={handleNewGuessFormSubmission}>
      <input
          type="text"
          name="guess"
          placeholder="Enter a Letter" />
        <button type='submit'>{props.buttonText}</button>

      </form>
    </>
  );
}


GuessForm.propTypes = {
  onGuessEvent1: PropTypes.func,
  buttonText: PropTypes.string
};

export default GuessForm;