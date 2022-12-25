import {DictationState} from "./TypeDefs";
import {FN_NOTHING} from "../../general/GeneralValues";
import {ACTION} from "../../general/GeneralTypes";

export const dictationInitialState: DictationState = {
	questions: [],
	addQuestion: FN_NOTHING,
	modQuestion: FN_NOTHING,

	setMode: FN_NOTHING
}

export const dictationReducer = (value: DictationState, action: ACTION): DictationState => {
	switch(action.type) {
		case 'ADD_QUESTION':
			return {
				...value,
				questions: [...value.questions, action.payload]
			};
		case 'MOD_QUESTION':
			const questions = value.questions;
			questions[action.meta] = action.payload;
			return {
				...value,
				questions: [...questions]
			};
		case 'SET_MODE':
			return { ...value, mode: action.payload }
		default:
			return value;
	}
}