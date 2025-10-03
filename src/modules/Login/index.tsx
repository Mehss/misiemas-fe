import React from 'react'

import LoadingButton from '@mui/lab/LoadingButton'
import { Formik, Form, Field } from 'formik'

import CustomTextField from '~/components/molecules/Form/CustomTextField'
import { authHost } from '~/config'

import useCustom from './hooks'
import loginSchema from './schema'
import useStyle, {
  LoginButton, Container,
  Column, RightRow, ColumnLogo, Image, ImageTripatra,
  TextLeft, BoxLeft, ImagePMS, Text, BoxContainer, BoxChild, BoxInput, BoxButton
} from './style'

const Signin = () => {
  const { methods, error } = useCustom()
  const { classes } = useStyle()
  const ssoLink = `${authHost}/user/oauth2/user/ieg_login/`

  return (
    <>
      <Container>
        <RightRow className={classes.content}>
          <Column>
            <ColumnLogo>
              <Image src='/public/images/logo-misiemas.png' style={{ marginRight: '24px' }} />
              <ImageTripatra src='https://masmindo.co.id/_next/image?url=%2Fimages%2Flogo-mda-white.svg&w=256&q=75' />
            </ColumnLogo>
            <Text>
              Login to Your Account
            </Text>
            {/* <Text types="h5" color="#241F61" margin='0 0 3vh 0'>
              One Account For Your Digital Control Tower
            </Text> */}
            {
              error ?
              <p style={{'color': 'red', 'margin': '0 1em'}}>
                Wrong email or password, please try again
              </p> : null
            }
            <BoxContainer>
              <Formik
                initialValues={{
                  keepSignIn: false,
                  password: '',
                  username: '',
                }}
                validationSchema={loginSchema}
                onSubmit={methods.handleSubmitLogin}
              >
                {({ isSubmitting }) => (
                  <Form>
                    <BoxInput>

                      <Field
                        fullWidth
                        component={CustomTextField}
                        className={classes.textField}
                        data-testid="input-username"
                        data-testid-helpertext="error-username"
                        labelText="Email"
                        name="username"
                        placeholder="Enter your email"
                        type="text"
                      />
                      <Field
                        fullWidth
                        component={CustomTextField}
                        className={classes.textField}
                        data-testid="input-password"
                        data-testid-helpertext="error-password"
                        labelText="Password"
                        name="password"
                        placeholder="Enter your password"
                        type="password"
                      />

                      <BoxChild>
                        <a style={{ color: '#758091', fontSize: '1.3vmin' }}
                          className={classes.resetPass}
                          href={`${authHost}/user/forgot-password`}
                        >
                          Forgot Password?
                        </a>
                      </BoxChild>
                      <LoadingButton
                        fullWidth
                        sx={{
                          mt: 1,
                          textTransform: 'none'
                        }}
                        data-testid="btn-submit-login"
                        loading={isSubmitting}
                        className={classes.buttonLogin}
                        type="submit"
                        variant="contained"
                        style={{minHeight: '20px'}}
                      >
                        Sign in
                      </LoadingButton>
                    </BoxInput>
                  </Form>
                )}
              </Formik>
            </BoxContainer>
            <TextLeft>Designed and developed by :</TextLeft>
            <BoxLeft>
              <ImagePMS src='/public/images/fldp-logo.png' />
            </BoxLeft>
          </Column>
        </RightRow>
      </Container>
    </>
  )
}

export default Signin
