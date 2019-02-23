import React from 'react';
import styled from 'styled-components';

import { TextInput, MainButton, FileInput } from './shared';
import { PageConsumer } from '../store/PageContext';
import flex from '../styles/flex';

const FormBuilder = props => (
  <PageConsumer>
    {({ page, handleSubmit }) => (
      <Form onSubmit={handleSubmit}>
        <TextInputWrapper>
          <FileInput name="imgLink" text="Image File uploader " />
        </TextInputWrapper>
        <TextInputWrapper>
          <TextInput
            value={page.bannerText}
            name="bannerText"
            placeholder="Banner Heading Text"
            required={true}
          />
        </TextInputWrapper>
        <TextInputWrapper>
          <TextInput
            value={page.actionText}
            name="actionText"
            placeholder="Call To Action Text"
            required={true}
          />
        </TextInputWrapper>
        <ButtonWrapper>
          <MainButton text="Export" type="submit" />
        </ButtonWrapper>
      </Form>
    )}
  </PageConsumer>
);

export default FormBuilder;

const Form = styled.form`
  ${flex.vertical}
`;
const TextInputWrapper = styled.div`
  margin-top: 15px;
`;
const ButtonWrapper = styled.div`
  margin-top: 20px;
`;
