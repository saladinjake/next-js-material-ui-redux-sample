import React from "react";
import clockIcon from "../../../../public/assets/images/clock1.svg";
import chartIcon from "../../../../public/assets/images/chart1.svg";
import Post1 from "../../../../public/assets/images/post1.png";
import Post2 from "../../../../public/assets/images/post2.png";
import Post3 from "../../../../public/assets/images/post3.png";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";

import Image from "next/image";


import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { CardActionArea } from "@mui/material";
import { BlockTile } from '../basic'

const PostCard = ({ date="22 April 2021" , countComment="10, comments",image=Post1, tag="New", text1="Trending", text2="New", text3=" Loudest à la Madison #1 (L&apos;integral)" , description="We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away."}) =>{
  return (
        <Box gridColumn="span 4" sx={{ height: "100%", margin: "4px" }}>
            <Card sx={{ maxWidth: 345, height: "100%" }}>
              <Box sx={{ position: "relative" }}>
                <Image
                  src={image}
                  alt="Featured Post image 1"
                  style={{ margin: "auto", display: "block" }}
                />
                <Typography
                  variant="subtitle2"
                  fontWeight={700}
                  textAlign="center"
                  color="#fff"
                  fontSize="14px"
                  mr="15px"
                  bgcolor="#E74040"
                  position="absolute"
                  padding="4px 16px"
                  top="20px"
                  left="20px"
                  borderRadius={"3px"}
                >
                 {tag}
                </Typography>
              </Box>
              <CardActionArea>
                <CardContent>
                  <Box sx={{ display: "flex", width: "100%", mb: "16px" }}>
                    <Typography
                      variant="subtitle2"
                      fontWeight={400}
                      textAlign="center"
                      color="#737373"
                      fontSize="12px"
                      mr="15px"
                    >
                     {text1}
                    </Typography>
                    <Typography
                      variant="subtitle2"
                      fontWeight={400}
                      textAlign="center"
                      color="#737373"
                      fontSize="12px"
                    >
                      {text2}
                    </Typography>
                  </Box>
                  <Typography
                    variant="subtitle2"
                    fontWeight={400}
                    color="#252B42"
                    fontSize="20px"
                  >
                    {text3}
                  </Typography>
                  <Typography
                    variant="subtitle2"
                    fontWeight={400}
                    color="#737373"
                    fontSize="14px"
                    marginTop="8px"
                    marginBottom="8px"
                  >
                    {description}
                  </Typography>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Box sx={{ display: "flex" }}>
                      <Image
                        src={clockIcon}
                        alt="clock icon"
                        style={{
                          margin: "auto",
                          display: "block",
                          marginRight: "8px",
                        }}
                      />
                      <Typography
                        variant="subtitle2"
                        fontWeight={400}
                        // textAlign="center"
                        color="#737373"
                        fontSize="12px"
                        marginTop="8px"
                        marginBottom="8px"
                      >
                        {date}
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex" }}>
                      <Image
                        src={chartIcon}
                        alt="clock icon"
                        style={{
                          margin: "auto",
                          display: "block",
                          marginRight: "8px",
                        }}
                      />
                      <Typography
                        variant="subtitle2"
                        fontWeight={400}
                        textAlign="center"
                        color="#737373"
                        fontSize="12px"
                        marginTop="8px"
                        marginBottom="8px"
                      >
                        {countComment}
                      </Typography>
                    </Box>
                  </Box>
                  <Box>
                    <IconButton aria-label="delete">
                      <Typography
                        variant="subtitle2"
                        fontWeight={700}
                        color="#737373"
                        fontSize="14px"
                        mr="4px"
                      >
                        Learn More
                      </Typography>
                      <ArrowForwardIosIcon style={{ color: "#23A6F0" }} />
                    </IconButton>
                  </Box>
                </CardContent>
              </CardActionArea>
            </Card>
          </Box>
  )
}
const  Posts = () =>{
  return (
    <>
      <Box sx={{ mt: "192px", mb: "112px", mx: "56px" }}>
        <Typography
          variant="subtitle2"
          fontWeight={700}
          textAlign="center"
          color="#23A6F0"
          fontSize="14px"
        >
          Practice Advice
        </Typography>
        <Typography
          variant="subtitle2"
          fontWeight={700}
          textAlign="center"
          color="#252B42"
          fontSize="40px"
        >
          Featured Post
        </Typography>

        <Box
          sx={{ display: { xs: "block", md: "grid" }, mt: "80px" }}
          gridTemplateColumns="repeat(12, 1fr)"
          gap={1}
        >


        <PostCard
          date="22 April 2021" 
          countComment="10 comments"
          image={Post1}
          tag="New"
          text1="Trending"
         text2="New" 
          text3=" Loudest à la Madison #1 (L&apos;integral)" 
         description="We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away." />

          <PostCard
          date="22 April 2021" 
          countComment="10 comments"
          image={Post2}
          tag="New"
          text1="Trending"
         text2="New" 
          text3=" Loudest à la Madison #1 (L&apos;integral)" 
         description="We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away." />

          <PostCard
          date="22 April 2021" 
          countComment="10 comments"
          image={Post3}
          tag="New"
          text1="Google"
         text2="Trending" 
          text3=" Loudest à la Madison #1 (L&apos;integral)" 
         description="We focus on ergonomics and meeting you where you work. It&apos;s only a keystroke away." />
        
           </Box>
      </Box>
    </>
  )
}

export default Posts;
