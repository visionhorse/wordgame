export default (state=null, action) => {
	switch (action.type) {
		case 'NEW_POINTS':
			return action.payload;
			default:
				return state;
	}


}