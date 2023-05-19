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
      primary: '#FFFFFF',
      secondary: '#CCCCCC',
      disabled: '#AAAAAA'
    },
    background: {
      default: '#231942'
    },
    primary: {
      main: '#5E548E',
      dark: '#4C4474',
      light: '#6F65A4',
      contrastText: '#FFFFFF'
    },
    secondary: {
      main: '#9F86C0',
      dark: '#8A6BB3',
      light: '#B5A1CE',
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
