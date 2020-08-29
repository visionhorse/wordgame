import React from 'react';
import { connect } from 'react-redux';
import '../App.css';

const PointsDisplay = (props) => {
	
	return (
		<div>
			<h2>{props.points}</h2>
		</div>
		)
};

const mapStateToProps = state => {
	return { points: state.points
			 }
	};

export default connect(mapStateToProps, {})(PointsDisplay);