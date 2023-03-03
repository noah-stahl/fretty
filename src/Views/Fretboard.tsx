import { Button, Grid } from '@mui/material'
import { useState } from 'react'
import {
  AString,
  BString,
  DString,
  EString,
  GString,
  HighEString
} from '../Components/GuitarStrings'
import { QuizButton } from '../Components/QuizButton'

export function Fretboard () {
  const [leftHanded, setLeftHanded] = useState(true)
  return (
    <>
    <Button onClick={() => setLeftHanded(!leftHanded)}>{leftHanded ? 'lefty' : 'righty' }</Button>
    <Grid container>
      <Grid item>
        <Grid container>
          <HighEString leftHanded={leftHanded}/>
          <BString leftHanded={leftHanded}/>
          <GString leftHanded={leftHanded}/>
          <DString leftHanded={leftHanded}/>
          <AString leftHanded={leftHanded}/>
          <EString leftHanded={leftHanded}/>
        </Grid>
      </Grid>
      <Grid item>
        <QuizButton />
      </Grid>
    </Grid>
    </>
  )
}
