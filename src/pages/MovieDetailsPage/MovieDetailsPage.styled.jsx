import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MovieWrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  width: 1560px;
  max-width: 98%;
  padding: 2em 0;
`;

export const MovieContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 2em 0;
`;

export const FilmInfo = styled.div`
  padding: 20px;
  margin: 0 0 0 50px;
  background-color: rgba(0, 0, 0, 0.5);
  height: auto;
  border-radius: 10px;
  color: #fff;
`;

export const MovieImg = styled.img`
  border-radius: 10px;
`;

export const AdditionalInformation = styled.div`
  text-align: center;
  color: #fff;
`;

export const StyledLink = styled(NavLink)`
  font-size: 24px;
  font-weight: 700;
  color: #fff;
  text-decoration: none;
  &.active {
    color: brown;
  }
  &:hover:not(.active) {
    text-decoration: underline;
  }
  &:last-child {
    margin-left: 20px;
  }
`;

export const Container = styled.ul`
  display: flex;
  padding-left: 125px;
`;

export const Nav = styled.nav`
  padding: 20px 30px;
  -webkit-box-shadow: -2px -1px 15px 7px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: -3px -2px 30px 14px rgba(0, 0, 0, 0.425);
  box-shadow: -4px -3px 45px 21px rgba(0, 0, 0, 0.35);
`;

export const ButtonGoBack = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  color: #fff;
  background-color: red;
  &:hover {
    background-color: #fff;
    color: black;
  }
`;
