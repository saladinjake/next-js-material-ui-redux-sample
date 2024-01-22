'use client'
import React, { useEffect } from 'react'

import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import { CardActionArea } from '@mui/material'
import { BlockTile } from '../basic'

import Button from '@mui/material/Button'

import { ProductCard } from '@/app/components/basic'

import { useDispatch, useSelector } from 'react-redux'

import { loadPaginatedInfiniteProducts, loadInfiniteProducts } from '@/app/api'

const FlatProducts = () => {
  const dispatch = useDispatch()
  const infiniteLoads = useSelector(state => state?.products);
  const canLoadMore =
    infiniteLoads?.payload?.products?.length < infiniteLoads?.payload?.total

  useEffect(() => {
    const payload = {
      skip: 0
    }
    dispatch(loadInfiniteProducts(payload ))
  }, [])

  const handleRefetchRemount = () => {
    const skip = infiniteLoads.payload?.products.length
    const payload ={
      skip
    }
    dispatch(loadPaginatedInfiniteProducts(payload))
  }

  return (
    <Box sx={{ mt: '90px', mb: '24px', mx: '56px' }}>
      {infiniteLoads?.payload?.products && (
        <Box
          sx={{ display: { xs: 'block', md: 'grid' }, mt: '80px' }}
          gridTemplateColumns="repeat(10, 1fr)"
          gap={1}
        >
          {infiniteLoads?.payload?.products?.map(productDetail => (
            <ProductCard productDetail={productDetail} />
          ))}
        </Box>
      )}
     
    </Box>
  )
}

export default FlatProducts
