import styled from 'styled-components';

import flex from '../../styles/flex';

export const Wrapper = styled.div`
  background-color: #fff;
  ${flex.vertical}
  ${flex.centerHorizontalV}
  width: 308px;
  margin-top: 20px;
  border: 1px solid ${props => props.theme.colors.cardBorder};
  border-radius: 2px;
`;
export const HeaderWrapper = styled.div`
  ${flex.horizontal}
  ${flex.centerHorizontalH}
  margin-top: 35px;
  width: 90%;
  height: 100px;
  border: 1px solid ${props => props.theme.colors.cardBorder};
  border-radius: 4px;
`;
export const HeaderImgWrapper = styled.div`
  ${flex.horizontal}
  ${flex.centerHorizontal}
  margin-top: 15px;
  width: 90%;
  height: 40px;
  border: 1px solid ${props => props.theme.colors.cardBorder};
  border-radius: 4px;
  background-image:url("${props => props.ImgUrl}");
  background-repeat: no-repeat, repeat;
  background-size: cover;
  color: ${props => props.theme.colors.textTitle};
`;

export const HeadingTextWrapper = styled.div`
  ${flex.horizontal}
  ${flex.centerHorizontal}
  margin-top: 15px;
  width: 90%;
  height: 30px;
  border: 1px solid ${props => props.theme.colors.cardBorder};
  border-radius: 3px;
  color: ${props => props.theme.colors.textTitle};
`;
export const ButtonWrapper = styled.div`
  ${flex.horizontal}
  ${flex.justifyEnd}
  width: 90%;
  margin: 20px 0;
`;
