import { Button, Typography } from '@mui/material'
import { routes } from '../routes'

export function ErrorPage () {
  return (
    <>
      <Typography variant="h4">Oops!</Typography>
      <Typography variant="subtitle1">This page does not exist! 🫥</Typography>
      <Button variant="contained" href={routes.home.path}>
        Take me home
      </Button>
    </>
  )
}
