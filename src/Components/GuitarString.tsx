import { Grid } from '@mui/material'
import { FretButton } from './FretButton'
import { Fret } from '../Types/Fret'

interface GuitarStringProps {
  leftHanded: boolean;
  frets: Fret[]
}

export function GuitarString ({ leftHanded, frets }: GuitarStringProps) {
  if (leftHanded) {
    frets.reverse()
  }
  return (
      <Grid item xs={12}>
        {frets.map((fret) => (
          <FretButton key={fret.fretNumber} fret={fret} />
        ))}
      </Grid>
  )
}
