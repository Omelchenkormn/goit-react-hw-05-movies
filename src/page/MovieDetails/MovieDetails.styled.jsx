import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const Header = styled.h2`
  padding-bottom: 15px;
  /* text-align: center; */
`;

export const Img = styled.img`
  width: 260px;
  height: 360px;
  padding-right: 15px;
  flex-basis: 25%;
  margin-bottom: 25px;
`;
export const Info = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 65%;
`;

export const TextScore = styled.p`
  padding-bottom: 10px;
`;
export const Genres = styled.h3`
  padding-bottom: 10px;
`;

export const AddInformation = styled.div`
  display: flex;
  /* flex-direction: column; */
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  padding-right: 10px;
  padding-top: 10px;
`;
export const Button = styled.button`
  margin-left: 82px;
  margin-bottom: 10px;
  width: 55px;
  height: 20px;
`;
