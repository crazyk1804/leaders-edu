import React from 'react';
import {Box, Container} from "@mui/material";
import {AppHeader} from "../../../component/base/app-header/AppHeader";
import {Content1} from "../../test/Content1";
import {Outlet} from "react-router";
import {ThemeProvider} from "@mui/material/styles";
import {app_theme} from "../../../config/style";

export const LayoutMain = () => {
	return (
		<ThemeProvider theme={app_theme}>
			<Box className="row header">
				<AppHeader title="리더스 영수학원 EDU-SYSTEM"/>
				{/*<Content1/>*/}
			</Box>
			<Container disableGutters maxWidth={false} component="main" className="row content"
					   sx={{marginTop: '8px', paddingLeft: '8px', paddingRight: '8px'}}>
				<Outlet/>
			</Container>
		</ThemeProvider>
	)
}