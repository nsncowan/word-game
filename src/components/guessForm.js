import React from "react";
import PropTypes from "prop-types";


function GuessForm(props) {
  return (
    <>
      <form onSubmit={props.formSubmissionHandler}>
      <input
          type="text"
          name="guessLetter"
          placeholder="Enter a Letter" />
        <button type='submit'>{props.buttonText}</button>

      </form>
    </>
  );
}


GuessForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string
};

export default GuessForm;