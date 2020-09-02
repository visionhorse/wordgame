import React, { useState } from 'react';
import '../App.css';
import ButtonGroup from './ButtonGroup';
import { connect } from 'react-redux';
import { nextWord, textChange, enterAnswer, startButtonClicked, scrambleWordInit, addPoints } from '../actions';
import ActualWord from './ActualWord';



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
		if ((props.enteredText === props.currentWord.word) || 
			(props.currentWord.alternates && props.currentWord.alternates.includes(props.enteredText))) {
			correctAnswer();
			event.target.reset();
			props.nextWord();
			props.textChange('')
		} else if
			(!props.enteredText) {
				props.nextWord();
		} else {
			setWrong(true);
		};

	};

	const correctAnswer = () => {

		switch(props.wordLength) {
			case 4:
				return props.addPoints(props.points + 100)
			case 5:
				return props.addPoints(props.points + 300)
			case 6:
				return props.addPoints(props.points + 660)
			case 7:
				return props.addPoints(props.points + 900)
			case 8:
				return props.addPoints(props.points + 1300)
			default:
				return;
			}
	};

	

		return (
			<div className="game-container">
				<ActualWord key={props.scrambledWord.scrambledWord}/>
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
			scrambledWord: state.scrambledWord,
			wordLength: state.wordLength,
			points: state.points
			 }
	};


export default connect(mapStateToProps, { nextWord, textChange, enterAnswer, startButtonClicked, scrambleWordInit, addPoints })(WordDisplay);



