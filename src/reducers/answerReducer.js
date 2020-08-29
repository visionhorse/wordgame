import { nextWord } from '../actions';

export default (state='', action) => {
	switch (action.type) {
		case 'ENTERED_ANSWER':
			nextWord();
			return { ...state, enteredAnswer: action.payload,  }
			default:
				return state;
	}


}
