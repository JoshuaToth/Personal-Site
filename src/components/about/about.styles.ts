import { css } from '@emotion/core';
import styled from '@emotion/styled';
import { colours, GlobalLayout, textStyles } from '../../styles/global-layout';
import { Size } from './tag';

export const OuterLayout = styled.div`
  width: 100%;
  background-color: ${colours.textWhite};
  min-height: 772px;
`;

export const BodyWrapper = styled.div`
  max-width: 600px;
  > h2 {
    ${textStyles.blackHeader}
    margin-bottom: 0px;
  }
  > p {
    margin-top: 0px;
    ${textStyles.blackMain}
  }
`;

export const TagsSection = styled.div`
  max-width: 800px;
  padding-bottom: 20px;
`;

export const TagsCollection = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

export const TagWrapper = styled.div`
  ${textStyles.tagFont};
  display: inline-block;
  margin-top: 20px;
  margin-right: ${(props: any): string => props.size === Size.large ? '30px' : '16px'};
  border: ${(props: any): string => props.size === Size.large ? '3px' : '1px'} solid ${colours.darkBlue};
  font-size: ${(props: any): string => props.size === Size.large ? '26px' : '16px'};
  border-radius: 30px;
  padding-top: ${(props: any): string => props.size === Size.large ? '10px' : '6px'};
  padding-bottom: ${(props: any): string => props.size === Size.large ? '10px' : '6px'};
  padding-right: 30px;
  padding-left: 30px;
  text-align: center;
  ${(props: any): string => props.size === Size.large ? '' : 'min-width: 58px'};
`;
