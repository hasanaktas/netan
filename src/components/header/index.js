import React from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  useScrollTrigger,
  Slide,
} from '@material-ui/core'
import TranslateButton from './translateButton'
import Link from '../link'
function HideOnScroll(props) {
  const { children, window } = props
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined })

  return (
    <Slide appear={false} direction='down' in={!trigger}>
      {children}
    </Slide>
  )
}

const optionsNav = [
  {
    title: 'HOME',
    href: '/',
  },
  {
    title: 'COMPANY',
    href: '/company',
  },
  {
    title: 'PRODUCTS',
    href: '/products',
  },
  {
    title: 'RENTAL SERVICES',
    href: '/rentalServices',
  },
  {
    title: 'LABORATORY',
    href: '/laboratory',
  },
  {
    title: 'CONTACT',
    href: '/contact',
  },
]

const Header = (props) => {
  return (
    <HideOnScroll {...props}>
      <AppBar elevation={0} color='inherit' position='sticky'>
        <Toolbar>
          <img
            src='/assets/images/netan-logo.png'
            style={{ width: 60, height: 60, marginTop: 10, marginBottom: 10 }}
          />
          <div
            style={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}
          >
            {optionsNav.map((item, index) => {
              return (
                <Link href={item.href} key={index}>
                  {item.title}
                </Link>
              )
            })}
          </div>
          <TranslateButton />
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  )
}

export default Header
