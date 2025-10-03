import { withStyles } from '@mui/styles'

const DropdownStyles = withStyles(() => ({
  '@global': {
    '.multiSelectContainer, .multiSelectContainer *, .multiSelectContainer :after, .multiSelectContainer :before .searchWrapper': {
        borderRadius: '10px',
        padding: '3rem'
    },
    '.highlightOption': {
        backgroundColor: '#F1FDF1'
    }
  },
}))(() => null)

export default DropdownStyles
