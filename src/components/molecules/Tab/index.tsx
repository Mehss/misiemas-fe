import React from 'react'

import {
  Wrapper,
  List,
} from './style'

const Tab = ({ filteredItem, projectsCategories, category }) => {
  return (
    <>
      <Wrapper>
        {projectsCategories.filter((e)=> e !== '').map((val, project_id) => {
          return (
            <List
              key={project_id}
              onClick={() => filteredItem(val)}
              isSelected={val === category}
            >
              {val}
            </List>
          )
        })}
        {/* <List
          isSelected={false}
          disabled={true}
        >
          O&M
        </List> */}
        {/* <List
          isSelected={false}
          disabled={true}
        >
          Corporate
        </List> */}
        {/* <List
          isSelected={category === ''}
          onClick={() => filteredItem('')}
        >
          All
        </List> */}
      </Wrapper>
    </>
  )
}

export default Tab