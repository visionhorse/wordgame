import React from 'react';
import PointsDisplay from './PointsDisplay';
import Timer from './Timer';
import DisplayPersonalBest from './DisplayPersonalBest';
import { connect } from 'react-redux';
import '../App.css';

const Header = (props) => {
	if (props.gameStarted) { return (
		<div className="header">
			<div className="header-title"><h2>Word Wolf</h2></div>
			<DisplayPersonalBest key={props.personalBest + 1} />
			<Timer />
			<PointsDisplay key={props.points} />
		</div>

		);
} else {
	return (
		<div></div>
		);
}
};

const mapStateToProps = state => {
	return { points: state.points,
		gameStarted: state.gameStarted,
		personalBest: state.personalBest
			 }
	};

export default connect(mapStateToProps, {})(Header);