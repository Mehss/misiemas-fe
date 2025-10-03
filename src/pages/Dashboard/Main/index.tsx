import React from 'react'

import {
  CardList,
  CardWrapper,
  CardContainer,
  CardLogo,
  CardTimeRemaining,
  CardIcon,
  CardText,
  CardText2,
  CardTitle,
  CardRow,
  CardActive,
  CardInactive,
} from './style'

const Card = ({ item, handleClickCard }) => {
  return (
    <CardList>
      {item.map((val, index) =>
        <div key={index} onClick={() => handleClickCard(val)}>
          <CardWrapper
            key={index}
          >
            <CardContainer>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '1vh'
              }}>
                {/* <CardLogo
                  src='/public/images/icons/folders.png'
                /> */}
                <CardActive />
              </div>
              {/* <CardTimeRemaining backgroundColor='#EBF8E7'>
                {
                    <CardText textColor='#10AB3C'>
                      <CardIcon src='/public/images/icons/urgent.png' />
                      Active
                    </CardText>
                }
              </CardTimeRemaining> */}
              <CardTitle>
                {val.projectName}
              </CardTitle>
              <CardRow>
                <CardText2>
                  {/* <CardIcon
                    src='/public/images/icons/place.png'
                  /> */}
                  {val.description}
                  {/* {val?.plantLocation ? val?.plantLocation : '-'} */}
                </CardText2>
                {/* <CardText2>
                  <CardIcon
                    src='/public/images/icons/calendar.png'
                  />
                  Start: <b>{val?.contractEffDate ? val?.contractEffDate.split(" ")[0] : '-'}</b>
                  <br />
                  Duration: <b>{val?.contractDuration ? val?.contractDuration : '-'}</b>
                </CardText2> */}
              </CardRow>
            </CardContainer>
          </CardWrapper>
        </div>
      )
      }
    </CardList >
  )
}

export default Card