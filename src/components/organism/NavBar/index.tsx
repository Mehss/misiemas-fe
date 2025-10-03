/* eslint-disable unused-imports/no-unused-vars */
import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'


import BreadcumbCustom from '~/components/molecules/BreadcumbCustom'
import { load } from '~/utils/localStorage'

import useCustom from './hooks'
import {
  NavbarContainer,
  NavbarWrapperLeft,
  NavbarWrapperRight,
  NavbarTitle,
  NavbarSubtitle,
  NavbarImage,
  NavbarBack,
} from './style'

const NavBar = () => {
  const { profileName } = useCustom()
  const username = profileName
  const location = useLocation()
  const history = useHistory()

  // const globalState = useSelector(selectors.selectState)
  //get project from LocalStorage
  const localStorageGlobalState = load("CURRENT_SELECTED_PROJECT")
  const [projectDefinition, setProjectDefinition] = useState(localStorageGlobalState?.projectDefinition)

  useEffect(() => {
    setProjectDefinition(localStorageGlobalState?.projectDefinition)
  }, [localStorageGlobalState])

  type LocationState = { title?: string; category?: string; subcategory: string }

  let currentTitle = ''
  // let currentCategory = ''
  // let currentSubcategory = ''

  if (location?.pathname !== '/dct') {
    const {
      title,
      // category, subcategory
    } = location?.state as LocationState || { title: '', category: '', subcategory: '' }
    currentTitle = title
    // currentCategory = category
    // currentSubcategory = subcategory
  }

  // const refreshPage = () => {
  //   window.location.reload()
  // }

  return (
    <>
      {location?.pathname !== '/home' &&
        <NavbarContainer>
          {location?.pathname === '/dct'
            ? (
              <NavbarWrapperLeft>
                <NavbarTitle>
                  {`Welcome Back, ${username}!`}
                </NavbarTitle>
                <NavbarSubtitle>
                  This is your project digital control tower
                </NavbarSubtitle>
              </NavbarWrapperLeft>
            ) : (
              <NavbarWrapperLeft>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <div onClick={history.goBack}>
                    <NavbarBack src='/public/images/icons/back.png' />
                  </div>
                  <div style={{lineHeight: '3vh'}}>
                    <NavbarTitle custom>
                      {currentTitle && currentTitle}
                      {/* {currentSubcategory ?  ' - ' + currentSubcategory : currentCategory ?  ' - ' +  currentCategory : ''} */}
                    </NavbarTitle>
                    <NavbarSubtitle custom>
                      {/* {currentTitle && 'Home / Main Menu'} {currentCategory && ' / ' + currentCategory } {currentSubcategory && ' / ' + currentSubcategory} */}
                      <BreadcumbCustom />
                    </NavbarSubtitle>
                  </div>
                </div>
              </NavbarWrapperLeft>
            )
          }
          <NavbarWrapperRight>
            <NavbarImage src='/public/images/logo-masmindo-horizontal-white.png' />
          </NavbarWrapperRight>
        </NavbarContainer>
      }
    </>
  )
}

export default NavBar