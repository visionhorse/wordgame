export default (state=null, action) => {
	switch (action.type) {
		case 'PERSONAL_BEST':
			return action.payload;
			default:
				return state;
	}


}