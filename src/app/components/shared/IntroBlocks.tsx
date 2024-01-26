import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import RandomUser from '../../../../public/assets/images/random_user.png'
import Image from 'next/image'

import Rating from '@mui/material/Rating'
import { BlockTile } from '../basic'
const IntroBlocks = () =>{
	return (
     <>
      <BlockTile
          variant="subtitle2"
          fontWeight={400}
          textAlign="center"
          color="#737373"
          fontSize="20px"
          title="Featured Products"
        />
         
        <Typography
          variant="subtitle2"
          fontWeight={700}
          textAlign="center"
          color="#252B42"
          fontSize="24px"
          title="BEST SELLERS PRODUCTS"
        />
      
        <Typography
          variant="subtitle2"
          fontWeight={400}
          textAlign="center"
          color="#737373"
          fontSize="14px"
          title=" Problems trying to resolve the conflict between"
        />
       

     </>
	)
}

export default IntroBlocks