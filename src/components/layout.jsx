import React from "react";
import styled from "styled-components";

const Layout = ({ children }) => {
  return (
    <>
      <Wrap>{children}</Wrap>
    </>
  );
};

export default Layout;

const Wrap = styled.div`
  @media screen and (max-width: 390px) {
    margin: auto;
  }
  position: relative;
  -webkit-box-align: center;
  box-sizing: border-box;
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
  background-color: white;
  box-shadow: 0px 6px 16px 4px rgba(0, 0, 0, 0.25);
`;
