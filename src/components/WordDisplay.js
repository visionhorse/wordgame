import React, { useState } from 'react';
import '../App.css';
import ButtonGroup from './ButtonGroup';
import { connect } from 'react-redux';
import { nextWord, textChange, enterAnswer, startButtonClicked, scrambleWordInit } from '../actions';



const WordDisplay = (props) => {

	const [wrong, setWrong] = useState(false);

	

	const onChange = event => {
		event.preventDefault();
		props.textChange(event.target.value);
		setWrong(false);
	};



	const onSubmit = event => {
		event.preventDefault();
		props.enterAnswer(props.enteredText);
		if (props.enteredText === props.currentWord.word) {
			props.nextWord();
			event.target.reset();
			props.textChange('')

		} else if
			(!props.enteredText) {
				props.nextWord();
		} else {
			setWrong(true);
		};

	};


		return (
			<div className="game-container">
				<h1>{props.scrambledWord.scrambledWord}</h1>
				<br />
				<form className="ui inverted form" onChange={onChange} onSubmit={onSubmit} >
					<div className="ui input focus">
  						<input type="text"
  								 placeholder="Good luck"
  								 className={wrong ? "wrong" : "normal"}  />
					</div>
				</form>
				<br /><br />
				<ButtonGroup />
			</div>
			)
	};






const mapStateToProps = state => {
	return { currentWord: state.currentWord,
			gameStarted: state.gameStarted,
			enteredText: state.textChange.enteredText,
			scrambledWord: state.scrambledWord
			 }
	};


export default connect(mapStateToProps, { nextWord, textChange, enterAnswer, startButtonClicked, scrambleWordInit })(WordDisplay);



