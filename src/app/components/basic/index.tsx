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

import ShoppingCart from "../shared/shoppingBag";
import WishfulThinkerBoxes from "../shared/wishFairyList";

export const BlockTile = ({
  title,
  color = '',
  fontWeight = 300,
  variant = 'subtitle2',
  fontSize = '12px',
  marginBottom = '30px',
  textAlign = 'center',
}) => {
  return (
    <Typography
      variant={variant}
      fontWeight={fontWeight}
      textAlign={textAlign}
      color={color}
      fontSize={fontSize}
      marginBottom={marginBottom}
    >
      {title}
    </Typography>
  )
}

export const AppLogo = ({ basic = false }) => {
  return (
    <>
      {basic ? (
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            fontWeight: 700,
            letterSpacing: '.3rem',
            textDecoration: 'none',
            mr: 2,
            display: { xs: 'none', md: 'flex' },
          }}
          className="color-main"
        >
          Bandage
        </Typography>
      ) : (
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="#app-bar-with-responsive-menu"
          sx={{
            mr: 10,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontWeight: 700,
            letterSpacing: '.3rem',
            textDecoration: 'none',
          }}
          className="color-main"
        >
          Bandage
        </Typography>
      )}
    </>
  )
}

export const MenuItems = ({
  openCart,
  openNavMenu,
  closeNavMenu,
  openModal,
  canOpen,
}) => {
  const links = [
    { name: 'Home', url: '#', icon: null },
    { name: 'Shop', url: '#', icon: null },
    { name: 'About', url: '#', icon: null },
    { name: 'Blog', url: '#', icon: null },
    { name: 'Contact', url: '#', icon: null },
    { name: 'Pages', url: '#', icon: null },
  ]
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'flex' } }}>
      <Menu
        id="menu-appbar"
        anchorEl={canOpen}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(canOpen)}
        onClose={closeNavMenu}
        marginThreshold={0}
        sx={{
          display: { xs: 'block', md: 'none', sm: 'block' },
        }}
        slotProps={{
          paper: {
            sx: {
              width: '100%',

              maxWidth: '100%',
              left: 0,
              right: 0,
            },
          },
        }}
      >
        {links?.map(link => {
          return (
            <MenuItem key={new Date().now}>
              <Typography textAlign="center" width={'100%'}>
                {link?.name}
              </Typography>
            </MenuItem>
          )
        })}

        <MenuItem>
          <Button sx={{ margin: 'auto' }}>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
              }}
            >
              <PersonOutlineOutlinedIcon />
              Login / Register
            </span>
          </Button>
        </MenuItem>
        <MenuItem>
          <Button sx={{ margin: 'auto' }}>
            <SearchOutlinedIcon />
          </Button>
        </MenuItem>
        <MenuItem>
          <IconButton sx={{ margin: 'auto' }} onClick={openCart}>
            <ShoppingCartOutlinedIcon />

            <span> </span>
          </IconButton>
        </MenuItem>
        <MenuItem>
          <Button sx={{ margin: 'auto' }} onClick={openModal}>
            <FavoriteBorderOutlinedIcon />
            <span> </span>
          </Button>
        </MenuItem>
      </Menu>

      <Box
        sx={{
          display: { xs: 'flex', md: 'none', sm: 'flex' },
          flexDirection: 'row',
          justifyContent: 'flex-end',
          position: { xs: 'absolute', md: 'relative' },
          top: { xs: '5px' },
          right: { xs: '10px' },
        }}
      >
        <Button sx={{ margin: 'auto' }}>
          <SearchOutlinedIcon />
        </Button>

        <IconButton sx={{ margin: 'auto' }} onClick={openCart}>
          <ShoppingCartOutlinedIcon />

          <span> </span>
        </IconButton>

        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={openNavMenu}
          sx={{
            flexGrow: 1,
            display: { xs: 'flex', md: 'none' },
          }}
        >
          <MenuIcon />
        </IconButton>
      </Box>
    </Box>
  )
}

export const PublicLinks = () => {
  const buttonStyles = {
    display: 'block',
    color: '#737373',
    fontSize: '12px',
    fontWeight: 'bold',
    minHeight: 0,
    minWidth: 0,
    padding: '6px',
  }

  const links = [
    { name: 'Home', url: '#', icon: null },
    { name: 'Shop', url: '#', icon: <KeyboardArrowDownOutlinedIcon /> },
    { name: 'About', url: '#', icon: null },
    { name: 'Blog', url: '#', icon: null },
    { name: 'Contact', url: '#', icon: null },
    { name: 'Pages', url: '#', icon: null },
  ]
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      {links?.map(linker => {
        if (linker.icon !== null) {
          return (
            <Button href={linker?.url} sx={buttonStyles} key={new Date().now}>
              <span
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  flexWrap: 'wrap',
                }}
              >
                {linker?.name}
              </span>
            </Button>
          )
        }
        return (
          <Button href={linker?.url} sx={buttonStyles} key={new Date().now}>
            {linker?.name}
          </Button>
        )
      })}
    </Box>
  )
}

export const AuthLinks = ({ handleToggle, openWishList }) => {
  const buttonStyles = {
    display: 'block',
    color: '#23A6F0',
    fontSize: '12px',
    fontWeight: 'bold',
    minHeight: 0,
    minWidth: 0,
    margin: 0,
    padding: '4px',
  }
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: 'none', md: 'flex' },
        justifyContent: 'end',
      }}
    >
      <Button sx={buttonStyles}>
        <span
          style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
          }}
        >
          <PersonOutlineOutlinedIcon />
          Login / Register
        </span>
      </Button>
      <Button sx={buttonStyles}>
        <SearchOutlinedIcon />
      </Button>
      <Button sx={buttonStyles} onClick={handleToggle}>
        <ShoppingCartOutlinedIcon />
        <span> </span>
      </Button>

      <Button sx={buttonStyles} onClick={openWishList}>
        <FavoriteBorderOutlinedIcon />
        <span> </span>
      </Button>
    </Box>
  )
}

export const ShopingCartInformationModal = ({ closeCart, canOpen , cart}) => {
  const modalStyles = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '80%', md: '720' },
    height: { xs: '80%' },
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'scroll',
  }

  return (
    <Modal
      open={canOpen}
      onClose={closeCart}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>
        <Box sx={modalStyles}>
          <Typography
            id="modal-modal-title"
            variant="h2"
            component="h2"
            fontSize={'32px'}
            fontWeight={'700'}
            borderBottom={'1px solid #212121'}
          >
            Shopping Cart
          </Typography>
          {cart?.map((item: any) => (
              <ShoppingCart
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
                quantity={item.quantity}
              />
            ))}

          <Box
            marginTop="24px"
            padding="8px"
            gridTemplateColumns="repeat(12, 1fr)"
            gap={1}
            sx={{
              display: { xs: 'block', md: 'grid' },
            }}
          >
            <Box gridColumn="span 6">
              <Typography
                variant="subtitle2"
                fontWeight={700}
                color="#252B42"
                fontSize="16px"
                marginBottom={'14px'}
              >
                ORDER SUMMARY
              </Typography>
            </Box>
            <Box gridColumn="span 6" textAlign={'right'}>
              <Typography
                variant="subtitle2"
                fontWeight={400}
                color="#252B42"
                fontSize="16px"
                marginBottom={'14px'}
              >
                SUBTOTAL
                <strong></strong>
              </Typography>
            </Box>
          </Box>
        </Box>
      </>
    </Modal>
  )
}

export const WishListInformationModal = ({ openWishList, closeWishList, wishlist }) => {
  const modalStyles = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: { xs: '80%', md: '720' },
    height: { xs: '80%' },
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    overflow: 'scroll',
  }
  return (
    <Modal
      open={openWishList}
      onClose={closeWishList}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>
        <Box sx={modalStyles}>
          <Typography
            id="modal-modal-title"
            variant="h2"
            component="h2"
            fontSize={'32px'}
            fontWeight={'700'}
            borderBottom={'1px solid #212121'}
          >
            Wishlist
          </Typography>
          {wishlist?.map((item: any) => (
              <WishfulThinkerBoxes
                key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
              />
            ))}
        </Box>
      </>
    </Modal>
  )
}


export const WishTemplate = ({children}) =>{
  return (
     <Box
     gridTemplateColumns="repeat(12, 1fr)"
        gap={1}
        borderBottom={'1px solid #212121'}
        padding="8px"
        sx={{
          display: { xs: 'block', md: 'grid' },
        }}
        
      >
      {children}
 </Box>
  )
}

export const ShoppingCartWrapper = ({children}) =>{
  return (
    <Box
    gridTemplateColumns="repeat(12, 1fr)"
        gap={1}
        borderBottom={'1px solid #212121'}
        borderRadius="10px"
        padding="8px"
        sx={{
          display: { xs: 'block', md: 'grid' },
          borderRadius: 1,
        }}
        
      >
      {children}
      </Box>
  )
}

