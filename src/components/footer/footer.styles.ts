import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { colours, textStyles } from '../../styles/global-layout';

export const OuterLayout = styled.div`
  width: 100%;
  background-color: ${colours.backgroundBlack};
  min-height: 350px;
`;



export const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: row wrap;
  justify-content: space-between;
  max-width: 400px;
`;

export const TileWrapper = styled.div`
  color: ${colours.leatherBrown};
  margin-top: 40px;
  width: 150px;
  margin-right: 30px;
  > svg {
    width: 21px;
    height: 21px;
    margin-right: 17px;
  }
  > a {
    ${textStyles.navigationText}
    text-decoration: none;
  }
`;

export const Copyright = styled.p`
  ${textStyles.whiteCopryight}

  margin-top: 40px;
`;
