import React from 'react';
import { connect } from 'react-redux';
import '../App.css';


const ActualWord = (props) => {


	return (
				<h1 className="fade" key={props.scrambledWord.scrambledWord}>{props.scrambledWord.scrambledWord}</h1>
		);
};

const mapStateToProps = state => {
	return { 
			scrambledWord: state.scrambledWord,
			 }
	};

export default connect(mapStateToProps, {})(ActualWord);