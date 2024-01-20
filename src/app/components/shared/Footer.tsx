import React from 'react'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import { FormGroup } from '@mui/material'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import List from '@mui/material/List'
import { FacebookSvg, InstagramSvg, TwitterSvg } from '@/app/components/svg/svg'

const InfoText = ({ text }) => (
  <Box
    sx={{
      minHeight: '74px',
      display: 'flex',
      backgroundColor: '#FAFAFA',
      justifyContent: { xs: 'center', md: 'space-between' },
      flexFlow: { xs: 'column', md: 'row' },
      alignItems: { xs: 'start', md: 'center' },
      paddingX: { xs: '45px', md: '140px' },
    }}
  >
    <Typography
      variant="subtitle2"
      fontWeight={700}
      textAlign="left"
      color="#737373"
      fontSize="14px"
    >
      {text}
    </Typography>
  </Box>
)

const LogoSection = ({ height }) => {
  const logoSectionStyle = {
    minHeight: height,
    display: 'flex',
    backgroundColor: '#FAFAFA',
    justifyContent: { xs: 'center', md: 'space-between' },
    flexFlow: { xs: 'column', md: 'row' },
    alignItems: { xs: 'start', md: 'center' },
    paddingX: { xs: '45px', md: '140px' },
    borderBottom: '1px solid #FAFAFA',
  }
  return (
    <Box sx={logoSectionStyle}>
      <Typography
        fontWeight={700}
        textAlign="left"
        variant="subtitle2"
        color="#252B42"
        fontSize="24px"
      >
        Bandage
      </Typography>
      <Box>
        <IconButton color="primary" aria-label="add to shopping cart">
          {/*<FacebookSvg />*/}
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart">
          {/*<InstagramSvg />*/}
        </IconButton>
        <IconButton color="primary" aria-label="add to shopping cart">
          {/*<TwitterSvg />*/}
        </IconButton>
      </Box>
    </Box>
  )
}

const SitemapDrawer = ({
  title = 'Company Info',
  linksArr,
  gridColumn = 'span 2',
}) => {
  return (
    <Box gridColumn={gridColumn} sx={{ height: '100%' }}>
      <Typography
        textAlign="left"
        color="#252B42"
        fontSize="16px"
        variant="subtitle2"
        fontWeight={700}
      >
        {title}
      </Typography>
      <List dense={false}>
        {linksArr?.map(item => {
          return (
            <ListItem key={new Date().now} sx={{ paddingLeft: 0 }}>
              <Typography
                textAlign="left"
                color="#737373"
                fontSize="14px"
                variant="subtitle2"
                fontWeight={700}
              >
                {item}
              </Typography>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}

const StayInTouch = () => {
  return (
    <Box gridColumn="span 4" sx={{ height: '100%' }}>
      <Typography
        textAlign="left"
        color="#252B42"
        fontSize="16px"
        variant="subtitle2"
        fontWeight={700}
      >
        Get In Touch
      </Typography>
      <Box sx={{ display: 'flex', marginTop: '20px' }}>
        <TextField variant="outlined" placeholder="Your Email" />
        <Button
          sx={{ backgroundColor: '#23a6f0', color: 'white' }}
          variant="contained"
          disableElevation
        >
          Subscribe
        </Button>
      </Box>
      <Typography
        variant="subtitle2"
        fontWeight={400}
        textAlign="left"
        color="#737373"
        fontSize="12px"
        marginTop={'8px'}
      >
        Lore imp sum dolor Amit
      </Typography>
    </Box>
  )
}
export const DetailInfo = () => {
 
  return (
    <Box
      style={{
        backgroundImage: 'url(assets/images/banner1.png)',
        backgroundSize: 'cover',
      }}
      sx={{
        minHeight: { xs: '712px', md: '620px' },
        display: 'flex',
        backgroundPosition: { xs: '55% bottom', md: '50% bottom' },
      }}
    >
      <Box
        sx={{
          display: "block",
          width: { xs: "90%", md: "38%" },
          margin: "auto",
         
        }}
      >
        <Typography
          variant="subtitle2"
          fontWeight={700}
          textAlign="center"
          color="#23A6F0"
          fontSize="14px"
          marginBottom={"30px"}
        >
          Designing Better Experience
        </Typography>
        <Typography
          variant="subtitle2"
          fontWeight={700}
          textAlign="center"
          color="#252B42"
          fontSize="40px"
          marginBottom={"30px"}
        >
          Problems trying to resolve the conflict between
        </Typography>
        <Typography
          variant="subtitle2"
          fontWeight={400}
          textAlign="center"
          color="#737373"
          fontSize="14px"
          marginBottom={"30px"}
        >
          Problems trying to resolve the conflict between the two major realms
          of Classical physics:
        </Typography>
        <Typography
          variant="subtitle2"
          fontWeight={700}
          textAlign="center"
          color="#23856D"
          fontSize="24px"
          marginBottom={"30px"}
        >
          $16.48
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#23A6F0",
            boxShadow: "none",
            margin: "auto",
            display: "block",
          }}
        >
          ADD YOUR CALL TO ACTION
        </Button>
      </Box>
    </Box>
  )
}
const Footer = ({ height = '121px' }) => {
  const companyInfo = ['About Us', 'Carrier', 'We are hiring', 'Blog']
  const business = [
    'Business Marketing',
    'User Analytic',
    'Live Chat',
    'Unlimited Support',
  ]
  const resource = ['IOS & Android', 'Watch a Demo', 'Customers', 'API']
  const staticText = ' Made With Love By Finland All Right Reserved.'
  const inTouch = ['Get In touch']

  return (
    <>
    
      <LogoSection height={height} />
      <Box
        sx={{
          display: { xs: 'block', md: 'grid' },
          mt: '50px',
          paddingX: { xs: '45px', md: '140px' },
          paddingRight: { xs: '45px', md: '0' },
          marginBottom: '50px',
        }}
        gridTemplateColumns="repeat(12, 1fr)"
        gap={1}
      >
        <SitemapDrawer linksArr={companyInfo} />
        <SitemapDrawer title={'legal'} linksArr={companyInfo} />
        <SitemapDrawer title={'Features'} linksArr={business} />
        <SitemapDrawer title={'Resource'} linksArr={resource} />

        <StayInTouch />
      </Box>
      <InfoText text={staticText} />
    </>
  )
}

export default Footer
