import React, {createContext, ReactNode, useReducer} from 'react';
import {dictationInitialState, dictationReducer} from "./DictationReducer";

export const DictationContext = createContext(dictationInitialState);
export const DictationContextProvider = ({ children }: { children? : ReactNode}) => {
	const [value, dispatch] = useReducer(dictationReducer, dictationInitialState);

	const addQuestion = (question: string) => {
		dispatch({ type: 'ADD_QUESTION', payload: question });
	}

	const modQuestion = (question: string, ix: number) => {
		dispatch({ type: 'MOD_QUESTION', payload: question, meta: ix });
	}

	const setMode = (mode: string) => {
		dispatch({ type: 'SET_MODE', payload: mode });
	}

	return (
		<DictationContext.Provider value={{
			...value,
			addQuestion,
			modQuestion,

			setMode
		}}>{ children }</DictationContext.Provider>
	)
}