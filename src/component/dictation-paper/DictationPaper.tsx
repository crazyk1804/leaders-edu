import React, {useRef} from 'react';
import {Box, Paper, Typography} from "@mui/material";
import {BoxedWords} from "./BoxedWords";

interface Props {
	questions: string[],
	mode?: string
}

export const DictationPaper = ({ questions, mode }: Props) => {
	const width = useRef<number>(12);

	const getDictationLines = (): Array<Array<string>> => {
		const lines: Array<Array<string>> = [[]];

		questions.forEach((question, ix) => {
			let line = lines[lines.length-1];
			const lineLength = line.reduce((l, x) => l + x.length, 0) + question.length;
			if(lineLength > width.current) lines.push(line = []);
			line.push(question);
		})

		return lines;
	}

	return (
		<Paper variant="outlined" sx={{p:3}}>
			{getDictationLines().map((line, ix) => {
				return (<div key={`question-box-${ix}`}>
					<Box sx={{display: 'flex', justifyContent: 'space-between', mb: 2}}>
						{line.map((word, wix) => (
							<BoxedWords key={`line-word-${wix}`} word={word} length={word.length} mode={mode}/>
						))}
					</Box>
					<Box sx={{display: 'flex', justifyContent: 'space-between', mb: 2}}>
						{line.map((word, wix) => (
							<BoxedWords key={`line-word-${wix}`} word={Array(word.length).fill(' ').join('')} length={word.length} mode={mode}/>
						))}
					</Box>
					<Box sx={{display: 'flex', justifyContent: 'space-between', mb: 2}}>
						{line.map((word, wix) => (
							<BoxedWords key={`line-word-${wix}`} word={Array(word.length).fill(' ').join('')} length={word.length} mode={mode}/>
						))}
					</Box>
					<Box sx={{display: 'flex', justifyContent: 'space-between', mb: 2}}>
						{line.map((word, wix) => (
							<BoxedWords key={`line-word-${wix}`} word={Array(word.length).fill(' ').join('')} length={word.length} mode={mode}/>
						))}
					</Box>
				</div>
				)
			})}
		</Paper>
	)
}