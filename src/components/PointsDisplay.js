import React from 'react';
import { connect } from 'react-redux';
import { Animated } from 'react-animated-css';
import '../App.css';

const PointsDisplay = (props) => {
	
	return (
		<Animated animationIn="pulse" isVisible={true}>
		<Animated animationIn="fadeIn" isVisible={true}>

		<div className="header-items">
			<h2 className="greenFade">{props.points}</h2>
		</div>
		</Animated></Animated>
		)
};

const mapStateToProps = state => {
	return { points: state.points
			 }
	};

export default connect(mapStateToProps, {})(PointsDisplay);