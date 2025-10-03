import React from 'react'

import {
  DivParent,
  TitleContent,
  TextContent,
  CustomContent,
  DivLeft,
  DivRight,
  DivChild,
  ContentLeft,
  ContentRight,
  ContentBottom,
} from './style'

const ProgressBar = ({ height, borderRad, bgColor, width, actual, total, percentage, BQ }) => {
  return (
      <>
        <TitleContent>
          <ContentLeft>
            Actual
          </ContentLeft>
          <ContentRight>
            Total
          </ContentRight>
        </TitleContent>
        <TextContent>
          <DivLeft>
            {`${actual}`}
          </DivLeft>
          <DivRight>
            {`${total}`}
          </DivRight>
            </TextContent>
        <DivParent
          height={`${height}`}
        >
          <DivChild
            borderRad={`${borderRad}`}
            bgColor={`${bgColor}`}
            width={`${width}`}
          >
            <CustomContent>
              {`${percentage}`}
            </CustomContent>
          </DivChild>
        </DivParent>
        <ContentBottom>
          Remaining BQ: {`${BQ}`}
        </ContentBottom>
      </>
  )
}

export default ProgressBar