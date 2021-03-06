import React from 'react';
import styled from 'styled-components';

const MainButton = props => (
  <Button type={props.type} fontSize={props.fontSize}>
    <Span>{props.text}</Span>
  </Button>
);

export default MainButton;

const Button = styled.button`
  min-width: 110px;
  max-width: 150px;
  background: ${props => props.theme.colors.primary};
  border: none;
  padding: 9px 5px;
  font-size: ${props => (props.fontSize ? props.fontSize : 16)}px;
  color: ${props => props.theme.colors.white};
  font-weight: 900;
  border-radius: 4px;
  transition: 0.5s;
  overflow: hidden;
  &:hover {
    cursor: pointer;
    background: ${props => props.theme.colors.ButtonHover};
  }
`;

const Span = styled.span`
  display: block;
  white-space: nowrap;
  overflow: hidden;
`;
