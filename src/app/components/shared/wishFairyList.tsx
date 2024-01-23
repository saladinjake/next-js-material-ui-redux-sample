import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import IconButton from '@mui/material/IconButton'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import { removeProductFromWishlistAction } from '@/app/lib/redux/helpers/wishListActionReducers'
import { useDispatch } from 'react-redux'
import Image from 'next/image'
import { BlockTile, WishTemplate } from '../basic'

interface IWished {
  id: any;
  image: string;
  title: string;
}

const WishFairyBag = ({ id, image, title }: IWished) => {
  const dispatch = useDispatch<any>()

  const handleDispatch = () => dispatch(removeProductFromWishlistAction(id))
  return (
    <>
      <WishTemplate>
        <Box gridColumn="span 4">
          <Image
            src={image}
            alt="Some text"
            width="200"
            height="200"
            style={{ width: '100%', height: 'auto' }}
          />
        </Box>
        <Box gridColumn="span 5">
          <BlockTile
            variant="subtitle2"
            fontWeight={400}
            color="#252B42"
            fontSize="16px"
            marginBottom={'14px'}
            title={title}
          />
        </Box>
        <Box gridColumn="span 3">
          <Button
            onClick={() => handleDispatch()}
            endIcon={<DeleteIcon />}
            variant="outlined"
            size="small"
          >
            Remove
          </Button>
        </Box>
      </WishTemplate>
    </>
  )
}

export default WishFairyBag
