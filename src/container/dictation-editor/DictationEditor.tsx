import React, {useContext, useRef, useState} from 'react';
import {
	Box,
	Button,
	Divider,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar
} from "@mui/material";
import {Mail as MailIcon, MoveToInbox as InboxIcon} from "@mui/icons-material";
import {DictationPresenter} from "../../component/dictation-presenter/DictationPresenter";
import {DictationContext} from "../../context/dictation/DictationContext";
import {DictationPaper} from "../../component/dictation-paper/DictationPaper";

interface Props {

}

export const DictationEditor = ({}: Props) => {
	const { questions, addQuestion, modQuestion } = useContext(DictationContext);
	const [ mode, setMode ] = useState<string>('');

	const printPaper = () => {
		window.open(`/dictation-paper-print?questions=${questions.join(',')}&mode=${mode}`);
	}

	return (<Box sx={{display: 'flex', position: 'relative'}}>
		<DictationPresenter
			questions={questions} addQuestion={addQuestion} modQuestion={modQuestion}
			modeChangeHandler={setMode}
		/>
		<Box id="dictationPaper" sx={{ flexGrow: 1 }}><DictationPaper questions={questions} mode={mode}/></Box>
		<Button variant="outlined" sx={{position: 'absolute', right: 0}} onClick={() => printPaper()}>출력하기</Button>
	</Box>)
}