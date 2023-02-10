import { Grid } from '@mui/material'
import {
  AString,
  BString,
  DString,
  EString,
  GString,
  HighEString
} from '../Components/GuitarStrings'

export function MuiPlayground () {
  return (
    <Grid container spacing={2}>
      <HighEString />
      <BString />
      <GString />
      <DString />
      <AString />
      <EString />
    </Grid>
  )
}
