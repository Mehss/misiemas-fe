import React from 'react'

import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import { MenuItem } from '@mui/material'
import Button from '@mui/material/Button'

import { StyledMenu } from './style'

const Dropdown = ({ data, placeholder, handleDropdown, isSite, isWorkcat } : { data?: any, placeholder?: string, handleDropdown?: any, isSite?: boolean, isWorkcat?: boolean}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const [selected, setSelected] = React.useState(isSite ? 'Site' : null || isWorkcat ? 'MISC STEEL SUPPORT' : null)


  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = (e) => {
    //handle if click outside section
    if(typeof e == 'string'){
      setSelected(e)
      handleDropdown(e)
    }
    setAnchorEl(null)
  }

  return (
    <div style={{ display: 'inline-block' }}>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        style={{ background: '#ffffff', border: '1px solid #DFDFDF', borderRadius: '8px', color: '#202020', width: 'auto', marginLeft: '1em' }}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {selected ? selected : placeholder || 'Empty'}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {data?.map((e, index)=> <MenuItem key={index} onClick={()=> handleClose(e)} disableRipple>
          {e || 'null'}
        </MenuItem>)}
      </StyledMenu>
    </div>
  )
}

export default Dropdown