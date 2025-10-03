import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { capitalizeWords } from '~/utils/string-func'

import { subcategories } from './helper'
import useCustom from './hooks'
import {
  Container,
  Row,
  Title,
  CategoryWrapper,
  CategoryList,
  CategoryIcon,
  CategoryName,
} from './style'

const SubCategoryDiscipline = () => {
  const history = useHistory()
  const { handleClickSubcategory, globalState, handleRefectRedux } = useCustom()
  const subCategory = [...new Set(globalState?.subCategory?.map(item => item.projectSubCategory))]
  useEffect(() => {
    if (globalState?.url !== '') {
      handleRefectRedux()
    }
  })

  if (globalState?.project == null) {
    history.push('/')
  }
  const path = {
    'discipline_id': 0,
    'discipline_name': 'General',
    'discipline_image': '/public/images/icons/subcategories/general.png',
    'discipline_url': 'general',
    'active': true,

  }
  return (
    <Container>
      <Row>
        <Title>
          Select Category
        </Title>
      </Row>
      <CategoryWrapper>
        {subCategory?.map((item: string = '-') => {
          var text = item == "-" || item == "" ? 'Others' : item.toUpperCase()
          const subcategory = subcategories?.find(value => capitalizeWords(value.discipline_name) == capitalizeWords(item))
          const page = globalState?.subCategory?.filter(value1 => value1.projectSubCategory == item)
          if (subcategory) {
            return (
              <div key={subcategory.discipline_id} onClick={() => handleClickSubcategory(subcategory, page)}>
                <CategoryList
                  key={subcategory.discipline_id}
                  style={{ cursor: subcategory.active || subcategory.discipline_id === 1 ? 'pointer' : 'not-allowed' }}
                >
                  <CategoryIcon
                    src={subcategory.discipline_image}
                  />
                  <CategoryName>
                    {text}
                  </CategoryName>
                </CategoryList>
              </div>
            )
          }
          return (
            <div key={path.discipline_id} onClick={() => handleClickSubcategory(subcategory, page)}>
              <CategoryList
                key={path.discipline_id}
                style={{ cursor: path.active || path.discipline_id === 1 ? 'pointer' : 'not-allowed' }}
              >
                <CategoryIcon
                  src={path.discipline_image}
                />
                <CategoryName>
                  {text}
                </CategoryName>
              </CategoryList>
            </div>
          )
        }
        )}
      </CategoryWrapper>
    </Container>
  )
}

export default SubCategoryDiscipline