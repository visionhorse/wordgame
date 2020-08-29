export default (state=null, action) => {
	switch (action.type) {
		case 'GAME_START':
			return { ...state, gameStarted: action.payload }
			default:
				return state;
	}


}
