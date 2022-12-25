import React, {SyntheticEvent, useContext, useEffect, useState} from 'react';
import {
	Box, Checkbox,
	Divider,
	Drawer, FormControlLabel,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	TextField,
	Toolbar
} from "@mui/material";
import {CheckBox, Mail as MailIcon, MoveToInbox as InboxIcon} from "@mui/icons-material";
import Typography from "@mui/material/Typography";
import {DictationContext} from "../../context/dictation/DictationContext";

interface Props {
	questions: string[]
	addQuestion: (question: string) => void
	modQuestion: (question: string, ix: number) => void
	width?: number
	modeChangeHandler: (mode: string) => void
}

export const DictationPresenter = ({questions, addQuestion, modQuestion, width, modeChangeHandler}: Props) => {
	const drawerWidth = width || 240;

	useEffect(() => {
		questions.forEach((txt, ix) => {
			const txtInput = document.getElementById(`question-${ix}`) as HTMLInputElement;
			txtInput.value = txt;
		})
	}, [questions])

	const addHandler = (e: React.KeyboardEvent) => {
		const target = e.target as HTMLInputElement;

		if (e.key !== 'Enter') return;
		if (e.nativeEvent.isComposing === true) return;
		if (!target.value) return;

		addQuestion(target.value);
		target.value = '';
	}

	const modHandler = (e: React.ChangeEvent) => {
		const target = e.target as HTMLInputElement;

	}

	const questionFocusHandler = (e: React.FocusEvent) => {
		const target = e.target as HTMLElement;
		const fieldRoot = target.parentElement?.parentElement as HTMLDivElement;
		fieldRoot.classList.remove('clickable-input');
	}

	const questionKeyDownHandler = (e: React.KeyboardEvent) => {
		const target = e.target as HTMLInputElement;
		if (e.key !== 'Enter') return;
		if (e.nativeEvent.isComposing === true) return;
		target.blur();
	}

	const questionFocusoutHandler = (e: React.FocusEvent, ix: number) => {
		const target = e.target as HTMLInputElement;
		modQuestion(target.value, ix);
		const fieldRoot = target.parentElement?.parentElement as HTMLDivElement;
		fieldRoot.classList.add('clickable-input');
	}

	console.log(questions);
	return (
		<Drawer
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				'& .MuiDrawer-paper': {
					width: drawerWidth,
					boxSizing: 'border-box',
				},
			}}
			variant="permanent"
			anchor="left"
		>
			<Toolbar/>
			<Divider/>
			<Box sx={{display: 'flex'}}>
				<Typography variant="h6" gutterBottom sx={{flex: 1, p: 1, mb: 0}}>
					<strong>문제 만들기</strong>
				</Typography>
				<FormControlLabel
					label="영어"
					control={
						<Checkbox onChange={(e) => {
							modeChangeHandler(e.target.checked ? 'eng' : '')
						}}/>
					}
				/>
			</Box>
			<Divider/>
			<List>
				<ListItem sx={{justifyContent: 'center'}}>
					<TextField label="단어를 입력 하세요" onKeyDown={addHandler}/>
				</ListItem>
				{questions.map((text, index) => (
					<ListItem key={`${text}-${index}`} sx={{justifyContent: 'center'}}>
						<TextField id={`question-${index}`} className="clickable-input"
								   onFocus={questionFocusHandler}
								   onKeyDown={questionKeyDownHandler}
								   onBlur={e => questionFocusoutHandler(e, index)}
						/>
					</ListItem>
				))}
			</List>
		</Drawer>
	)
}