import styled from '@emotion/styled'
import { css } from "@emotion/core"
import { colours, textStyles } from "../../styles/global-layout"

export const OuterLayout = styled.div`
  width: 100%;
  background-color: ${colours.textWhite};
  min-height: 1520px;
`;

export const CardOuterLayout  = styled.div`
`;

export const CardLayout = styled.div`
  border-radius: 4px;
  box-shadow: 4px 4px 11px 0 rgba(0, 0, 0, 0.34);
`;


export const Title = styled.p`
  ${textStyles.blackHeader}
  font-size: 30px;
  margin-bottom: 0px;
`;

export const Subtitle = styled.p`
  ${textStyles.blackMain}
  font-size: 16px;
  margin-top: 6px;
  margin-bottom: 26px;
  text-transform: uppercase;
  color: ${colours.subtitleBlack}
`;

export const CardCopy  = styled.div`
  margin: 32px;
  min-height: 40px;
  > p {
  }
`;

export const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  @media only screen and (max-width: 900px)  {
    justify-content: center;
  }
  > div {
    width: 435px;
  }
`;

