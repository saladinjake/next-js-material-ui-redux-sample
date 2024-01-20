'use client'
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import { Title } from '@mui/icons-material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import MenuItem from '@mui/material/MenuItem'
import Modal from '@mui/material/Modal'

import {
  AppLogo,
  MenuItems,
  PublicLinks,
  AuthLinks,
  ShopingCartInformationModal,
  WishListInformationModal,
} from '@/app/components/basic'

const NavigationComponent = () => {
  const [toggle, setToggle] = useState(false)
  const [openWish, setOpenWishList] = useState(false)
  const handleOpenToggle = () => setToggle(true)
  const handleCloseToggle = () => setToggle(false)

  const openWishList = () => setOpenWishList(true)
  const closeWishList = () => setOpenWishList(false)

  const [canOpen, setCanOpen] = React.useState<boolean | HTMLElement>(false)

  const openNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setCanOpen(event.currentTarget)
  }

  const closeNavMenu = () => {
    setCanOpen(false)
  }

  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: 'background.paper', boxShadow: 'none' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AppLogo basic />

          <MenuItems
            openCart={handleOpenToggle}
            openNavMenu={openNavMenu}
            closeNavMenu={closeNavMenu}
            openModal={openWishList}
            canOpen={canOpen}
          />
          <AppLogo />

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'none', md: 'flex' },
              justifyContent: 'space-between',
              marginLeft: '40px',
            }}
          >
            <PublicLinks />
            <AuthLinks />
          </Box>
        </Toolbar>
      </Container>

      <ShopingCartInformationModal
        closeCart={handleCloseToggle}
        canOpen={toggle}
      />
      <WishListInformationModal
        openWishList={openWish}
        closeWishList={closeWishList}
      />
    </AppBar>
  )
}

export default NavigationComponent
