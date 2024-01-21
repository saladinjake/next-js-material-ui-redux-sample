import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import RandomUser from '../../../../public/assets/images/random_user.png'
import Image from 'next/image'

import Rating from '@mui/material/Rating'
import { BlockTile } from '../basic'

import photoalbum1 from '../../../../public/assets/images/albums/1.png'
import photoalbum2 from '../../../../public/assets/images/albums/2.png'
import photoalbum3 from '../../../../public/assets/images/albums/3.png'
import photoalbum4 from '../../../../public/assets/images/albums/4.png'
import photoalbum5 from '../../../../public/assets/images/albums/5.png'
import photoalbum6 from '../../../../public/assets/images/albums/6.png'
import photoalbum7 from '../../../../public/assets/images/albums/7.png'
import photoalbum8 from '../../../../public/assets/images/albums/8.png'
import photoalbum9 from '../../../../public/assets/images/albums/9.png'
const SlateTalks = () => {
  const photoAlbums = [
    photoalbum1,
    photoalbum2,
    photoalbum3,
    photoalbum4,
    photoalbum5,
    photoalbum6,
    photoalbum7,
    photoalbum8,
    photoalbum9,
  ]
  return (
    <Box
      sx={{ display: { xs: 'block', md: 'grid' }, mt: '80px' }}
      gridTemplateColumns="repeat(12, 1fr)"
      gap={1}
    >
      <Box gridColumn="span 6" sx={{ height: '100%' }}>
        <>
          <Box sx={{ mt: '80px', mb: '24px', mx: '56px', textAlign: 'center' }}>
            <BlockTile
              variant="subtitle2"
              fontWeight={700}
              textAlign="center"
              color="#252B42"
              fontSize="24px"
              title="What they say about us"
            />

            <Image
              src={RandomUser}
              alt="Random User"
              style={{
                margin: 'auto',
                display: 'block',
                marginTop: '58px',
                marginBottom: '20px',
              }}
            />
            <Box sx={{ marginBottom: '20px' }}>
              <Rating name="read-only" value={4} readOnly />
            </Box>
            <BlockTile
              variant="subtitle2"
              fontWeight={700}
              textAlign="center"
              color="#737373"
              fontSize="14px"
              marginBottom={'20px'}
              title="Slate helps you see how many more days you need to work to reach your financial goal."
            />

            <BlockTile
              variant="subtitle2"
              fontWeight={700}
              textAlign="center"
              color="#23A6F0"
              fontSize="14px"
              title="Regina Miles"
            />

            <BlockTile
              variant="subtitle2"
              fontWeight={700}
              textAlign="center"
              color="#252B42"
              fontSize="14px"
              title="Designer"
            />
          </Box>
        </>
      </Box>
      <Box gridColumn="span 6" sx={{ height: '100%' }}>
        <Box
          sx={{ display: 'grid', mt: '80px' }}
          gridTemplateColumns="repeat(12, 1fr)"
          gap={1}
          marginBottom={'128px'}
        >
          {photoAlbums?.map(album => {
            return (
              <Box gridColumn="span 4" sx={{ height: '100%' }}>
                <Image src={album} alt="clock icon" />
              </Box>
            )
          })}
        </Box>
      </Box>
    </Box>
  )
}

export default SlateTalks
