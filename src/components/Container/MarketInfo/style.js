import styled from "styled-components";

const Heading = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid #cdd6dd;
  padding: 0.5rem 0;
  .left {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    h4 {
      font-weight: bold;
      color: #001737;
      margin-right: 1rem;
      font-size: 1.2rem;
    }
    p {
      font-size: 0.9rem;
      color: #788494;
    }
    span {
      margin: 0 0.5rem;
      color: #788494;
    }
  }
`;

export default Heading