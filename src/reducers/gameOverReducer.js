export default (state=null, action) => {
	switch (action.type) {
		case 'GAME_OVER_STATUS':
			return action.payload
			default:
				return state;
	}


}
