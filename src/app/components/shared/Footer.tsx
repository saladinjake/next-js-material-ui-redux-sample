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
import { BlockTile } from "../basic"

const InfoText = ({ text ="" }) => (
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
    <BlockTile
      variant="subtitle2"
      fontWeight={700}
      textAlign="left"  
      color="#737373"
      fontSize="14px"
      title={text}
    />
  </Box>
)

const LogoSection = ({ height="10px" }) => {
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
      <BlockTile
        fontWeight={700}
        textAlign="left"
        variant="subtitle2"
        color="#252B42"
        fontSize="24px"
        title="Bandage"
      />
       
   
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
  linksArr=[],
  gridColumn = 'span 2',
}: {
  linksArr?: any;
  title?:string;
  gridColumn?:string;
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
        {linksArr?.map( (item: any) => {
          return (
            <ListItem key={(new Date()).getMilliseconds()} sx={{ paddingLeft: 0 }}>
              <BlockTile
                textAlign="left"
                color="#737373"
                fontSize="14px"
                variant="subtitle2"
                fontWeight={700}
                title={item}
              />
           
           
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
      <BlockTile
        textAlign="left"
        color="#252B42"
        fontSize="16px"
        variant="subtitle2"
        fontWeight={700}
        title={"Get In tOUCH"}
      />
        
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
      <BlockTile
        variant="subtitle2"
        fontWeight={400}
        textAlign="left"
        color="#737373"
        fontSize="12px"
        marginTop={'8px'}
        title='Lore imp sum dolor Amit'
      />
        
     
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

        <BlockTile variant="subtitle2"
          fontWeight={700}
          textAlign="center"
          color="#23A6F0"
          fontSize="14px"
          marginBottom={"30px"}
          title="Designing Better Experience"
          />
       
        <BlockTile
          variant="subtitle2"
          fontWeight={700}
          textAlign="center"
          color="#252B42"
          fontSize="40px"
          marginBottom={"30px"}
          title={"Problems trying to resolve the conflict between"}
        />
          
       
        <BlockTile
          variant="subtitle2"
          fontWeight={400}
          textAlign="center"
          color="#737373"
          fontSize="14px"
          marginBottom={"30px"}
          title="Problems trying to resolve the conflict between the two major realms of Classical physics:"
        />
          
    
        <BlockTile
          variant="subtitle2"
          fontWeight={700}
          textAlign="center"
          color="#23856D"
          fontSize="24px"
          marginBottom={"30px"}
          title=" $16.48"
        />
         
      
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
