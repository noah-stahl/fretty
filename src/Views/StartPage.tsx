import { Button, Typography } from '@mui/material'
import { PointIncrease, PointReset } from '../Components/PointButtons'
import { PointCounter } from '../Components/PointCounter'

export function StartPage () {
  return (
    <>
      <Typography variant="h4">Welcome to Fretty!</Typography>
      <Typography variant="subtitle1">A fretboard memorization App</Typography>
      <Button variant="contained" href="mui">
        Take Quiz
      </Button>
      <PointIncrease />
      <PointReset />
      <PointCounter />
    </>
  )
}
