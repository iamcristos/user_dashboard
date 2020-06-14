import React from "react";
import styled from "styled-components";

import Card from "../../utility/Card";

const MarketContainer = styled.div`
  height: 400px;
  width: 100%;
`;

const Market = () => {
  return (
    <MarketContainer>
      <Card style={{ height: "100%" }}>
        <h2>MarketOverview</h2>
      </Card>
    </MarketContainer>
  );
};

export default Market;