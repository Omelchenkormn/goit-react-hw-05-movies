import styled from '@emotion/styled';

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export const List = styled.li`
  flex-basis: 18%;
  margin-bottom: 15px;
`;

export const Img = styled.img`
  width: 190px;
  height: 270px;
  transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  :focus {
    transform: scale(1.08);
  }
`;

export const Name = styled.h4`
  margin-top: 10px;
  font-size: 17px;
  font-weight: 600;
`;
export const Character = styled.p`
  margin-top: 10px;
  font-size: 17px;
  font-weight: 300;
`;
