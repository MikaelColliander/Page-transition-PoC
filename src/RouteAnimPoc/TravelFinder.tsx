import React, { Component, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { styled, FlowButton, Container, Box } from "@sjse/component-library";
import AppBar from "../AppBar";
import CTA from "../CTA/CTA";

const Wrapper = styled("div")({
  position: "absolute",
  width: "100vw",
  overflow: "hidden",
});

const TravelFinder = () => {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <Wrapper>
      <AppBar />
      <Container maxWidth="sm">
        <Box mb={8}>
          <FlowButton LinkComponent={<Link to="/sok-resa/valj-utresa" />}>
            Slide Away
          </FlowButton>
        </Box>
      </Container>
    </Wrapper>
  );
};

export default TravelFinder;
