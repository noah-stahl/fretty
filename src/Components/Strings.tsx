import { Grid } from "@mui/material";
import { ALL_NOTES } from "../Logic/notes";
import { Note } from "../Types/Note";
import { PitchClass } from "../Types/PitchClass";
import { FretButton } from "./FretButton";

interface StringProps {
  rightHanded?: boolean;
}

export function HighEString({ rightHanded}: StringProps){
  const noteSlice = ALL_NOTES.slice(24, 37)
  if (rightHanded) {
    noteSlice.reverse();
  }
  return (
    <Grid item xs={12}>
      <Grid item xs={12}>
      {noteSlice.map((note: Note) => 
        <FretButton note={note} />
      )}
    </Grid>
    </Grid>
  )
}

export function BString({ rightHanded}: StringProps) {
  const noteSlice = ALL_NOTES.slice(19, 32)
  if (rightHanded) {
    noteSlice.reverse();
  }
  return (
    <Grid item xs={12}>
      <Grid item xs={12}>
      {noteSlice.map((note: Note) => 
        <FretButton note={note} />
      )}
    </Grid>
    </Grid>
  );
}

export function GString({ rightHanded}: StringProps) {
  const noteSlice = ALL_NOTES.slice(15, 28)
  if (rightHanded) {
    noteSlice.reverse();
  }
  return (
    <Grid item xs={12}>
      <Grid item xs={12}>
      {noteSlice.map((note: Note) => 
        <FretButton note={note} />
      )}
    </Grid>
    </Grid>
  );
}

export function DString({ rightHanded}: StringProps) {
  const noteSlice = ALL_NOTES.slice(10, 23)
  if (rightHanded) {
    noteSlice.reverse();
  }
  return (
    <Grid item xs={12}>
      <Grid item xs={12}>
      {noteSlice.map((note: Note) => 
        <FretButton note={note} />
      )}
    </Grid>
    </Grid>
  );
}


export function AString({ rightHanded}: StringProps) {
  const noteSlice = ALL_NOTES.slice(5, 18)
if (rightHanded) {
  noteSlice.reverse();
}
  return (
    <Grid item xs={12}>
      {noteSlice.map((note: Note) => 
        <FretButton note={note} />
      )}
    </Grid>
  );
}


export function EString({ rightHanded}: StringProps) {
  const noteSlice = ALL_NOTES.slice(0, 13)
if (rightHanded) {
  noteSlice.reverse();
}
  return (
    <Grid item xs={12}>
      {noteSlice.map((note: Note) => 
        <FretButton note={note} />
      )}
    </Grid>
  );
}
