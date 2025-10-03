import { styled } from '@mui/system'

import { colors, radius } from '~/styles/theme'

export const Row = styled('div')({
    display: 'flex',
    flexDirection: 'row'
})
export const Column = styled('div')({
    padding: 10,
    display: 'flex',
    flexDirection: 'column'
})
export const Content = styled('div')({
    flex: 1,
    margin: 10,
    padding: 20,
    display: 'flex',
    alignItems: 'center',
    borderRadius: radius.small,
    border: `1.5px dashed ${colors.blues.b300}`,
})