
export default (state='', action) => {
	switch (action.type) {
		case 'ENTERED_ANSWER':
			return { ...state, enteredAnswer: action.payload  };
			default:
				return state;
	}


}
