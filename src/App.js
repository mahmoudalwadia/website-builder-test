import React from 'react';
import styled from 'styled-components';

import FormBuilder from './components/FormBuilder';
import PagePreview from './components/PagePreview';
import { PageProvider } from './store/PageContext';
import flex from './styles/flex';

const App = () => (
  <PageProvider>
    <Wrapper>
      <HeaderTitle>Website Builder</HeaderTitle>
      <FormBuilder />
      <PreviewTitle>Page Preview</PreviewTitle>
      <PagePreview />
    </Wrapper>
  </PageProvider>
);

export default App;

const Wrapper = styled.div`
  ${flex.centerVertical}
  ${flex.vertical}
`;
const HeaderTitle = styled.h2`
  color: #333;
  margin-top: 50px;
`;
const PreviewTitle = styled.h3`
  color: #333;
  margin-top: 20px;
  margin-bottom: 0px;
`;
