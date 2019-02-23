import React from 'react';
import styled, { ThemeProvider } from 'styled-components';

import FormBuilder from './components/FormBuilder';
import PagePreview from './components/PagePreview';
import { PageProvider } from './store/PageContext';
import flex from './styles/flex';
import { theme } from './utils';

const App = () => (
  <ThemeProvider theme={theme}>
    <PageProvider>
      <Wrapper>
        <HeaderTitle>Website Builder</HeaderTitle>
        <FormBuilder />
        <PreviewTitle>Page Preview</PreviewTitle>
        <PagePreview />
      </Wrapper>
    </PageProvider>
  </ThemeProvider>
);

export default App;

const Wrapper = styled.div`
  ${flex.centerVertical}
  ${flex.vertical}
`;
const HeaderTitle = styled.h2`
  color: ${props => props.theme.colors.textTitle};
  margin-top: 50px;
`;
const PreviewTitle = styled.h3`
  color: ${props => props.theme.colors.textTitle};
  margin-top: 20px;
  margin-bottom: 0px;
`;
