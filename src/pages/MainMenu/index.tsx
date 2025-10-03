
import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

import { capitalizeWords } from '~/utils/string-func'

import { categories } from './helper'
import useCustom from './hooks'
import ProjectOverview from './ProjectOverview'
import {
  Container,
  Row,
  Title,
  CategoryWrapper,
  CategoryList,
  CategoryIcon,
  CategoryName,
} from './style'

const CategoryDiscipline = () => {
  const {dataCategories, globalState, projectPbiDataset, handleClickCategory, handleRefectRedux } = useCustom()
  const history = useHistory()
  useEffect(() => {
    if (globalState?.url !== '') {
      handleRefectRedux()
    }
  })
  if (globalState.project == null) {
    history.push('/')
  }

  const path = {
    'discipline_id': 0,
    'discipline_name': 'General',
    'discipline_image': '/public/images/icons/subcategories/general.png',
    'discipline_url': 'general',
    'active': true,
    'permission': 'TCT_OTHERS'

  }

  return (
    <Container>
      <Row>
        <Title>Select Category</Title>
      </Row>
      <CategoryWrapper>
        {dataCategories.length > 0 && dataCategories.map(value => {
          var text = value == "-" || value == "" ? 'Others' : value.toUpperCase()
          const category = categories?.find(item => capitalizeWords(item.discipline_name) == capitalizeWords(text))
          if (!category)
            return (
              <div
                key={path.discipline_id}
                onClick={() => handleClickCategory(path, projectPbiDataset.filter(value1 => value1.projectCategory == value))}
              >
                <CategoryList
                  key={path.discipline_id}
                  style={{
                    cursor: path.active || path.discipline_id === 12
                      ? 'pointer'
                      : 'not-allowed',
                  }}
                >
                  <CategoryIcon src={path.discipline_image} />
                  <CategoryName>{text}</CategoryName>
                </CategoryList>
              </div>
            )
          if (category) return (
            <div
              key={category.discipline_id}
              onClick={() => handleClickCategory(category, projectPbiDataset.filter(value1 => value1.projectCategory == value))}
            >
              <CategoryList
                key={category.discipline_id}
                style={{
                  cursor: category.active || category.discipline_id === 12
                    ? 'pointer'
                    : 'not-allowed',
                }}
              >
                <CategoryIcon src={category.discipline_image} />
                <CategoryName>{text}</CategoryName>
              </CategoryList>
            </div>
          )
        })}
      </CategoryWrapper>
      <ProjectOverview globalState={globalState} />
    </Container >
  )
}

export default CategoryDiscipline
