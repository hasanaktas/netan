import React, { useState } from 'react'
import { Button, Menu, MenuItem, ListItemIcon } from '@material-ui/core'
import {
  Translate as TranslateIcon,
  ExpandMore as ExpandMoreIcon,
} from '@material-ui/icons'
import EnglishIcon from 'assets/flags/english'
import TurkishIcon from 'assets/flags/turkish'
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
        <MenuItem onClick={handleClose}>
          <TurkishIcon width={20} height={20} style={{ marginRight: 20 }} />
          Türkçe
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <EnglishIcon width={20} height={20} style={{ marginRight: 20 }} />
          English
        </MenuItem>
      </Menu>
    </>
  )
}
export default TranslateButton
