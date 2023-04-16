import Box from "@mui/material/Box";
import React, { useEffect } from "react";
import ScratchCard from "react-scratchcard-v2";
import CoverImage from '../img/scratch-off-bg.jpg';
import Cherry from "../img/cherry.png";
import RedCoverImage from '../img/redpaper.jpg';
import { Button } from "@mui/material";

const ScratchOffCard = () => {
  return (
    <>
      <br />
      <div style={{
        textShadow: "none",
        margin: "auto",
        display: "table",
        backgroundColor: "white",
        border: "2px solid red",
        paddingTop: "20px",
        boxShadow: "5px 5px 5px 5px",
        paddingRight: "20px",
        paddingBottom: "20px",
        paddingLeft: "20px",
        width: 900,
        height: 300,
        backgroundImage: "url(https://img.freepik.com/free-photo/origami-paper-craft-art-dark-orange-surface_23-2148188382.jpg)",
backgroundRepeat: "no-repeat",
backgroundSize: "cover"
      }} >
        <br />
        <h1 style={{ color: "white" }}>Oragami Lotto</h1>
        {/* <img src="https://see.fontimg.com/api/renderfont4/ow3e4/eyJyIjoiZnMiLCJoIjo2MiwidyI6MjAwMCwiZnMiOjMxLCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TkZU/xtrude-regular.png" alt="sss" />
        <img src="https://see.fontimg.com/api/renderfont4/eZRPg/eyJyIjoiZHciLCJoIjo2NCwidyI6MjAwMCwiZnMiOjMyLCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiJ9/WA/sunnyskypersonaluse-boldita.png" alt="aaa" /> */}

        {/* _____________ */}
        <h4 style={{color: "white"}}>Your Numbers</h4>
        <p style={{color: "white"}}>Get 3 matching numbers on one row. Numbers are from 1-6. The payout is 1ETH for a match</p>
        <Box style={{ display: "flex" }}>
          <Box style={{backgroundColor: "red", border: "2px solid red"}}>
            <Box style={{ display: "flex" }}>
              <ScratchCard
                width={100}
                height={100}
                image={CoverImage}
                finishPercent={100}
                onComplete={() => alert('complete')}
              >
                <h1 style={{color: "white", textAlign: "center"}}>1</h1>
              </ScratchCard>
              <span style={{ marginRight: "2px" }} />
              <ScratchCard
                width={100}
                height={100}
                image={CoverImage}
                finishPercent={100}
                onComplete={() => alert('complete')}
              >
               <h1 style={{color: "white", textAlign: "center"}}>1</h1>
              </ScratchCard>
              <span style={{ marginRight: "2px" }} />
              <ScratchCard
                width={100}
                height={100}
                image={CoverImage}
                finishPercent={100}
                onComplete={() => alert('complete')}
              >
               <h1 style={{color: "white", textAlign: "center"}}>1</h1>
              </ScratchCard>
            </Box>
            <Box style={{ display: "flex", marginTop: "2px" }}>
              <ScratchCard
                width={100}
                height={100}
                image={CoverImage}
                finishPercent={100}
                onComplete={() => alert('complete')}
              >
                <h1 style={{color: "white", textAlign: "center"}}>1</h1>
              </ScratchCard>
              <span style={{ marginRight: "2px" }} />
              <ScratchCard
                width={100}
                height={100}
                image={CoverImage}
                finishPercent={100}
                onComplete={() => alert('complete')}
              >
                <h1 style={{color: "white", textAlign: "center"}}>1</h1>
              </ScratchCard>
              <span style={{ marginRight: "2px" }} />
              <ScratchCard
                width={100}
                height={100}
                image={CoverImage}
                finishPercent={100}
                onComplete={() => alert('complete')}
              >
                <h1 style={{color: "white", textAlign: "center"}}>1</h1>
              </ScratchCard>
            </Box>
          </Box>

          {/* big box */}
          <Box>
            <ScratchCard
              width={175}
              height={175}
              image={RedCoverImage}
              finishPercent={100}
              onComplete={() => alert('complete')}
            >
              <h1 style={{color: "white", textAlign: "center"}}>1</h1>
            </ScratchCard>
          </Box>
          {/* <div style={{backgroundColor: "white"}}>
              <p>lsjkdk jsdlkjds l</p>
            </div> */}
        </Box>

        <br />
        <Button style={{
          width: "25em",
          height: "3em",
          backgroundColor: "#ff5252",
          borderColor: "black",
          color: "white",
          boxShadow: "5px 5px #333333",
          display: "flex",
          margin: "auto"
        }}
          href="/"
          variant="outlined"><strong>CLAIM</strong></Button>
      </div>
    </>
  );
};

export default ScratchOffCard;
