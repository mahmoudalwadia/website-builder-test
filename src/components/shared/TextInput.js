import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { PageConsumer } from '../../store/PageContext';

const TextInput = props => (
  <PageConsumer>
    {({ handleChange }) => (
      <Input
        type="text"
        name={props.name}
        onChange={handleChange}
        placeholder={props.placeholder}
        value={props.value}
      />
    )}
  </PageConsumer>
);

TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired
};

export default TextInput;

const Input = styled.input`
  width: 300px;
  border: 1px solid ${props => props.theme.colors.cardBorder};
  height: 30px;
  padding-left: 8px;
  font-size: 16px;
  color: ${props => props.theme.colors.inputText};
  border-radius: 4px;
  &::-webkit-input-placeholder {
    color: ${props => props.theme.colors.inputPlaceholder};
  }
`;
