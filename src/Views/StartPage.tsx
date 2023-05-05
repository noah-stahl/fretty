import { Button, Typography } from '@mui/material'
import { routes } from '../routes'

export function StartPage () {
  return (
    <>
      <Typography variant="h4">Welcome to Fretty!</Typography>
      <Typography variant="subtitle1">A fretboard memorization App</Typography>
      <Button variant="contained" href={routes.fretboard.path}>
        Take Quiz
      </Button>
    </>
  )
}
