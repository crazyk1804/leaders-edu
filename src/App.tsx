import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Checkout from "./mui/template/checkout/Checkout";
import {Box, CssBaseline} from "@mui/material";
import {BrowserRouter, Route} from "react-router-dom";
import { Routes } from 'react-router';
import {PageNotFound} from "./component/base/etc/PageNotFound";
import {LayoutMain} from "./container/layout/layout-main/LayoutMain";
import {Content1} from "./container/test/Content1";
import {Content2} from "./container/test/Content2";
import {DictationEditor} from "./container/dictation-editor/DictationEditor";
import {DictationContext, DictationContextProvider} from "./context/dictation/DictationContext";
import {DictationPaper} from "./component/dictation-paper/DictationPaper";
import {DictationPaperPrint} from "./component/dictation-paper/DictationPaperPrint";

function App() {
	return (<BrowserRouter>
		<CssBaseline/>
		<Box className="app-container">
			<Routes>
				<Route path="*" element={<PageNotFound/>}/>

				<Route path="/" element={<LayoutMain/>}>
					<Route path="" element={
						<DictationContextProvider><DictationEditor/></DictationContextProvider>
					}/>
					<Route path="content1" element={<Content1/>}/>
					<Route path="content2" element={<Content2/>}/>
				</Route>
				<Route path="dictation-paper-print" element={
					<DictationContextProvider><DictationPaperPrint/></DictationContextProvider>
				}/>
				<Route path="/sample" element={<Checkout/>}/>
			</Routes>
		</Box>
		{/*<Checkout/>*/}
	</BrowserRouter>
		//
		// <div className="App">
		// 	<header className="App-header">
		// 		<img src={logo} className="App-logo" alt="logo"/>
		// 		<p>
		// 			Edit <code>src/App.tsx</code> and save to reload.
		// 		</p>
		// 		<a
		// 			className="App-link"
		// 			href="https://reactjs.org"
		// 			target="_blank"
		// 			rel="noopener noreferrer"
		// 		>
		// 			Learn React
		// 		</a>
		// 	</header>
		// </div>
	);
}

export default App;
