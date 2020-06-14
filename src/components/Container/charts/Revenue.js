import React from "react";
import styled from "styled-components";

import Card from "../../utility/Card";

const RevenueContainer = styled.section`
  height: 200px;
  width: 100%;
`;

const Revenue = () => {
  return (
    <Card>
      <RevenueContainer></RevenueContainer>
    </Card>
  );
};

export default Revenue;