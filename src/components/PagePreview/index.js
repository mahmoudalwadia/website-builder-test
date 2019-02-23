import React from 'react';

import { MainButton } from '../shared';
import { PageConsumer } from '../../store/PageContext';
import {
  Wrapper,
  HeaderWrapper,
  HeaderImgWrapper,
  HeadingTextWrapper,
  ButtonWrapper
} from './styles';

const PagePreview = props => (
  <PageConsumer>
    {({ page }) => (
      <Wrapper id="content">
        <HeaderWrapper>
          <HeaderImgWrapper ImgUrl={page.imgLink}>
            {!page.imgLink && <span>Banner Image</span>}
          </HeaderImgWrapper>
        </HeaderWrapper>
        <HeadingTextWrapper>{page.bannerText}</HeadingTextWrapper>
        <ButtonWrapper>
          <MainButton type="Button" text={page.actionText} fontSize="12" />
        </ButtonWrapper>
      </Wrapper>
    )}
  </PageConsumer>
);

export default PagePreview;
