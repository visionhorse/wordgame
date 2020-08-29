import { combineReducers } from 'redux';
import newWordReducer from './newWordReducer';
import startGameReducer from './startGameReducer';
import textChangeReducer from './textChangeReducer';
import answerReducer from './answerReducer';
import scrambleWordReducer from './scrambleWordReducer';
import wordLengthReducer from './wordLengthReducer';

export default combineReducers({
	currentWord: newWordReducer,
	gameStarted: startGameReducer,
	textChange: textChangeReducer,
	enteredAnswer: answerReducer,
	scrambledWord: scrambleWordReducer,
	wordLength: wordLengthReducer
});