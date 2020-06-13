import styled from "styled-components";

const MainContainer = styled.div`
  width: 84.5%;
  height: 100vh;
  flex-direction: column;
  overflow-y: scroll;
  section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
    margin: 1rem 0;
    .left {
      width: 70%;
      display: flex;
      flex-wrap: wrap;
      .full-width {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
      }
      .divided-width {
        width: 45%;
      }
    }
    .right {
      width: 25%;
      display: flex;
      flex-wrap: wrap;
    }
  }
`;

export default MainContainer;