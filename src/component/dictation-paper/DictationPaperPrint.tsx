import React, {useContext, useEffect, useState} from 'react';
import {DictationContext} from "../../context/dictation/DictationContext";
import {DictationPaper} from "./DictationPaper";
import {Box} from "@mui/material";
import { useSearchParams } from 'react-router-dom';

export const DictationPaperPrint = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const [questions] = useState(searchParams.get('questions')?.split(',') || []);
	const [mode] = useState(searchParams.get('mode'));

	return (<Box sx={{p:0}}>
		<DictationPaper questions={questions} mode={mode || ''}/>
	</Box>);
}