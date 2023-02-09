import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;

  a {
    color: #dfdfdf;
    text-decoration: none;
  }

  img {
    border-radius: 20px;
  }

  header {
    position: fixed;
    z-index: 1;
    top: 0;
    right: 0;
    width: 100%;
    padding: 15px 35px;

    background-color: rgba(99, 99, 108, 70%);
    box-shadow: 5px 0 5px black;

    & ul {
      display: flex;
      gap: 15px;
    }

    .link {
      width: 100px;
      display: inline-block;
      text-align: center;
      padding: 5px;

      font-size: 20px;
      font-weight: 500;
      color: #fff;
      border: none;
      border-radius: 5px;

      &.active {
        color: red;
      }

      &:hover:not(.active) {
        text-decoration: underline;
      }
    }
  }
`;

export const Main = styled.main`
  padding: 0 15px 15px;
  margin-top: 75px;
`;
