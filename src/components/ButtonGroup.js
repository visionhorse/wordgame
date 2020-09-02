import React from 'react';
import { connect } from 'react-redux';
import { setWordLength, nextWord } from '../actions';

const ButtonGroup = (props) => {

	// const [buttonPressed, setbuttonPressed] = useState(4);

	const onClick = button => {
		// setbuttonPressed(button);
		props.setWordLength(button);
		props.nextWord();
	}

	return (
			
			<div className="ui buttons">
  				<button className="ui blue basic button" onClick={() => onClick(4)} id='4'>4</button>
  				<button className="ui blue basic button" onClick={() => onClick(5)} id='5'>5</button>
  				<button className="ui blue basic button" onClick={() => onClick(6)} id='6'>6</button>
  				<button className="ui blue basic button" onClick={() => onClick(7)} id='7'>7</button>
  				<button className="ui blue basic button" onClick={() => onClick(8)} id='8'>8</button>
			</div>
			
		
		);
};

export default connect(null, { setWordLength, nextWord })(ButtonGroup);