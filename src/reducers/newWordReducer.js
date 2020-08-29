export default (state={}, action={}) => {
	switch (action.type) {
		case 'NEW_WORD':
			return { ...state, ...action.payload }
			default:
				return state;
	}
};