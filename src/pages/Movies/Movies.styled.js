import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  color: #fff;

  form {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 300px;
    margin-bottom: 10px;
  }

  input {
    width: 80%;
    height: 45px;
    padding: 7px;

    color: black;
    font-size: 17px;
    background-color: #b6baff14;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    border: 2px solid black;
    border-right: none;

    &:hover,
    &:focus {
      background-color: #d3d5ff40;
    }
  }

  button {
    width: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;

    background-color: lightgrey;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: none;
    border-top-left-radius: none;
    border: none;

    &:hover {
      cursor: pointer;
      background-color: grey;
      font-weight: 600;
      color: white;
    }
  }

  ul {
    display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;

  li {
    text-align: center;
  }

  img {
    border: 2px solid lightgrey;
  }

  h3 {
    margin-top: 15px;
    color: black;
    text-shadow: 5px 5px 5px grey;
  }
`;
