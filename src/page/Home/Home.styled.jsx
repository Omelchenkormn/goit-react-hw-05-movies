import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
`;

export const Card = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ListItems = styled.li`
  list-style: none;
  margin-bottom: 20px;
  text-align: center;
  flex-basis: 23%;
  /* box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12); */
`;

export const ListTitle = styled(Link)`
  text-decoration: none;
  width: 270px;
  color: black;
  :hover {
    color: blue;
  }
`;
export const Image = styled.img`
  padding-bottom: 10px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  :hover {
    transform: scale(1.03);
  }
`;

export const Header = styled.h1`
  margin-bottom: 20px;
`;
