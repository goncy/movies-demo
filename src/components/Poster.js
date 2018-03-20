// @flow

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 12px;
  text-align: center;
  position: relative;

  img {
    object-fit: contain;
    max-width: 100%;
    max-height: 100%;
  }

  .title {
    position: absolute;
    bottom: 16px;
    font-family: "Montserrat", sans-serif;
    color: rebeccapurple;
    margin-top: 8px;
    font-size: 16px;
    font-weight: 700;
    width: 100%;
    text-shadow: 0px 0px 3px rgba(255, 255, 255, 0.8);
  }
`;

const Poster = ({image, title}: Props) => (
  <Container>
    <img src={image} alt={title} />
    <div className="title">{title}</div>
  </Container>
);

export default Poster;
