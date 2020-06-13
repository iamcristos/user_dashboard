import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: ${(props) => (props.margin ? props.margin : "0.2rem")};
  font-family: "Roboto", sans-serif;
`;

const ContainerWrapper = (props) => {
  return <Wrapper {...props}>{props.children}</Wrapper>;
};

export default ContainerWrapper;