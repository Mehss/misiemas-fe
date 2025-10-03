import React from 'react'

import {
  Column, Row, Name, Content,
  OverviewCard, OverviewTop, OverviewBottom, Logo, Image, Title,
} from './style'

const ProjectOverview = ({ globalState }) => {
  const project = globalState?.project

  
  
  const formatIDR = (amount:any) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
    }).format(amount)
  }

  return (
    <>
      <OverviewCard>
      </OverviewCard>
    </>
  )
}

export default ProjectOverview
