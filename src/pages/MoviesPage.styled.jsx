import styled from 'styled-components';

export const Input = styled.input`
  width: 700px;
  height: 50px;
  padding-left: 10px;
  outline: none;
  border: none;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  &:hover {
    transition: all 250ms linear 0s;
    background-color: #fff;
  }
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  padding-top: 50px;
  padding-bottom: 30px;
`;

export const SearchButton = styled.button`
  display: inline-block;
  width: 68px;
  height: 52px;
  border: 0px;
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center center;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  cursor: pointer;
  outline: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;
  font-size: 0;
  background-color: #fff;
  &:hover {
    svg {
      transform: scale(1.1);
      transition: all 250ms linear 0s;
      background-color: #fff;
    }
  }
`;
