import React from 'react';
import { connect } from 'react-redux';
import { Animated } from 'react-animated-css';
import '../App.css';

const DisplayPersonalBest = (props) => {
	
	if (props.personalBest) {
	return (
		<div>
		<Animated animationIn="pulse" isVisible={true}>
		<Animated animationIn="fadeIn" isVisible={true}>

		<div className="header-items">
			<h2 className="greenFade">PB: {props.personalBest}</h2>
		</div>
		</Animated></Animated>
		</div>
		);
	} else {
		return (
			<div></div>
			);
	}
};

const mapStateToProps = state => {
	return { personalBest: state.personalBest
			 }
	};

export default connect(mapStateToProps, {})(DisplayPersonalBest);