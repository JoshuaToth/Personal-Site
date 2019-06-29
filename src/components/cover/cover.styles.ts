import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { colours, GlobalLayout, textStyles } from '../../styles/global-layout'

export const OuterLayout = styled.div`
  width: 100%;
  background-color: ${colours.backgroundBlack};
  min-height: 559px;
`

export const CoverLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${textStyles.navigationText}
  height: 105px;
  > svg {
    width: 64px;
    opacity: 0.3;
  }
`

export const NavigationWrapper = styled.div`
  > p {
    display: inline-block;
    margin-left: 30px;
  }
`

export const ContentWrapper = styled.div`
  ${textStyles.navigationText}
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 454px;
`

export const Description = styled.p`
  ${textStyles.whiteMain}
`

export const ImageWrapper = styled.div`
  width: 242px;
  border-radius: 121px;
  overflow: hidden;
`
