export default (state='', action) => {
	switch (action.type) {
		case 'TEXT_CHANGE':
			return { ...state, enteredText: action.payload }
			default:
				return state;
	}


}
