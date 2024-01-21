import React from "react";
import service1icon from "../../../../public/assets/images/s1.svg";
import service2icon from "./../../../public/assets/images/s2.svg";
import service3icon from "./../../../public/assets/images/s3.svg";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import Image from "next/image";

import { BlockTile } from '../basic'

const ServiceCard = ( {title=" Easy Wins", description="Get your best looking smile now!" } ) =>{
  return (
       
          <Box
            gridColumn="span 4"
            sx={{ height: "100%", margin: "8px", px: "40px" }}
          >
            <Card sx={{ maxWidth: 345, height: "100%", boxShadow: "none" }}>
              <Image
                src={service1icon}
                alt="Services 1 icon"
                style={{ margin: "auto", display: "block" }}
              />
              <CardActionArea>
                <CardContent
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "space-around",
                  }}
                >
                  <BlockTile
                    variant="subtitle2"
                    fontWeight={700}
                    textAlign="center"
                    color="#252B42"
                    fontSize="24px"
                    title={title}
                  />
                   
               
                  <BlockTile
                    variant="subtitle2"
                    fontWeight={400}
                    textAlign="center"
                    color="#737373"
                    fontSize="14px"
                    marginTop="8px"
                    marginBottom="8px"
                    title={description}
                  />
                    
              
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
  )
}

const ServiceBlock = () =>{
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
          
      
        <BlockTile
          variant="subtitle2"
          fontWeight={700}
          textAlign="center"
          color="#252B42"
          fontSize="24px"
          title="THE BEST SERVICES"
        />
        
        <BlockTile
          variant="subtitle2"
          fontWeight={400}
          textAlign="center"
          color="#737373"
          fontSize="14px"
          title="Problems trying to resolve the conflict between"
        />
    </>
  )
}
const  Services = () =>{
  return (
    <>
      <Box sx={{ mt: "80px", mb: "24px", mx: "56px" }}>
          <ServiceBlock />
       <Box
          sx={{ display: { xs: "block", md: "grid" }, mt: "80px" }}
          gridTemplateColumns="repeat(12, 1fr)"
          gap={1}
        >
          <ServiceCard title=" Easy Wins" description="Get your best looking smile now!" />
          <ServiceCard title="  Concrete" description="G Defalcate is most focused in helping you discover your most beautiful smile" />
         <ServiceCard title=" Hack Growth"  description="Overcame any hurdle or any other problem." />
        </Box>
      </Box>
    </>
  )
}

export default Services;
