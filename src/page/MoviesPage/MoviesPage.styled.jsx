import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wraper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding-top: 20px;
`;
export const List = styled.li`
  width: 900px;
  height: 140px;
  background-color: #e5e4e4;
  margin-bottom: 10px;
  display: flex;
  border: 2px solid white;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
  }
`;
export const IMG = styled.img`
  width: 280px;
`;
export const UL = styled.ul`
  margin: 0 auto;
  width: 900px;
`;

export const Title = styled.h2`
  font-size: 25px;
  color: black;
  text-align: center;
  padding-left: 10px;
  padding-top: 10px;
  text-decoration: none;
`;

export const Links = styled(Link)`
  text-decoration: none;
`;
