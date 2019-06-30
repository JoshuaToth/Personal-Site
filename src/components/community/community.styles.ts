import styled from '@emotion/styled'
import { colours, textStyles } from '../../styles/global-layout'

export const OuterLayout = styled.div`
  width: 100%;
  background-color: ${colours.textWhite};
  min-height: 1650px;
`

export const CardOuterLayout = styled.div``

export const CardLayout = styled.div`
  border-radius: 4px;
  box-shadow: 4px 4px 11px 0 rgba(0, 0, 0, 0.34);
  min-height: 620px;
`

export const Title = styled.p`
  ${textStyles.blackHeader}
  font-size: 30px;
  margin-bottom: 0px;
`

export const Subtitle = styled.p`
  ${textStyles.blackMain}
  font-size: 16px;
  margin-top: 6px;
  margin-bottom: 26px;
  text-transform: uppercase;
  color: ${colours.subtitleBlack};
`

export const CardCopy = styled.div`
  padding: 16px 32px;
  ${textStyles.blackMain}
  min-height: 40px;
`

export const CardWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  @media only screen and (max-width: 900px) {
    justify-content: center;
  }
  > div {
    width: 435px;
  }
`
