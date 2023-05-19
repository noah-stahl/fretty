import { Button, Grid } from '@mui/material'
import { GuitarString } from '../Components/GuitarString'
import { QuizButton } from '../Components/QuizButton'
import { PointCounter } from '../Components/PointCounter'
import { HIGH_E_FRETS } from '../Logic/Frets/HighEFrets'
import { A_FRETS } from '../Logic/Frets/AFrets'
import { D_FRETS } from '../Logic/Frets/DFrets'
import { G_FRETS } from '../Logic/Frets/GFrets'
import { B_FRETS } from '../Logic/Frets/BFrets'
import { LOW_E_FRETS } from '../Logic/Frets/LowEFrets'
import { useSettingsStore } from '../hooks/Stores/useSettingsStore'

export function Fretboard () {
  const { lefty, toggleLefty, showPitchClassesOnFrets, toggleShowPitchClassesOnFrets } = useSettingsStore()
  return (
    <>
    <Button onClick={() => toggleLefty()}>
      {lefty ? 'lefty' : 'righty' }
    </Button>
    <Button onClick={() => toggleShowPitchClassesOnFrets()}>
      {showPitchClassesOnFrets ? 'hide frets' : 'show frets' }
    </Button>
    <Grid container>
      <Grid item>
        <Grid container>
          <GuitarString frets={HIGH_E_FRETS} />
          <GuitarString frets={B_FRETS} />
          <GuitarString frets={G_FRETS} />
          <GuitarString frets={D_FRETS} />
          <GuitarString frets={A_FRETS} />
          <GuitarString frets={LOW_E_FRETS} />
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
