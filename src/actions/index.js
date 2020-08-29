
import { fourLetterWords } from '../wordlists/fourLetterWords.js';
import { fiveLetterWords } from '../wordlists/fiveLetterWords.js';
import { sixLetterWords } from '../wordlists/sixLetterWords.js';
import { sevenLetterWords } from '../wordlists/sevenLetterWords.js';
import { eightLetterWords } from '../wordlists/eightLetterWords.js';
import _ from 'lodash';
import { store } from '../index.js';


export const nextWord = () => async (dispatch) => {
	await dispatch(getNewWord());
	dispatch(scrambleWordInit());
};


export const getNewWord = () => {
	const activeWordLength = store.getState().wordLength;
	let wordList;
	switch (activeWordLength) {
		case 4: wordList = fourLetterWords; break;
		case 5: wordList = fiveLetterWords; break;
		case 6: wordList = sixLetterWords; break;
		case 7: wordList = sevenLetterWords; break;
		case 8: wordList = eightLetterWords; break;
	}
	return {
		type: 'NEW_WORD',
		payload: _.shuffle(wordList)[0].word
	}
}

export const setWordLength = (length) => {
	return {
		type: 'WORD_LENGTH',
		payload: length
	}
}

export const scrambleWordInit = () => {
	return (dispatch, getState) => {
		const referenceWord = getState().currentWord.word;
		dispatch(scrambleWord(referenceWord));
		
	}
};

export const scrambleWord = (referenceWord) => {

	return {
		type: 'SCRAMBLE_WORD',
		payload: _.shuffle(referenceWord.split('')).join('')
	}
};


export const textChange = (textChange) => {
	return {
		type: 'TEXT_CHANGE',
		payload: textChange
	}
};

export const enterAnswer = (userText) => {
	return {
		type: 'ENTERED_ANSWER',
		payload: userText
	}
};

export const startButtonClicked = (status) => {
	return {
		type: 'GAME_START',
		payload: status
	}
}; 