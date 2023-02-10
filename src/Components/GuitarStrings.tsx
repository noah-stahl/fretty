import { Grid } from '@mui/material'
import { ALL_NOTES } from '../Logic/notes'
import { Note } from '../Types/Note'
import { FretButton } from './FretButton'

interface GuitarStringProps {
  leftHanded?: boolean;
}

export function HighEString ({ leftHanded }: GuitarStringProps) {
  const noteSlice = ALL_NOTES.slice(24, 37)
  if (leftHanded) {
    noteSlice.reverse()
  }
  return (
    <Grid item xs={12}>
      <Grid item xs={12}>
        {noteSlice.map((note: Note, index) => (
          <FretButton key={note.name} note={note} label={String(index)} />
        ))}
      </Grid>
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
      <Grid item xs={12}>
        {noteSlice.map((note: Note, index) => (
          <FretButton key={note.name} note={note} label={String(index)} />
        ))}
      </Grid>
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
      <Grid item xs={12}>
        {noteSlice.map((note: Note, index) => (
          <FretButton key={note.name} note={note} label={String(index)} />
        ))}
      </Grid>
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
      <Grid item xs={12}>
        {noteSlice.map((note: Note, index) => (
          <FretButton key={note.name} note={note} label={String(index)}/>
        ))}
      </Grid>
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
        <FretButton key={note.name} note={note} label={String(index)} />
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
        <FretButton key={note.name} note={note} label={String(index)}/>
      ))}
    </Grid>
  )
}
