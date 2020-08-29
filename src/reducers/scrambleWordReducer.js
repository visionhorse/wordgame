export default (state='', action) => {
	switch (action.type) {
		case 'SCRAMBLE_WORD':
			return { ...state, scrambledWord: action.payload }
			default:
				return state;
	}


}
