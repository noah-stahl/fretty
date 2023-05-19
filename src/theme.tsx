import {
  Link as RouterLink,
  LinkProps as RouterLinkProps
} from 'react-router-dom'
import { createTheme, LinkProps } from '@mui/material'
import React from 'react'

// eslint-disable-next-line react/display-name
const LinkBehavior = React.forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props
  // Map href (MUI) -> to (react-router)
  return <RouterLink ref={ref} to={href} {...other} />
})

const theme = createTheme({
  palette: {
    text: {
      primary: '#1d3557',
      secondary: '#457b9d',
      disabled: '#AAAAAA'
    },
    background: {
      default: '#f1faee'
    },
    primary: {
      main: '#e63946',
      dark: '#BE2F3A',
      light: '#E96A70',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#a8dadc',
      dark: '#77ABBD',
      light: '#CDEAE5',
      contrastText: '#FFFFFF'
    },
    error: {
      main: '#E699BE',
      dark: '#E38CB6',
      light: '#EBADCB',
      contrastText: '#FFFFFF'
    }
  },
  components: {
    MuiLink: {
      defaultProps: {
        component: LinkBehavior
      } as LinkProps
    },
    MuiButtonBase: {
      defaultProps: {
        LinkComponent: LinkBehavior
      }
    }
  }
})

export default theme
