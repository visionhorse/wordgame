import React from 'react';
import { connect } from 'react-redux';
import { startButtonClicked, nextWord, setGameOver, addPoints, setTimeRemaining } from '../actions';
import '../App.css';

const GameOverScreen = (props) => {


	const onClick = () => {
     props.startButtonClicked(true);
     props.setGameOver(false);
     props.nextWord();
     props.setTimeRemaining(180);
     props.addPoints(null);
     // props.scrambleWordInit();
    }

	return (
	<div className="game-container">
				<h1 className="splash-text">Game Over</h1>
				<h2>Score: {props.points}</h2>
				<br />
				<button className="ui inverted primary button"
						onClick={onClick} >Play Again</button>
			</div>

		);
};

const mapStateToProps = state => {
  return { 
      gameOver: state.gameOver,
      points: state.points
       }
  };

export default connect (mapStateToProps, { startButtonClicked, setGameOver, nextWord, addPoints, setTimeRemaining })(GameOverScreen);