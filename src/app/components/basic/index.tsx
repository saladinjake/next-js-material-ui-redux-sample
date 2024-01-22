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

import ShoppingCart from '../shared/shoppingBag'
import WishfulThinkerBoxes from '../shared/wishFairyList'

import { usePriceValue } from '@/app/lib/hooks'

import ProductLink from '@mui/material/Link'

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";


import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import Rating from "@mui/material/Rating";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Carousel from "nuka-carousel";
import Image from "next/image";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Snackbar from "@mui/material/Snackbar";
import CloseIcon from "@mui/icons-material/Close";
import InfiniteLoadShowcase from "@/app/components/shared/Products";


import partner1 from "../../../../public/assets/images/partner1.png";
import partner2 from "../../../../public/assets/images/partner2.png";
import partner3 from "../../../../public/assets/images/partner3.png";
import partner4 from "../../../../public/assets/images/partner4.png";
import partner5 from "../../../../public/assets/images/partner5.png";
import partner6 from "../../../../public/assets/images/partner6.png";

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
  cart,
  wishlist,
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

            <span>{cart.length > 0 ? cart.length : null} </span>
          </IconButton>
        </MenuItem>
        <MenuItem>
          <Button sx={{ margin: 'auto' }} onClick={openModal}>
            <FavoriteBorderOutlinedIcon />
            <span>{wishlist.length > 0 ? wishlist.length : null} </span>
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

          <span>{cart.length > 0 ? cart.length : null} </span>
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

export const AuthLinks = ({ handleToggle, openWishList, cart, wishlist }) => {
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
        <span>{cart.length > 0 ? cart.length : null} </span>
      </Button>

      <Button sx={buttonStyles} onClick={openWishList}>
        <FavoriteBorderOutlinedIcon />
        <span> {wishlist.length > 0 ? wishlist.length : null}</span>
      </Button>
    </Box>
  )
}

const useCartComputation = cart => {
  let quantity = 0
  let price = 0
  if (cart?.length > 0) {
    cart.forEach((item: any) => {
      quantity += item.quantity
      price += item.price * item.quantity
    })
  }

  return { price, quantity }
}

export const ShopingCartInformationModal = ({ closeCart, canOpen, cart }) => {
  const cartComputation = useCartComputation(cart)
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
                SUBTOTAL({cartComputation.totalQuantity}):
                <strong>${cartComputation.totalPrice}</strong>
              </Typography>
            </Box>
          </Box>
        </Box>
      </>
    </Modal>
  )
}

export const WishListInformationModal = ({
  openWishList,
  closeWishList,
  wishlist,
}) => {
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

export const WishTemplate = ({ children }) => {
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

export const ShoppingCartWrapper = ({ children }) => {
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

export const ProductCard = ({ productDetail }) => {
  const lossPrice = usePriceValue(
    productDetail?.price,
    productDetail?.discountPercentage
  )
  return (
    <Box
      key={productDetail.title}
      gridColumn="span 2"
      sx={{ height: '100%', margin: '8px' }}
    >
      <ProductLink href={`/products/${productDetail.id}`}>
        <Card
          sx={{
            height: '100%',
            boxShadow: 'none',
            margin: 'auto',
            maxWidth: 390,
          }}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="240"
              image={productDetail.images[0]}
              alt={productDetail.description}
            />
            <CardContent
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}
            >
              <BlockTile
                variant="subtitle2"
                fontWeight={700}
                textAlign="center"
                color="#252B42"
                fontSize="15px"
                title={productDetail.title}
              />

              <BlockTile
                variant="subtitle2"
                fontWeight={700}
                textAlign="center"
                color="#737373"
                fontSize="14px"
                marginTop="8px"
                marginBottom="8px"
                title={productDetail?.brand}
              />

              <Box sx={{ display: 'flex' }}>
                <BlockTile
                  variant="subtitle2"
                  fontWeight={700}
                  textAlign="center"
                  color="#BDBDBD"
                  fontSize="13px"
                  marginRight="4px"
                  title={productDetail?.price}
                />

                <BlockTile
                  variant="subtitle2"
                  fontWeight={700}
                  textAlign="center"
                  color="#23856D"
                  fontSize="14px"
                  title={lossPrice}
                />
              </Box>
            </CardContent>
          </CardActionArea>
        </Card>
      </ProductLink>
    </Box>
  )
}









//product detail
export const Partners = ()  =>{
  const partnerShips = [partner1,partner2,partner3,partner4,partner5,partner6]
  return (
    <Box
      sx={{
        alignItems: "center",
        marginY: "50px",
        display: { sx: "block", md: "flex" },
        justifyContent: "space-evenly",
        
      }}
    >
    
      {partnerShips?.map(partna => {
        return (
             <Box sx={{ height: "100%", my: "24px;" }}>
        <Image
          src={partna}
          alt="clock icon"
          style={{ margin: "auto", display: "block" }}
        />
      </Box>
          )
      })}
    </Box>
  );
}

export const BreadCrumbs = () => {
  return (
      <Box
        sx={{
          padding: { xs: "8px 14px", md: "8px 147px" },
          backgroundColor: "#FAFAFA",
        }}
      >
        <Stack spacing={2}>
          <Breadcrumbs
            separator={<NavigateNextIcon fontSize="small" />}
            aria-label="breadcrumb"
          >
            <MUILink href={`/`} key="1">
      <Typography color="text.primary">Home</Typography>
    </MUILink>,
    <Typography key="2" color="text.primary">
      Shop
    </Typography>
          </Breadcrumbs>
        </Stack>
      </Box>
  )
}


export const ProductSlides = ({ product }) =>{
  return (
     <Box
            gridColumn="span 5"
            sx={{ height: "100%", margin: "8px" }}
            key={product.title}
          >
            {product?.images && params.id && (
              <Carousel
                wrapAround={true}
                renderCenterLeftControls={({ previousSlide }) => (
                  <IconButton onClick={previousSlide} sx={{ padding: 4 }}>
                    <ArrowBackIosIcon style={{ color: "white" }} />
                  </IconButton>
                )}
                renderCenterRightControls={({ nextSlide }) => (
                  <IconButton onClick={nextSlide} sx={{ padding: 4 }}>
                    <ArrowForwardIosIcon style={{ color: "white" }} />
                  </IconButton>
                )}
              >
                {product?.images?.map((image: any) => (
                  <Image
                    key={image}
                    src={image}
                    width={500}
                    height={450}
                    objectFit="contain"
                    alt="Picture of the author"
                    style={{ margin: "10px", display: "block" }}
                  />
                ))}
              </Carousel>
            )}
            {product.thumbnail && (
              <Box sx={{ margin: "16px" }}>
                <Image
                  src={product.thumbnail}
                  width={"100"}
                  height={"150"}
                  objectFit="contain"
                  alt="Picture of the author"
                  style={{ height: "auto" }}
                />
              </Box>
            )}
          </Box>
  )
}

export const ProductDescription = ({product}) =>{
  return (
     <>
     <Typography
              variant="subtitle2"
              fontWeight={400}
              color="#252B42"
              fontSize="16px"
              marginBottom={"14px"}
            >
              {product.title}
            </Typography>
            <Box>
              <Rating
                name="read-only"
                value={product.rating}
                readOnly
                sx={{ marginTop: "-4px" }}
              />
              <Typography
                variant="subtitle2"
                fontWeight={700}
                color="#737373"
                fontSize="14px"
                marginBottom={"14px"}
                marginLeft={"10px"}
              >
                10 Reviews
              </Typography>
            </Box>
            <Typography
              variant="subtitle2"
              fontWeight={700}
              color="#252B42"
              fontSize="24px"
              marginBottom={"14px"}
            >
              ${product.price}
            </Typography>
            <Typography
              variant="subtitle2"
              fontWeight={700}
              color="#737373"
              fontSize="14px"
              marginBottom={"14px"}
            >
              Availability:{" "}
              {product.stock > 0 ? (
                <span style={{ color: "#23A6F0" }}>In Stock</span>
              ) : (
                <span style={{ color: "#23A6F0" }}>Not Available</span>
              )}
            </Typography>
            <Box
              display="flex"
              borderTop="1px solid #212121"
              paddingTop="29px"
              marginTop="140px"
            >
              <div className="ellipse bg-blue"></div>
              <div className="ellipse bg-green"></div>
              <div className="ellipse bg-orange"></div>
              <div className="ellipse bg-black"></div>
            </Box>

     </>
  )
}

export const ProductAction = ({product, addToCart,addToWishlist}) =>{
  const payload = {
    id: product.id,
    title: product.title,
    image: product.thumbnail,
    price: product.price,
  }
  return (
     <Box marginTop="68px">
              <Button variant="contained" sx={{ backgroundColor: "#23a6f0" }}>
                Select Options
              </Button>
              <IconButton
                className="icon-btn-bordered"
                sx={{ mx: "5px" }}
                aria-label="add to shopping cart"
                onClick={() => {
                  addToCart(payload ,
                    "Product has been added to your wishlist"
                  );
                }}
              >
                <FavoriteBorderOutlinedIcon />
              </IconButton>
              <IconButton
                className="icon-btn-bordered"
                sx={{ mx: "5px" }}
                aria-label="add to shopping cart"
                onClick={() => {
                  addToWishlist(payload ,
                    "Product has been added to your cart"
                  );
                }}
              >
                <ShoppingCartOutlinedIcon />
              </IconButton>
              <IconButton
                className="icon-btn-bordered"
                sx={{ mx: "5px" }}
                aria-label="add to shopping cart"
              >
                <RemoveRedEyeIcon />
              </IconButton>
            </Box>
  )
}

export const DummyProductInformation = () => {
  const staticText1 =`Met minim Mollie non desert Alamo est sit cliquey dolor do met
              sent. RELIT official consequent door ENIM RELIT Mollie. Excitation
              venial consequent sent nostrum met.`
  return (
      <Box gridColumn="span 6" sx={{ height: "100%", margin: "8px" }}>
            <Typography
              variant="h2"
              fontWeight={700}
              color="#252B42"
              fontSize="24px"
              marginBottom={"14px"}
            >
              the quick fox jumps over
            </Typography>

            <Typography
              variant="subtitle2"
              fontWeight={400}
              color="#737373"
              fontSize="14px"
              marginBottom={"30px"}
              paddingRight={"150px"}
            >
              {staticText1}
            </Typography>
            <Typography
              variant="subtitle2"
              fontWeight={400}
              color="#737373"
              fontSize="14px"
              marginBottom={"30px"}
              paddingRight={"160px"}
              paddingLeft={"16px"}
              borderLeft={"3px solid #23856D"}
            >
                {staticText1}
            </Typography>
            <Typography
              variant="subtitle2"
              fontWeight={400}
              color="#737373"
              fontSize="14px"
              marginBottom={"30px"}
              paddingRight={"150px"}
            >
               {staticText1}
            </Typography>
          </Box>
  )
}

export const BestSellers = () =>{
  const staticText = `BESTSELLER PRODUCTS`
  return (
  
        <Box
          sx={{
            padding: { xs: "8px 14px", md: "8px 60px" },
            backgroundColor: "#FAFAFA",
            marginTop: "48px",
            marginBottom: "-72px",
          }}
        >
          <Typography
            variant="h2"
            fontWeight={700}
            color="#252B42"
            fontSize="24px"
            marginBottom={"24px"}
          >
            {staticText}
          </Typography>
          <hr />
        </Box>
  )
}

export const ModalToast = ({showToast, closeToastModal,showToastModal, notificationMessage}) =>{
  return (
     <Snackbar
        open={showToast}
        autoHideDuration={6000}
        onClose={handleCloseSnackBar}
        message={notificationMessage}
        action={<>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleCloseSnackBar}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </>}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      />
  )
}
