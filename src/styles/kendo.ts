import { withStyles } from '@mui/styles'

const KendoStyles = withStyles(() => ({
  '@global': {
    // '.k-cell-inner .k-link': {
    //   '@media (min-width: 800px)': {
    //     width: '1vw',
    //   },
    //   '@media (min-width: 1440px)': {
    //     width: '0.75vw',
    //   },
    //   '@media (min-width: 1680px)': {
    //     width: '0.75vw',
    //   },
    //   '@media (min-width: 1920px)': {
    //     width: '0.75vw',
    //   },
    // },
    '.k-grid-header .k-header': {
      backgroundColor: '#212D66',
      color: '#FFFFFF',
      fontSize: '14px',
      fontWeight: 600,
      textAlign: 'center',
      justifyContent: 'center',
      margin: 'auto',
      '@media (min-width: 800px)': {
        fontSize: '0.75vw',
      },
      '@media (min-width: 1360px)': {
        fontSize: '0.75vw',
      },
      '@media (min-width: 1440px)': {
        fontSize: '0.75vw',
      },
      '@media (min-width: 1600px)': {
        fontSize: '0.75vw',
      },
      '@media (min-width: 1920px)': {
        fontSize: '0.75vw',
      },
    },
    '.k-grid td': {
      color: '#OOOOOO',
      fontWeight: 600,
      justifyContent: 'center',
      textAlign: 'center',
      margin: 'auto',
      '@media (min-width: 800px)': {
        fontSize: '0.75vw',
      },
      '@media (min-width: 1360px)': {
        fontSize: '0.75vw',
      },
      '@media (min-width: 1440px)': {
        fontSize: '0.75vw',
      },
      '@media (min-width: 1600px)': {
        fontSize: '0.75vw',
      },
      '@media (min-width: 1920px)': {
        fontSize: '0.75vw',
      },
    },
    '.k-grid-footer td': {
      backgroundColor: '#B6C0F2',
      '@media (min-width: 800px)': {
        fontSize: '0.75vw',
      },
      '@media (min-width: 1360px)': {
        fontSize: '0.75vw',
      },
      '@media (min-width: 1440px)': {
        fontSize: '0.75vw',
      },
      '@media (min-width: 1600px)': {
        fontSize: '0.75vw',
      },
      '@media (min-width: 1920px)': {
        fontSize: '0.75vw',
      },
    }
  },
}))(() => null)

export default KendoStyles
