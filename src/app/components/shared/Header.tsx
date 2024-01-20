"use client";
import AppBar from '@mui/material/AppBar'
import styled from 'styled-components'
import Typography from '@mui/material/Typography'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import MailOutlineIcon from '@mui/icons-material/MailOutline'
import InstagramIcon from '@mui/icons-material/Instagram'
import YouTubeIcon from '@mui/icons-material/YouTube'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import headerStyles from "./header.module.css";
import Box from "@mui/material/Box";
import NavBar from "./Navbar"

const Styles ={

}


const staticText ="Follow Us and get a chance to win 80% off"
const PhoneNumber = () => {
	return (
		<Typography
			variant="subtitle2"
			display="block"
			fontWeight={700}
			marginRight={'24px'}
		>
			<a href="tel:(222) 333-0000" className="icon_helper">
				<LocalPhoneIcon sx={{ marginRight: '6px' }} />
				(225) 555-0118
			</a>
		</Typography>
	)
}

const Email = () => {
	return (
		<Typography variant="subtitle2" display="block" fontWeight={700}>
			<a href="tel:(222) 333-0000" className="icon_helper">
				<MailOutlineIcon sx={{ marginRight: '6px' }} />
				miller.bingo@example.com
			</a>
		</Typography>
	)
}

const SocialMedia = () => {
	return (
		<Typography variant="subtitle2" display="block" fontWeight={700}>
			<p className="icon_helper">
				Follow Us:
				<InstagramIcon sx={{ 
					marginLeft: '10px', 
				marginRight: '10px' }} />{' '}
				<YouTubeIcon sx={{ marginRight: '10px' }} />{' '}
				<FacebookIcon sx={{ marginRight: '10px' }} /> <TwitterIcon />
			</p>
		</Typography>
	)
}

const Header = () => {
	return (
		<AppBar sx={{ boxShadow: 'none' }} position="fixed">
			<Box
				sx={{
					display: { xs: 'none', md: 'flex',  lg:'flex'},
				}}
			>
			   <div className={headerStyles.application_header}>
					<div className={headerStyles.flexify}>
						<PhoneNumber />
						<Email />
					</div>
					<div>
						<Typography variant="subtitle2" display="block" fontWeight={700}>
							<p>{staticText}</p>
						</Typography>
					</div>
					<div>
						<SocialMedia />
					</div>
			  </div>
			</Box>
			<NavBar/>
		</AppBar>
	)
}


export default Header
