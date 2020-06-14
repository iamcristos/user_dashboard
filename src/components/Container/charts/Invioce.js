
import React from "react";
import styled from "styled-components";

import Card from "../../utility/Card";

const InvoiceContainer = styled.div`
  height: 400px;
  width: 100%;
  margin: 1rem 0;
`;

const Invoice = () => {
  return (
    <InvoiceContainer>
      <Card style={{ height: "100%" }}>
        <h2>Invoices</h2>
      </Card>
    </InvoiceContainer>
  );
};

export default Invoice;