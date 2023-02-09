import styled from 'styled-components';

export const Div = styled.div`
  display: grid;
  gap: 15px;
  position: relative;

  a {
    &:hover,
    &:focus {
      background-color: #d3d5ff40;
      border-radius: 10px;
      box-shadow: 3px 0 3px grey;
    }
  }

  .backLink {
    position: fixed;
    z-index: 1;
    top: 10px;
    right: 10px;
    padding: 10px;
    display: flex;
    justify-content: center;
    text-align: end;
    align-items: center;
    gap: 20px;

    font-size: 20px;
    border: 2px solid #d3d5ff40;
    border-radius: 10px;
    color: white;

    &:hover,
    &:focus {
      background-color: rgba(103, 102, 105, 100%);
    }
  }

  img {
    max-width: 300px;
  }

  .movie-details {
    display: flex;
    justify-content: space-between;
    gap: 15px;

    h2 {
      text-align: center;
      font-size: 50px;
    }
  }

  .details-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

    .info-title {
      font-size: 18px;
      font-weight: 700;
    }

    .genres {
      text-decoration: none;
    }
  }

  .links {
    display: flex;
    justify-content: space-around;
    margin-top: 15px;

    & a {
      padding: 10px;
      color: blue;
      text-decoration: underline;

      &.active {
        color: red;
      }
    }
  }
`;
