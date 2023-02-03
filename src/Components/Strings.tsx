import { Grid } from '@mui/material'
import { ALL_NOTES } from '../Logic/notes'
import { Note } from '../Types/Note'
import { FretButton } from './FretButton'

interface StringProps {
  leftHanded?: boolean;
}

export function HighEString ({ leftHanded }: StringProps) {
  const noteSlice = ALL_NOTES.slice(24, 37)
  if (leftHanded) {
    noteSlice.reverse()
  }
  return (
    <Grid item xs={12}>
      <Grid item xs={12}>
        {noteSlice.map((note: Note) => (
          <FretButton key={note.name} note={note} />
        ))}
      </Grid>
    </Grid>
  )
}

export function BString ({ leftHanded }: StringProps) {
  const noteSlice = ALL_NOTES.slice(19, 32)
  if (leftHanded) {
    noteSlice.reverse()
  }
  return (
    <Grid item xs={12}>
      <Grid item xs={12}>
        {noteSlice.map((note: Note) => (
          <FretButton key={note.name} note={note} />
        ))}
      </Grid>
    </Grid>
  )
}

export function GString ({ leftHanded }: StringProps) {
  const noteSlice = ALL_NOTES.slice(15, 28)
  if (leftHanded) {
    noteSlice.reverse()
  }
  return (
    <Grid item xs={12}>
      <Grid item xs={12}>
        {noteSlice.map((note: Note) => (
          <FretButton key={note.name} note={note} />
        ))}
      </Grid>
    </Grid>
  )
}

export function DString ({ leftHanded }: StringProps) {
  const noteSlice = ALL_NOTES.slice(10, 23)
  if (leftHanded) {
    noteSlice.reverse()
  }
  return (
    <Grid item xs={12}>
      <Grid item xs={12}>
        {noteSlice.map((note: Note) => (
          <FretButton key={note.name} note={note} />
        ))}
      </Grid>
    </Grid>
  )
}

export function AString ({ leftHanded }: StringProps) {
  const noteSlice = ALL_NOTES.slice(5, 18)
  if (leftHanded) {
    noteSlice.reverse()
  }
  return (
    <Grid item xs={12}>
      {noteSlice.map((note: Note) => (
        <FretButton key={note.name} note={note} />
      ))}
    </Grid>
  )
}

export function EString ({ leftHanded }: StringProps) {
  const noteSlice = ALL_NOTES.slice(0, 13)
  if (leftHanded) {
    noteSlice.reverse()
  }
  return (
    <Grid item xs={12}>
      {noteSlice.map((note: Note) => (
        <FretButton key={note.name} note={note} />
      ))}
    </Grid>
  )
}
