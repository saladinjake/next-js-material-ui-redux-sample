import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import IconButton from '@mui/material/IconButton'

import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import {
   removeProductItemAction,
  decreaseProductQuantityAction,
  increaseProductQuantityAction,
 
} from '@/app/lib/redux/helpers/cartActionReducer'
import { useDispatch } from 'react-redux'
import Image from 'next/image'

import { BlockTile , ShoppingCartWrapper} from '../basic'

interface ICartProps {
  image: string;
  title: string;
  price: string;
  quantity: number;
  id: any;
}



const windowShopper = ({
  id,
  image,
  title,
  price,
  quantity = 0,
}: ICartProps) => {
  const dispatch = useDispatch<any>()

  const handleIncrementDispatch = () => dispatch(increaseProductQuantityAction(id))
  const handleDecrementDispatch = () => dispatch(decreaseProductQuantityAction(id))
  const handleRemoveDispatch = () => dispatch(removeProductItemAction(id))
  return (
    <>
     <ShoppingCartWrapper>
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

          <BlockTile
            variant="subtitle2"
            fontWeight={700}
            color="#252B42"
            fontSize="24px"
            marginBottom={'14px'}
            title={price}
          />
        </Box>
        <Box gridColumn="span 3">
          <Box display={'flex'}>
            <IconButton
              onClick={() => handleDecrementDispatch()}
              aria-label="delete"
              color="primary"
            >
              <RemoveIcon />
            </IconButton>
            <BlockTile
              variant="subtitle2"
              fontWeight={400}
              color="#252B42"
              fontSize="16px"
              margin={'12px'}
              title={"" +   quantity}
            />

            <IconButton
              onClick={() => handleIncrementDispatch()}
              aria-label="add"
              color="primary"
            >
              <AddIcon />
            </IconButton>
          </Box>
          <Button
            onClick={() => handleRemoveDispatch()}
            endIcon={<DeleteIcon />}
            variant="outlined"
            size="small"
          >
            Remove
          </Button>
        </Box>
      </ShoppingCartWrapper>
    </>
  )
}

export default windowShopper
