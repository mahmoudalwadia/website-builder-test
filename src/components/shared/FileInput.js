import React from 'react';
import styled from 'styled-components';

import { PageConsumer } from '../../store/PageContext';
import flex from '../../styles/flex';
import UploadIcon from '../../assets/images/upload.svg';

const TextInput = props => (
  <PageConsumer>
    {({ handleFileChange }) => (
      <Label>
        <Input type="file" name={props.name} onChange={handleFileChange} />
        <UploadImage src={UploadIcon} alt="upload icon" />
        <span>{props.text}</span>
      </Label>
    )}
  </PageConsumer>
);

export default TextInput;

const Input = styled.input`
  display: none;
`;
const Label = styled.label`
  width: 300px;
  border: 1px solid #e2e2e2;
  height: 30px;
  display: block;
  padding-left: 8px;
  font-size: 16px;
  color: #afafaf;
  border-radius: 4px;
  background-color: #fff;
  ${flex.horizontal}
  ${flex.centerHorizontalV}
  &:hover {
    cursor: pointer;
  }
`;

const UploadImage = styled.img`
  width: 20px;
  margin-right: 10px;
`;
