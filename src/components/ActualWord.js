import React from 'react';
import { connect } from 'react-redux';
import '../App.css';
import { Animated } from 'react-animated-css';

const ActualWord = (props) => {


	return (
		<Animated animationIn="fadeIn" animationOut="fadeOutDown" isVisible={true}>
				<h1 key={props.scrambledWord.scrambledWord}>{props.scrambledWord.scrambledWord}</h1>
		</Animated>
		);
};

const mapStateToProps = state => {
	return { 
			scrambledWord: state.scrambledWord,
			 }
	};

export default connect(mapStateToProps, {})(ActualWord);