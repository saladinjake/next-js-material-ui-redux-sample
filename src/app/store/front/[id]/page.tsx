"use client";
import React, { useEffect, useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Footer from "@/app/components/shared/Footer"
import bannerSales from "../../../../../public/assets/images/banner.png";
import { 
  BlockTile,
  BreadCrumbs,
  ProductSlides,
  ProductDescription,
  ProductAction,
  DummyProductInformation,
  BestSellers,
  Partners,
  ModalToast

 } from '@/app/components/basic'


import { getProductDetail } from "@/app/api";
import { default as MUILink } from "@mui/material/Link";
import Stack from "@mui/material/Stack";

import { useDispatch, useSelector } from "react-redux";
import { addToShoppingCartAction } from "@/app/lib/redux/helpers/cartActionReducer";
import { addProductToWishlistAction } from "@/app/lib/redux/helpers/wishListActionReducers";
import Image from 'next/image'
// import {
//   AppDispatch,
//   RootState,
//   // useAppDispatch
// } from "@/app/lib/redux/store"

import FlatProducts from "@/app/components/shared/FlatProducts"



const showCaseProduct = ({ params }: { params: { id: string } }) => {
  console.log(params)
   const [showToast, setshowToast] = useState(false);
  const [notificationMessage, setnotificationMessage] = useState("");

  const dispatch = useDispatch<any>();
  const product = useSelector(
    (state: any) => state.products.singleProductPayload
  );

  useEffect(() => {
    dispatch(getProductDetail({ id: params.id }));
  }, []);

  const sendToCart = async (item: any, message: string) => {
   
    await dispatch(
      addToShoppingCartAction({
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
      }) 
    );

    setshowToast(true);
    setnotificationMessage(message);
  };

  const sendToWishList = async (item: any, message: string) => {
    
    await dispatch(
      addProductToWishlistAction({
        id: item.id,
        title: item.title,
        image: item.image,
        price: item.price,
      }) 
    );

    setshowToast(true);
    setnotificationMessage(message);
  };

 

 

  const showToastModal= (message: string) => {
    setshowToast(true);
    setnotificationMessage(message);
  };

  const closeToastModal= (
    event: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setshowToast(false);
  };

  

  
  return (
    <>
       <BreadCrumbs />
      <Box
        sx={{
          padding: { xs: "8px 14px", md: "8px 147px" },
          backgroundColor: "#FAFAFA",
        }}
      >
        <Box
          sx={{
            display: { xs: "block", md: "grid" },
          }}
          gridTemplateColumns="repeat(10, 1fr)"
          gap={1}
        >
          <ProductSlides product={product} id={params?.id}/>
          <Box
            gridColumn="span 5"
            sx={{ height: "100%", margin: "8px", padding: "16px" }}
            key={product.title}
          >
            <ProductDescription product={product} />
            
            
            <ProductAction 
              product={product}
              addToCart={sendToCart}
              addToWishList={sendToWishList}

             />
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          padding: { xs: "8px 14px", md: "8px 147px" },
        }}
      >
        <Box sx={{ padding: "24px" }}>
          <Tabs aria-label="product info tabs" centered>
            <Tab label="Descriptions" />
            <Tab label="Additional Information" />
            <Tab label="Reviews (0)" />
          </Tabs>
        </Box>
        <Box
          sx={{
            display: { xs: "block", md: "grid" },
          }}
          gridTemplateColumns="repeat(10, 1fr)"
          gap={1}
          paddingTop={"44px"}
          borderTop={"1px solid #ECECEC"}
        >
         <DummyProductInformation  />
          <Box gridColumn="span 4" sx={{ height: "100%", margin: "8px" }}>
            <Image
              src={bannerSales}
              alt="Some text"
              style={{ width: "100%", height: "auto" }}
            />
          </Box>
        </Box>
      </Box>
       <Box
        sx={{
          padding: { xs: "8px 14px", md: "8px 100px" },
          backgroundColor: "#FAFAFA",
        }}
      >
      <BestSellers />
 <FlatProducts  />
      <Partners />
     {/* 
       
        */}
      </Box>
      <Footer  />
      <ModalToast
      showToast={showToast}
       closeToastModal={closeToastModal}
       showToastModal={showToastModal} 
       notificationMessage={notificationMessage}

       />
    </>
  );
}

export default showCaseProduct;
