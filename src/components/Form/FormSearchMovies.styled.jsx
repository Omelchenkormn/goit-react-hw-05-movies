import styled from '@emotion/styled';
import { Field } from 'formik';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;

export const EntryField = styled(Field)`
  height: 31px;
  width: 150px;
  font-size: 15px;
  outline: none;
`;

export const Button = styled.button`
  height: 30px;
  width: 65px;
  font-size: 15px;
  margin-left: 5px;
`;
