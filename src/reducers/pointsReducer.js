export default (state=0, action) => {
	switch (action.type) {
		case 'NEW_POINTS':
			return action.payload;
			default:
				return state;
	}


}