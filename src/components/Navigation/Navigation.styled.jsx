import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
text-decoration: none;
font-size: 24px;
font-weight: 700;
margin-right: 15px;
color: #fff;
&.active {
   color: red;
 }
&:hover:not(.active) {
   color: red;
 }
`;

export const Container = styled.ul`
  display: flex;
`;

export const Nav = styled.nav`
  padding: 20px 30px;
  box-shadow: 0px 15px 10px -15px red;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #000;
`;
