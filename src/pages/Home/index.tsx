import React from 'react'

import { Menu, MenuItem } from '@material-ui/core'
import { KeyboardArrowDown,InfoOutlined } from '@mui/icons-material'

import { getInitialName, getNickName } from '~/utils/string-func'

import useCustom from './hooks'
import {
  DesignText, DesignBox, ImagePMS,
  Container, Row, ColomnLeft, ColomnRight,
  WelcomeText, LiveText, LpmsText, EnvText, ListContainer,
  ListContainerColomn, ListContainerBox, ImageLPMS, ImageTripatra, Header,
  SidebarInformation, SidebarUser, SidebarUserSignature, SidebarUserTitle,
  ListContainerInternal, InfoLearning,TextLearn
} from './style'

const HomePage = () => {
  const { handleHome, open, profileName, handleLogout, handleDirectProfile, anchorEl, handleOpen, handleClose, userData } = useCustom()
  const initial = getInitialName(profileName)
  const censor = getNickName(profileName)
  return (
    <Container>
      {/* <Header src='/public/images/header-home.png' /> */}
      <Row>
        <ColomnLeft>
          <SidebarInformation>
            <SidebarUser onClick={handleDirectProfile}>
              <SidebarUserSignature>{initial}</SidebarUserSignature>
              <SidebarUserTitle>
                {censor}
                <br />
                <span>Staff</span>
              </SidebarUserTitle>
            </SidebarUser>
            <KeyboardArrowDown style={{ fontSize: '3vmin' }} onClick={handleOpen} />
            <Menu open={open} anchorEl={anchorEl} onClose={handleClose}>
              <MenuItem onClick={handleDirectProfile}>Admission</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </SidebarInformation>
          <WelcomeText>
            Welcome to
          </WelcomeText>
          <LiveText>
            MASMINDO INTEGRATED SAFETY IMPROVEMENTS <br/>
            & ENTERPRISE MANAGEMENT SYSTEM
          </LiveText>
          <LpmsText >
            (MISI EMAS) 
          </LpmsText>
          <EnvText>
            Select the Environment.
          </EnvText>
          <ListContainer>
            {userData && userData.authProvider == '1' ?
              <ListContainerInternal>
                <ListContainerBox onClick={() => handleHome()}>
                  <ImageLPMS src='/public/images/lpms-dct.png' />
                </ListContainerBox>
              </ListContainerInternal>
              :
              <>
                <ListContainerColomn>
                  <ListContainerBox onClick={() => handleHome()}>
                    <ImageLPMS src='/public/images/lpms-dct.png' />
                  </ListContainerBox>
                  <ListContainerBox onClick={() => window.open('https://lpms-app-tripatra.azurewebsites.net/lpms-app/', '_blank', 'noreferrer')}>
                    <ImageLPMS src='/public/images/lpms-app.png' />
                  </ListContainerBox>
                </ListContainerColomn>
              </>
            }
          </ListContainer>
          <InfoLearning onClick={() => window.open('https://xapiens.sharepoint.com/sites/TP-EPC/_layouts/15/guestaccess.aspx?share=EX25Ke7f-g1JmYQntaa7FaAB8CiC-eHvLmgzIdyzubG92Q&e=ndECiB&nav=eyJyZWZlcnJhbEluZm8iOnsicmVmZXJyYWxBcHAiOiJTdHJlYW1XZWJBcHAiLCJyZWZlcnJhbFZpZXciOiJTaGFyZURpYWxvZy1MaW5rIiwicmVmZXJyYWxBcHBQbGF0Zm9ybSI6IldlYiIsInJlZmVycmFsTW9kZSI6InZpZXcifX0%3D')}>
            <InfoOutlined/>
            <TextLearn>Click here to watch tutorial video</TextLearn>
          </InfoLearning>
          <DesignText>Designed and developed by :</DesignText>
          <DesignBox>
            <ImagePMS src='/public/images/fldp-logo.png' />
          </DesignBox>
        </ColomnLeft>
      </Row>
    </Container >
  )
}

export default HomePage
