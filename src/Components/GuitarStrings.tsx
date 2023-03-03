import { Grid } from '@mui/material'
import { ALL_NOTES } from '../Logic/notes'
import { Note } from '../Types/Note'
import { FretButton } from './FretButton'

function getFretNumber ({ noteSlice, index, leftHanded }: {noteSlice: Note[], index: number, leftHanded: boolean}) {
  if (leftHanded) {
    return (noteSlice.length - (index + 1))
  }

  return index
}

interface GuitarStringProps {
  leftHanded: boolean;
}

export function HighEString ({ leftHanded }: GuitarStringProps) {
  const noteSlice = ALL_NOTES.slice(24, 37)
  if (leftHanded) {
    noteSlice.reverse()
  }
  return (
      <Grid item xs={12}>
        {noteSlice.map((note: Note, index) => (
          <FretButton key={note.name} note={note} label={String(getFretNumber({ noteSlice, index, leftHanded }))} />
        ))}
      </Grid>
  )
}

export function BString ({ leftHanded }: GuitarStringProps) {
  const noteSlice = ALL_NOTES.slice(19, 32)
  if (leftHanded) {
    noteSlice.reverse()
  }
  return (
      <Grid item xs={12}>
        {noteSlice.map((note: Note, index) => (
          <FretButton key={note.name} note={note} label={String(getFretNumber({ noteSlice, index, leftHanded }))} />
        ))}
      </Grid>
  )
}

export function GString ({ leftHanded }: GuitarStringProps) {
  const noteSlice = ALL_NOTES.slice(15, 28)
  if (leftHanded) {
    noteSlice.reverse()
  }
  return (
      <Grid item xs={12}>
        {noteSlice.map((note: Note, index) => (
          <FretButton key={note.name} note={note} label={String(getFretNumber({ noteSlice, index, leftHanded }))} />
        ))}
      </Grid>
  )
}

export function DString ({ leftHanded }: GuitarStringProps) {
  const noteSlice = ALL_NOTES.slice(10, 23)
  if (leftHanded) {
    noteSlice.reverse()
  }
  return (
      <Grid item xs={12}>
        {noteSlice.map((note: Note, index) => (
          <FretButton key={note.name} note={note} label={String(getFretNumber({ noteSlice, index, leftHanded }))}/>
        ))}
      </Grid>

  )
}

export function AString ({ leftHanded }: GuitarStringProps) {
  const noteSlice = ALL_NOTES.slice(5, 18)
  if (leftHanded) {
    noteSlice.reverse()
  }
  return (
    <Grid item xs={12}>
      {noteSlice.map((note: Note, index) => (
        <FretButton key={note.name} note={note} label={String(getFretNumber({ noteSlice, index, leftHanded }))} />
      ))}
    </Grid>
  )
}

export function EString ({ leftHanded }: GuitarStringProps) {
  const noteSlice = ALL_NOTES.slice(0, 13)
  if (leftHanded) {
    noteSlice.reverse()
  }
  return (
    <Grid item xs={12}>
      {noteSlice.map((note: Note, index) => (
        <FretButton key={note.name} note={note} label={String(getFretNumber({ noteSlice, index, leftHanded }))}/>
      ))}
    </Grid>
  )
}
