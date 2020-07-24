import React, { useState } from 'react'
import { Button, Menu, MenuItem, ListItemIcon } from '@material-ui/core'
import {
  Translate as TranslateIcon,
  ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons'
import EnglishIcon from 'assets/flags/english'
const TranslateButton = () => {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <>
      <Button
        aria-controls='simple-menu'
        aria-haspopup='true'
        onClick={handleClick}
        startIcon={<TranslateIcon />}
        endIcon={<ExpandMoreIcon />}
        color='inherit'
      >
        Türkçe
      </Button>
      <Menu
        id='simple-menu'
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Türkçe</MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemIcon>
            <EnglishIcon />
          </ListItemIcon>
          asdas
        </MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </>
  )
}
export default TranslateButton
