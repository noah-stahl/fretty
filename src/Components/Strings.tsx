import { Grid } from "@mui/material";
import { Note } from "../Types/note";
import { FretButton } from "./FretButton";

export function Bstring() {
  return (
    <Grid item xs={12}>
      <FretButton note={Note["B"]} />
      <FretButton note={Note["A#"]} />
      <FretButton note={Note["A"]} />
      <FretButton note={Note["G#"]} />
      <FretButton note={Note["G"]} />
      <FretButton note={Note["F#"]} />
      <FretButton note={Note["F"]} />
      <FretButton note={Note["E"]} />
      <FretButton note={Note["D#"]} />
      <FretButton note={Note["D"]} />
      <FretButton note={Note["C#"]} />
      <FretButton note={Note["C"]} />
      <FretButton note={Note["B"]} />
    </Grid>
  );
}

export function Gstring() {
  return (
    <Grid item xs={12}>
      <FretButton note={Note["G"]} />
      <FretButton note={Note["F#"]} />
      <FretButton note={Note["F"]} />
      <FretButton note={Note["E"]} />
      <FretButton note={Note["D#"]} />
      <FretButton note={Note["D"]} />
      <FretButton note={Note["C#"]} />
      <FretButton note={Note["C"]} />
      <FretButton note={Note["B"]} />
      <FretButton note={Note["A#"]} />
      <FretButton note={Note["A"]} />
      <FretButton note={Note["G#"]} />
      <FretButton note={Note["G"]} />
    </Grid>
  );
}

export function Dstring() {
  return (
    <Grid item xs={12}>
      <FretButton note={Note["D"]} />
      <FretButton note={Note["C#"]} />
      <FretButton note={Note["C"]} />
      <FretButton note={Note["B"]} />
      <FretButton note={Note["A#"]} />
      <FretButton note={Note["A"]} />
      <FretButton note={Note["G#"]} />
      <FretButton note={Note["G"]} />
      <FretButton note={Note["F#"]} />
      <FretButton note={Note["F"]} />
      <FretButton note={Note["E"]} />
      <FretButton note={Note["D#"]} />
      <FretButton note={Note["D"]} />
    </Grid>
  );
}

export function Astring() {
  return (
    <Grid item xs={12}>
      <FretButton note={Note["A"]} />
      <FretButton note={Note["G#"]} />
      <FretButton note={Note["G"]} />
      <FretButton note={Note["F#"]} />
      <FretButton note={Note["F"]} />
      <FretButton note={Note["E"]} />
      <FretButton note={Note["D#"]} />
      <FretButton note={Note["D"]} />
      <FretButton note={Note["C#"]} />
      <FretButton note={Note["C"]} />
      <FretButton note={Note["B"]} />
      <FretButton note={Note["A#"]} />
      <FretButton note={Note["A"]} />
    </Grid>
  );
}

export function Estring() {
  return (
    <Grid item xs={12}>
      <FretButton note={Note["E"]} />
      <FretButton note={Note["D#"]} />
      <FretButton note={Note["D"]} />
      <FretButton note={Note["C#"]} />
      <FretButton note={Note["C"]} />
      <FretButton note={Note["B"]} />
      <FretButton note={Note["A#"]} />
      <FretButton note={Note["A"]} />
      <FretButton note={Note["G#"]} />
      <FretButton note={Note["G"]} />
      <FretButton note={Note["F#"]} />
      <FretButton note={Note["F"]} />
      <FretButton note={Note["E"]} />
    </Grid>
  );
}
