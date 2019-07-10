import styled from '@emotion/styled'
import { colours, textStyles } from '../../styles/global-layout'

export const OuterLayout = styled.div`
  width: 100%;
  background-color: ${colours.backgroundBlack};
  min-height: 835px;
  position: relative;
`

export const ArticleControls = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  height: 700px;
  width: 100%;
  margin-top: 50px;
  overflow: hidden;
`

export const ChevronWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  width: 200px;
  cursor: pointer;
  z-index: 1000;
  color: ${colours.iconGrey};
  > svg {
    width: 24px;
  }
`

export const Articles = styled.div`
  justify-content: center;
  position: relative;
  height: 700px;
  width: 750px;
  user-select: none;
`

export const ArticleWrapperAnchor = styled.a`
  text-decoration: none;
  overflow-y: hidden;
`

export const ArticleWrapperDiv = styled.div<any>`
  position: absolute;
  left: ${(props: any): string => {
    return `${37 + props.focusLevel * 20}`
  }}%;
  width: 418px;
  height: ${(props: any): string => (props.background ? '528px' : '568px')};
  overflow: hidden;
  z-index: ${(props: any): string => {
    return `${100 - Math.abs(props.zLevel) * 10}`
  }};
  margin-right: -130px;
  margin-left: -130px;
  top: ${(props: any): string => (props.background ? '68px' : '48px')};
  box-shadow: 2px 2px 12px 2px rgba(0, 0, 0, 0.82);
  transition: all 0.2s ease-out;
  @media (max-width: 768px){
    max-width: 350px;
  }
`

export const ArticleCover = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  z-index: 99;
`

export const ArticleCard = styled.div`
  width: 100%;
  height: 568px;
  border-radius: 4px;
  background-color: ${colours.textWhite};
  overflow: auto;
  overflow-y: hidden;
  @media only screen (max-width: 768px){
    max-width: 300px;
  }
`

export const SplashImage = styled.div`
  width: 100%;
  height: 281px;
`

export const ArticleDescription = styled.div<any>`
  height: 233px;
  background-color: ${colours.textWhite};
  padding: ${(props: any): string =>
    props.background ? '10px 28px 10px 28px' : '28px 28px 20px 28px'};
  position: relative;
  transition: all 0.2s ease;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const ArticleTitle = styled.p`
  ${textStyles.blackArticleHeader}
  margin-top: 0px;
  margin-bottom: 14px;
  max-height: 84px;
`

export const ArticleBlurb = styled.p`
  ${textStyles.greyArticleSubtitle}
  height: 63px;
  overflow: auto;
  margin-top: 0px;
`

export const LinkButtonWrapper = styled.div`
  display: flex;
  position: absolute;
  bottom: 20px;
  right: 28px;
  align-items: center;
  justify-content: center;
  width: 214px;
  height: 44px;
  border-radius: 12px;
  border: solid 2px ${colours.darkBlue};
  cursor: pointer;
  > p {
    text-align: center;
    margin-bottom: 20px;
    font-size: 20px;
    font-weight: bold;
    color: ${colours.darkBlue};
    > svg {
      margin-left: 8px;
      height: 12px;
      width: 13px;
    }
  }
`
