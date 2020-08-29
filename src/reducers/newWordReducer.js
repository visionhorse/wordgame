export default (state={}, action={}) => {
	switch (action.type) {
		case 'NEW_WORD':
			return { ...state, word: `${action.payload}` }
			default:
				return state;
	}
};