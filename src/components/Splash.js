import React from 'react';
import { connect } from 'react-redux';
import { nextWord, startButtonClicked } from '../actions';
import './WordDisplay.css';

const Splash = (props) => {
	const onClick = () => {
     props.startButtonClicked(true);
     
     props.nextWord();
     // props.scrambleWordInit();
    }

	return (
		<div className="word-container">
				<h1>Word Wolf</h1>
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


export default connect(mapStateToProps, { startButtonClicked, nextWord })(Splash);