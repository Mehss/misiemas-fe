import loadable from '@loadable/component'

const LoginPage = loadable(() => import('~/pages/Login'))
const LoginNotAuthorizedPage = loadable(() =>
  import('~/pages/LoginNotAuthorized')
)
const SSOLoginPage = loadable(() => import('~/pages/SSOLogin'))

export default [
  {
    id: 'login-page',
    path: '/',
    component: LoginPage
  },
  {
    id: 'sso-login-page',
    path: '/sso/login',
    component: SSOLoginPage
  },
  {
    id: 'sso-login-authorized',
    path: '/not-authorized',
    component: LoginNotAuthorizedPage
  }
]
