import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 12px 15px;
` 

export const Navigation = styled.nav`
    display: flex;
    gap: 15px;
    color: black;
`

export const Link = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
  &:hover{
    color: black;
    background-color: #d8d8d8;
  }
`;

export const Section = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 30px 15px;
  box-shadow: 0px 1px 3px rgba(0,0,0,.12), 0px 1px 1px rgba(0,0,0,.14);
`