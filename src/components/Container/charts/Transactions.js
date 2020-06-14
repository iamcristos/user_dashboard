import React from "react";
import styled from "styled-components";

import Card from "../../utility/Card";

const TransactionsContainer = styled.div`
  height: 200px;
  width: 100%;
`;

const Transactions = () => {
  return (
    <Card>
      <TransactionsContainer></TransactionsContainer>
    </Card>
  );
};

export default Transactions;