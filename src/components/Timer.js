import React, { useEffect } from 'react';
import { setGameOver, setTimeRemaining, setPersonalBest } from '../actions';
import { connect } from 'react-redux';
import '../App.css';

const Timer = (props) => {

	const timing = (time) => {


		const minutes = Math.floor(time / 60);
		let seconds = time % 60;

		if (seconds < 10) {
			seconds = `0${seconds}`
		}

		return `${minutes}:${seconds}`;
		// return time;
	}

	const { gameStarted, timeRemaining, setTimeRemaining, personalBest, points, setPersonalBest, setGameOver } = props;

	useEffect(() => {

		let interval = null;
		if (timeRemaining > 0) {
		interval = setInterval(() => {
			// setTimePassed(timePassed + 1);
			// setTimeRemaining(FIVE_MINUTES - timePassed);
			setTimeRemaining(timeRemaining - 1);
		}, 1000);
	} else if (timeRemaining === 0) {
		clearInterval(interval);
		if (points > personalBest) {
			setPersonalBest(points);
		}
		setGameOver(true);

	}
	return () => clearInterval(interval);
		
	}, [gameStarted, timeRemaining, setTimeRemaining, personalBest, points, setPersonalBest, setGameOver ]);

	

	return (
		<div className="header-items">
			<h2>{timing(props.timeRemaining)}</h2>
		</div>
		);

};

const mapStateToProps = state => {
	return { timeRemaining: state.timeRemaining,
			points: state.points,
			personalBest: state.personalBest,
			gameStarted: state.gameStarted
			 }
}

export default connect (mapStateToProps, { setGameOver, setTimeRemaining, setPersonalBest })(Timer);


