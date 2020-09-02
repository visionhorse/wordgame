import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

const DisplayPersonalBest = (props) => {
	
	if (props.personalBest) {
	return (
		<div>
		

		<div className="header-items">
			<h2 className="greenFade">PB: {props.personalBest}</h2>
		</div>
		
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