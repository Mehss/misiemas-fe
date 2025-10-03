
import React from 'react'

import SearchBar from '~/components/molecules/SearchBar'
import Tab from '~/components/molecules/Tab'

import useProjectList from './hooks'
import Card from './Main'
import { Row, Container, Select, SelectActive, Dropdown, Title, Col2 } from './style'


const Dashboard = () => {
  const {
    projectsCategories, archiveHandler, filters, filteredProjects, loading,
    inputHandler, sortHandler, filteredItem, handleClickCard, clearInput
  } = useProjectList()

  // const dataFilter = filteredProjects

  const dataFilter = [
    {
      projectName: "Project Development",
      projectNo: "0000",
      projectDefinition: "05-S0000",
      description: "Project development related dashboards and reports"
    },
    {
      projectName: "Operation",
      projectNo: "0001",
      projectDefinition: "05-S0000",
      description: "Operations related dashboards and reports"
    },
  ]

  return (
    <>
      {/* {!loading &&
        <Row>
          <Tab
            filteredItem={filteredItem}
            projectsCategories={projectsCategories}
            category={filters?.projectCategory}
          />
          <Col2>
            <SelectActive>
              <Dropdown
                onChange={archiveHandler}
              >
                <option value={'active'}>Active</option>
                <option value={'inactive'}>Inactive</option>
                <option value={'all'}>All</option>
              </Dropdown>
            </SelectActive>
            <Select>
              <Dropdown
                onChange={sortHandler}
              >
                <option value={'desc'}>Latest</option>
                <option value={'asc'}>Oldest</option>
              </Dropdown>
            </Select>
            <SearchBar
              inputText={filters?.filter}
              inputHandler={inputHandler}
              placeholder={'Search a project'}
              clearInput={clearInput}
            />
          </Col2>
        </Row>
      } */}
      <Container>
        <Title>
          Select Category
        </Title>
        {loading ?
          <div>Loading Here ....</div>
          :
          <Card
            item={dataFilter}
            handleClickCard={handleClickCard}
          />}
      </Container>
    </>
  )
}

export default Dashboard