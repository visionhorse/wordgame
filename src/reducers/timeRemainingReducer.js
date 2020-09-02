export default (state=null, action) => {
	switch (action.type) {
		case 'TIME_REMAINING':
			return action.payload;
			default:
				return state;
	}


}