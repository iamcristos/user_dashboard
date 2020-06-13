import styled from 'styled-components';

const SideBarContainer = styled.div`
    width: 15%;
    background-color: blue;
    height: 100vh;
    display: flex;
    flex-wrap: wrap;
    overflow-y: scroll;
    flex-direction: column;

    .container {
    display: flex;
    flex-wrap: wrap;
    height: auto;
  }
`;

export {SideBarContainer}