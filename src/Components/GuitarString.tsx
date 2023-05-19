import { Grid } from '@mui/material'
import { FretButton } from './FretButton'
import { Fret } from '../Types/Fret'
import { useSettingsStore } from '../hooks/Stores/useSettingsStore'

interface GuitarStringProps {
  frets: Fret[]
}

export function GuitarString ({ frets }: GuitarStringProps) {
  const { lefty } = useSettingsStore()
  if (lefty) {
    frets = frets.slice(0).reverse()
  }
  console.log('rightied')
  return (
    <Grid item xs={12}>
      {frets.map((fret) => (
        <FretButton key={fret.fretNumber} fret={fret} />
      ))}
    </Grid>
  )
}
