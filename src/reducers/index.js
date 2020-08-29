import { combineReducers } from 'redux';
import newWordReducer from './newWordReducer';
import startGameReducer from './startGameReducer';
import textChangeReducer from './textChangeReducer';
import answerReducer from './answerReducer';
import scrambleWordReducer from './scrambleWordReducer';
import wordLengthReducer from './wordLengthReducer';
import pointsReducer from './pointsReducer';

export default combineReducers({
	currentWord: newWordReducer,
	gameStarted: startGameReducer,
	textChange: textChangeReducer,
	enteredAnswer: answerReducer,
	scrambledWord: scrambleWordReducer,
	wordLength: wordLengthReducer,
	points: pointsReducer
});