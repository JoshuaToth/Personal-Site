import { css } from '@emotion/core'
import styled from '@emotion/styled'

export enum colours {
  backgroundBlack = '#24272a',
  textWhite = '#ffffff',
  leatherBrown = '#cb966f',
  darkBlue = '#434c6c',
  textBlack = '#000000',
  textBodyBlack = '#191005',
  iconGrey = '#dfdfdf',
  subtitleGrey = '#7c7c7c',
  subtitleBlack = '#444444',
}

export const textStyles = {
  navigationText: css`
    font-size: 18px;
    font-weight: normal;
    color: ${colours.textWhite};
  `,
  whiteHeader: css`
    font-size: 40px;
    color: ${colours.textWhite};
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
  `,
  leatherHeader: css`
    font-size: 40px;
    color: ${colours.leatherBrown};
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
  `,
  whiteMain: css`
    font-size: 30px;
    color: ${colours.textWhite};
  `,
  whiteCopryight: css`
    font-size: 14px;
    color: ${colours.textWhite};
  `,
  blackMain: css`
    font-size: 18px;
    color: ${colours.textBodyBlack};
    font-family: 'Roboto', sans-serif;
  `,
  blackHeader: css`
    font-size: 18px;
    color: ${colours.textBodyBlack};
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
  `,
  tagFont: css`
    font-size: 16px;
    color: ${colours.darkBlue};
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
  `,
  blackArticleHeader: css`
    font-size: 26px;
    color: ${colours.textBlack};
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
  `,
  greyArticleSubtitle: css`
    font-size: 18px;
    color: ${colours.subtitleGrey};
    font-family: 'Roboto', sans-serif;
  `,
}

export const InnerLayout = styled.div`
  max-width: 910px;
	margin-left: auto;
	margin-right: auto;
	padding-left: 20px;
	padding-right: 20px;
`

export const GlobalLayout =  styled.div`
	max-width: 1400px;
	margin-left: auto;
	margin-right: auto;
	color: ${colours.textBlack};
	font-family: 'Roboto', sans-serif;
	font-weight: 300;
`

export const GlobalBack = css`
  body {
    background-color: black;
    margin: 0px;
  }
`

export const FirstWord = styled.h1`
  ${textStyles.whiteHeader}
  display: inline-block;
  padding-right: 14px;
  margin-bottom: 18px;
`

export const SecondWord = styled.h1`
  ${textStyles.whiteHeader}
  display: inline-block;
  margin-bottom: 18px;
`

export const BorderUnderline = styled.div`
  border-bottom: 4px solid ${colours.leatherBrown};
  width: 135px;
`

export const HeaderTextWrapper = styled.div`
  width: 135px;
  margin-bottom: 32px;
  padding-top: 1px;
`

export const HeaderText = styled.p`
  ${textStyles.leatherHeader}
  margin-bottom: 18px;
`
