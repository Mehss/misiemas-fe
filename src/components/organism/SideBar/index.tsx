import React, { useEffect, useState } from 'react'
import { useHistory, useLocation } from 'react-router-dom'

import { Menu, MenuItem } from '@material-ui/core'
import { Home, BarChart } from '@mui/icons-material'

import { load } from '~/utils/localStorage'
import { getInitialName, getNickName } from '~/utils/string-func'



import useCustom from './hooks'
import useModal from './ModalChat'
import { data } from './ModalChat/helper'
import {
  SidebarWrapper,
  SidebarContainerTop,
  SidebarContainerMiddle,
  SidebarContainerBottom,
  SidebarBrands,
  SidebarNavigation,
  SidebarIcon,
  // SidebarCategory,
  SidebarContent,
  // SidebarContext,
  // SidebarContexts,
  // SidebarContextss,
  SidebarContactPerson,
  SidebarCPText,
  SidebarCPIcon,
  SidebarCPModal,
  SidebarCPModalClose,
  SidebarCPModalText,
  SidebarCPModalButton,
  SidebarCPModalIcon,
  SidebarCPModalMapping,
  SidebarCPModalListing,
  SidebarInformation,
  SidebarUser,
  SidebarUserSignature,
  SidebarUserTitle,
  PageText,
  PageTextJust
} from './style'

const SideBar = () => {
  const { isOpen, toggle } = useModal()
  const {
    open,
    anchorEl,
    handleOpen,
    profileName,
    handleClose,
    handleLogout,
    globalState,
    handleRefectRedux,
    handleDirectProfile,
    handleClickCategory,
  } = useCustom()

  const initial = getInitialName(profileName)
  const censor = getNickName(profileName)

  const location: any = useLocation()
  const history = useHistory()

  //get project from LocalStorage
  const localStorageGlobalState = load("CURRENT_SELECTED_PROJECT")
  const [projectDefinition, setProjectDefinition] = useState(localStorageGlobalState?.projectDefinition)

  useEffect(() => {
    setProjectDefinition(localStorageGlobalState?.projectDefinition)
  }, [localStorageGlobalState])

  const handleClick = () => {
    if (location?.pathname === '/dct') {
      history.push('/home')
    } else {
      history.push('/dct')
      handleRefectRedux()
    }
  }
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleOrientationChange = async () => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleOrientationChange)
    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange)
    }

  }, [])

  const trimString = (inputString, maxLength) => {
    if (inputString.length <= maxLength) {
      return inputString
    } else {
      return inputString.slice(0, maxLength) + '...'
    }
  }

  return (
    <>
      {location?.pathname !== '/home' &&
        <SidebarWrapper>
          <SidebarContainerTop>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
              <SidebarBrands src='/public/images/logo-misi-emas-white.png' />
            </div>
            <div onClick={handleClick}>
              <SidebarNavigation
                types="subtle"
                sizes="medium"
                isselected={
                  location.pathname === '/dct' ||
                    location.pathname === `/${projectDefinition}` ||
                    location.pathname === `/${projectDefinition}/construction` ?
                    1 : 0
                }
              >
                {/* {
                  location.pathname === '/dct' ||
                    location.pathname === `/${projectDefinition}` ||
                    location.pathname === `/${projectDefinition}/construction` ?
                    (
                      <SidebarIcon src="/public/images/icons/home_selected.png" />
                    ) : (
                      <SidebarIcon src="/public/images/icons/home_unselected.png" />
                    )
                } */}
                <Home style={{ marginRight: '0.3vw', height: '3vh' }} />
                {location?.pathname !== '/dct' ? 'Dashboard' : 'Home'}
              </SidebarNavigation>
            </div>
            {
              location.pathname === `/${projectDefinition}/weather`
                ? (
                  <div onClick={() => history.push({
                    pathname: `/${projectDefinition}/weather`,
                    state: {
                      title: location?.state?.title,
                      category: location?.state?.category,
                      subcategory: "Weather",
                    }
                  })}>
                    <SidebarNavigation
                      types="subtle"
                      sizes="medium"
                      isselected={location.pathname === `/${projectDefinition}/weather` ? 1 : 0}
                    >
                      {location.pathname === `/${projectDefinition}/weather` ? (
                        <SidebarIcon src="/public/images/icons/weather-selected.png" />
                      ) : (
                        <SidebarIcon src="/public/images/icons/weather-unselected.png" />
                      )}
                      Weather
                    </SidebarNavigation>
                  </div>
                ) : null
            }
          </SidebarContainerTop>
          <SidebarContainerMiddle>
            {/* 
              This part of the code will render a list of pages related to the project
              and will highlight the page that is currently being viewed.
              The list of pages are stored in the globalState object which is
              retrieved from the local storage. The pages are then mapped and rendered
              as a list of links. The link that is currently being viewed will be
              highlighted with a different background color and text color.
              The text of the link will be truncated if the window width is less than 900px
              to prevent the text from overflowing the sidebar. The font size of the text
              will also be adjusted based on the window width.
            */}
            {globalState && globalState?.page?.map(value => {
              const page = value.pageName
              return (
                <div onClick={() => handleClickCategory(value.url, page, location)}>
                  <SidebarContent
                    types="subtle"
                    sizes="medium"
                    isselected={page == globalState?.chart ? 1 : 0}
                  >
                    <div style={{ display: 'flex', alignItems: 'center'}}>
                      <BarChart style={{
                        backgroundColor: page == globalState?.chart ? '#776621ff' : '#D1D1D1',
                        color: page == globalState?.chart ? '#EEF1FF' : '#776621ff',
                        borderRadius: '0.2vmin',
                        marginRight: '0.5vw',
                        fontSize: windowWidth < 1000 ? '8px' : '17px'
                      }} />
                      <PageTextJust>
                        {windowWidth < 900?trimString(page, 18):page}
                      </PageTextJust>
                    </div>
                  </SidebarContent>
                </div>
              )
            })}
          </SidebarContainerMiddle>
        </SidebarWrapper>
      }
    </>
  )
}

export default SideBar
