import React from 'react';
import { connect } from 'react-redux';
import { nextWord, startButtonClicked, setTimeRemaining } from '../actions';
import '../App.css';

const Splash = (props) => {
	const onClick = () => {
     props.startButtonClicked(true);
     props.setTimeRemaining(180);
     props.nextWord();
     // props.scrambleWordInit();
    }

	return (
		<div className="splash-container">
				<h1 className="splash-text">Word Wolf</h1>
				<ul>
					<li><h3>Unscramble words to score points</h3></li>
					<li><h3>Press enter when text field is blank to skip word</h3></li>
					<li><h3>Use the buttons below the text field to change word length</h3></li>
					<li><h3>Longer words score higher points!</h3></li>
				</ul>
				<button className="ui inverted primary button"
						onClick={onClick} >Start</button>
			</div>

		);
};



const mapStateToProps = state => {
  return { 
      gameStarted: state.gameStarted,
       }
  };


export default connect(mapStateToProps, { startButtonClicked, nextWord, setTimeRemaining })(Splash);