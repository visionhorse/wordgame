export default (state=4, action) => {
	switch (action.type) {
		case 'WORD_LENGTH':
			return action.payload;
			default:
				return state;
	}


}