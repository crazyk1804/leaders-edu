import React from 'react';
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import AppBar from "@mui/material/AppBar";
import {Link} from "@mui/material";

interface Props {
	title: string
}

export const AppHeader = ({title}: Props) => {
	return (
		<AppBar
			position="absolute"
			color="default"
			elevation={0}
			sx={{
				position: 'relative',
				borderBottom: (t) => `1px solid ${t.palette.divider}`,
				zIndex: (theme) => theme.zIndex.drawer + 1,
				fontWeight: 'bold'
			}}
		>
			<Toolbar>
				<Typography variant="h6" color="inherit" noWrap
							sx={{flexGrow: 1}}
				>
					<strong>{title}</strong>
				</Typography>

				<nav>
					<Link
						variant="button"
						color="text.primary"
						href="/dicpaper"
						sx={{my: 1, mx: 1.5}}
					>
						받아쓰기
					</Link>
				</nav>
			</Toolbar>
		</AppBar>
	)
}