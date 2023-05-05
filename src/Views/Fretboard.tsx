import { Button, Grid } from '@mui/material'
import { useState } from 'react'
import { GuitarString } from '../Components/GuitarString'
import { QuizButton } from '../Components/QuizButton'
import { PointCounter } from '../Components/PointCounter'
import { HIGH_E_FRETS } from '../Logic/Frets/HighEFrets'
import { A_FRETS } from '../Logic/Frets/AFrets'
import { D_FRETS } from '../Logic/Frets/DFrets'
import { G_FRETS } from '../Logic/Frets/GFrets'
import { B_FRETS } from '../Logic/Frets/BFrets'
import { LOW_E_FRETS } from '../Logic/Frets/LowEFrets'

export function Fretboard () {
  const [leftHanded, setLeftHanded] = useState(true)
  return (
    <>
    <Button onClick={() => setLeftHanded(!leftHanded)}>{leftHanded ? 'lefty' : 'righty' }</Button>
    <Grid container>
      <Grid item>
        <Grid container>
          <GuitarString frets={HIGH_E_FRETS} leftHanded={leftHanded} />
          <GuitarString frets={B_FRETS} leftHanded={leftHanded} />
          <GuitarString frets={G_FRETS} leftHanded={leftHanded} />
          <GuitarString frets={D_FRETS} leftHanded={leftHanded} />
          <GuitarString frets={A_FRETS} leftHanded={leftHanded} />
          <GuitarString frets={LOW_E_FRETS} leftHanded={leftHanded} />
        </Grid>
      </Grid>
      <Grid item>
        <QuizButton />
      </Grid>
      <PointCounter />
    </Grid>
    </>
  )
}
