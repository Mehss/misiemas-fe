import styled from 'styled-components'
import { makeStyles } from 'tss-react/mui'

import Button from '~/components/atoms/Button'
import { colors, fontSize } from '~/styles/theme'

export const Container = styled.div<{ background?: string }>`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/public/images/login-background.png');
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-color: ${({ background }) => background || colors.white};
  display: flex;
  justify-content: center;
`

export const RightRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
`

export const Column = styled.div<{ login?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  text-align: center;
  margin: 15vh 0;
  width: 25vw;
  min-width: 180px;
  height: 70vh;
  border-radius: 15px;
  background: url(/public/images/background-login.png);
  background-position: unset;
  background-repeat: no-repeat;
  background-color: #ffff;
  background-size: 16vw 1.5vh;
  @media only screen and (max-width: 900px) {
    @media only screen and (orientation: portrait) {
      min-height: 50vh;
      margin: 25vh 0;
      min-width: 210px;
    }
    @media only screen and (orientation: landscape) {
      min-height: 85vh;
      margin: 10vh 0;
      min-width: 200px;
    }
  }
  
  
`

export const ColumnLogo = styled.div<{ login?: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  text-align: center;
  gap: 0.5vw;
  margin-bottom: 3vh;
  @media only screen and (max-width: 900px) {
    margin-bottom: 1.5vh;
  }
`

export const LoginButton = styled(Button)`
  background-color: #ffff !important;
  height: 4vh;
  font-size: 1.5vmin !important;
  border: 0.2vmin solid #7dbe32 !important;
  color: #7dbe32 !important;
  gap: 1vmin;
  &:hover {
    background-color: #b89c30 !important;
  }
  @media only screen and (max-width: 900px) {
    height: 20px !important;
  }
`

export const Image = styled.img`
  width: 10vw;
  @media only screen and (max-width: 900px) {
    @media only screen and (orientation: portrait) {
      width: 20vw;
    }
  }
`
export const ImageTripatra = styled.img`
  width: 6vw;
  @media only screen and (max-width: 900px) {
    @media only screen and (orientation: portrait) {
      width: 12vw;
    }
  }
`

export const LeftRow = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  justify-content: center;
  left: 5vw;
  bottom: 10vh;
  align-items: center;
`

export const TextLeft = styled.div`
  color: #b89c30;
  font-size: 1.2vmin;
  margin-top: 4vh;
`

export const BoxLeft = styled.div`
  display: flex;
  justify-content: center;
`

export const ImagePMS = styled.img`
  width: 8vw;
  image-rendering: -webkit-optimize-contrast;
`

export const Text = styled.div`
  margin: 0 0 3vh 0;
  color: #241f61;
  font-size: 3vmin;
  font-weight: bold;
  @media only screen and (max-width: 900px) {
    margin: 0 0 0 0;
  }
`

export const BoxContainer = styled.div`
  width: 20vw;
  min-width: 140px;
`
export const BoxChild = styled.div`
  margin: 1vh 0 1vh 0;
  display: flex;
  justify-content: end;
  @media only screen and (max-width: 900px) {
    @media only screen and (orientation: portrait) {
      margin: 4vh 0 0vh 0;
    }
    @media only screen and (orientation: landscape) {
      margin: 7vh 0 0vh 0;
    }
  }
  
`
export const BoxInput = styled.div`
  margin: 0 0 1vh 0;
`
export const BoxButton = styled.div``

const style = makeStyles()((theme) => ({
  background: {
    background: `url("/images/login-bg.png")`,
    backgroundPosition: 'center',
    backgroundSize: '100% 100%',
    flexBasis: '100%',
    height: '100%',
    maxWidth: '100%',
  },
  buttonLogin: {
    height: '4vh',
    fontSize: '1.5vmin',
    color: '#776621ff',
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#776621ff !important',
      color: '#eef1ff !important',
    },
    border: '0.2vmin solid #776621ff !important'
  },
  content: {
    justifyContent: 'flex-end',
  },
  errorMessage: {
    color: theme.palette.error.main,
    fontSize: 20,
    // marginBottom: theme.spacing(3),
    marginTop: theme.spacing(3),
  },
  errorTitle: {
    fontWeight: theme.typography.fontWeightBold,
    marginRight: theme.spacing(1),
  },
  fleeto: {
    marginBottom: theme.spacing(3),
    height: 64,
  },
  formSection: {
    '& > div:not(:last-child)': {
      // marginBottom: theme.spacing(3),
    },
    display: 'flex',
    flexDirection: 'column',
    // marginTop: theme.spacing(3),
  },
  gridRoot: {
    height: '100vh',
    backgroundColor: colors.white,
  },
  logoGroup: {
    [theme.breakpoints.down('md')]: {
      maxWidth: 320,
    },
  },
  mocomine: {
    // marginBottom: theme.spacing(3),
    height: 100,
  },
  resetPass: {
    color: colors.blues.b75,
    // marginLeft: theme.spacing(2),
    fontSize: fontSize[14],
    textDecoration: 'none',
  },
  subTitle: {
    color: theme.palette.text.secondary,
    fontSize: 16,
    fontWeight: theme.typography.fontWeightRegular,
    // marginBottom: theme.spacing(7),
  },
  title: {
    fontSize: 20,
    fontWeight: theme.typography.fontWeightBold,
    // marginBottom: theme.spacing(3),
  },
  whiteCardBox: {
    backgroundColor: theme.palette.common.white,
    borderRadius: '8px',
    boxShadow: '1px 2px 8px 0px #D7E1F6',
    padding: theme.spacing(6),
  },
  textField: {
    '& .MuiInputBase-input': {
      background: colors.white,
      borderRadius: '5px',
    },
  },
}))

export default style
