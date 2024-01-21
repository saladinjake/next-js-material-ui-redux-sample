'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import Slide1 from '../../../../public/assets/images/1.jpg'
import Slide2 from '../../../../public/assets/images/2.jpg'
import Slide3 from '../../../../public/assets/images/3.jpg'
import Slide4 from '../../../../public/assets/images/4.jpg'
import Paper from '@mui/material/Paper'
import Image from 'next/image'

import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
const Item = styled(Paper)(({ theme }) => ({
  textAlign: 'center',
  color: theme.palette.text.secondary,
  height: '100%',
  boxShadow: 'none',
}))

const SlideOne = () => {
  return (
    <Box gridColumn="span 4" sx={{ height: '100%' }}>
      <Item sx={{ position: 'relative' }}>
        <Image
          src={Slide1}
          alt="Some text"
          style={{ width: '100%', height: 'auto' }}
        />
        <Box position="absolute" top="24px" left="24px">
          <Typography
            variant="subtitle2"
            fontWeight={700}
            textAlign="left"
            color="#2DC071"
          >
            5 items
          </Typography>
          <Typography
            variant="h1"
            fontSize="2.5rem"
            fontWeight={700}
            className="color-main"
          >
            Furniture
          </Typography>

          <Typography
            variant="subtitle2"
            className="color-main"
            fontWeight={700}
            textAlign="left"
          >
            Read More
          </Typography>
        </Box>
      </Item>
    </Box>
  )
}

const SlideTwo = () => {
  return (
    <Box gridColumn="span 12">
      <Item sx={{ position: 'relative' }}>
        <Image
          src={Slide2}
          alt="Some text"
          style={{ width: '100%', height: 'auto' }}
        />
        <Box position="absolute" top="24px" left="24px">
          <Typography
            variant="subtitle2"
            fontWeight={700}
            textAlign="left"
            color="#2DC071"
          >
            5 items
          </Typography>
          <Typography
            variant="h1"
            fontSize="1.5rem"
            fontWeight={700}
            className="color-main"
          >
            Furniture
          </Typography>

          <Typography
            variant="subtitle2"
            className="color-main"
            fontWeight={700}
            textAlign="left"
          >
            Read More
          </Typography>
        </Box>
      </Item>
    </Box>
  )
}

const SlideThree = () => {
  return (
    <Box gridColumn="span 6">
      <Item sx={{ position: 'relative' }}>
        <Image
          src={Slide3}
          alt="Some text"
          style={{ width: '100%', height: 'auto' }}
        />
        <Box position="absolute" top="24px" left="24px">
          <Typography
            variant="subtitle2"
            fontWeight={700}
            textAlign="left"
            color="#2DC071"
          >
            5 items
          </Typography>
          <Typography
            variant="h1"
            fontSize="1.5rem"
            fontWeight={700}
            className="color-main"
          >
            Furniture
          </Typography>

          <Typography
            variant="subtitle2"
            className="color-main"
            fontWeight={700}
            textAlign="left"
          >
            Read More
          </Typography>
        </Box>
      </Item>
    </Box>
  )
}

const SlideFour = () => {
  return (
    <Box gridColumn="span 6">
      <Item sx={{ position: 'relative' }}>
        <Image
          src={Slide4}
          alt="Some text"
          style={{ width: '100%', height: 'auto' }}
        />
        <Box position="absolute" top="24px" left="24px">
          <Typography
            variant="subtitle2"
            fontWeight={700}
            textAlign="left"
            color="#2DC071"
          >
            5 items
          </Typography>
          <Typography
            variant="h1"
            fontSize="1.5rem"
            fontWeight={700}
            className="color-main"
          >
            Furniture
          </Typography>

          <Typography
            variant="subtitle2"
            className="color-main"
            fontWeight={700}
            textAlign="left"
          >
            Read More
          </Typography>
        </Box>
      </Item>
    </Box>
  )
}

const Hero = ()  =>{
  return (
   <>
      <SlideOne />
      <Box gridColumn="span 6">
        <Box sx={{ width: 1 }}>
          <Box
         
            gap={1}
            sx={{ display: { xs: 'block', md: 'grid' } }}
               gridTemplateColumns="repeat(12, 1fr)"
          >
            <SlideTwo />
            <SlideThree />

            <SlideFour />
          </Box>
        </Box>
      </Box>
      </>
      
  )
}

export default Hero
