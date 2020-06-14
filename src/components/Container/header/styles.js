import styled from 'styled-components';

// const Left = styled.div`
//     display: flex;
//     justify-content: space-around;
//     width: 45%;
// `;

// const Right = styled.div`
//     display: flex;
//     justify-content: space-around;
//     width: 45%;
// `
const HeaderSection = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 1rem 0 0.5rem 0;
  align-items: center;
  box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.12);
  .left {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin: 0rem 0.5rem;
    .help {
      margin: 0 2rem;
    }
    .location {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      .image{
        margin-right: 0.5rem;
        img {
          width: 20px;
          height: 20px;
        }
      }
      p {
        margin-right: 0.5rem;
      }
      i {
        color: #bbbbbc;
      }
    }
  }
  .right {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 50%;
    input {
      width: 60%;
      border: 1px solid #dde4eb;
      padding: 0.5rem;
      margin-right: 1.5rem;
    }
    i {
      font-size: 1.2rem;
      margin-right: 1.5rem;
    }
    .profile{
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      img {
        width: 30px;
        height: 30px;
        margin-right: 0.5rem;
        border-radius: 50%;
      }
      i {
        color: #bbbbbc;
        font-size: 0.8rem;
      }
    }
  }
`;

export default HeaderSection;