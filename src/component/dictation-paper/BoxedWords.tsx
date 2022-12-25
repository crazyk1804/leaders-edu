import React from 'react';
import './BoxedWords.scss';

interface Props {
	length: number,
	word?: string,
	mode?: string
}

export const BoxedWords = ({length, word, mode}: Props) => {
	const letters = word ? Array.from(word) : Array(length).fill('');
	return (
		<div className={`question-word-wrapper ${mode || ''}`}>
			{letters.map((letter, lix) => {
				return <div className="question-letter" key={`question-letter-${lix}`}>
					<label>{letter}</label>
				</div>
			})}
		</div>
	)
}