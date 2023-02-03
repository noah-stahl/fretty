import { Button, Grid } from "@mui/material";
import { FretButton } from "../Components/FretButton";
import {
  AString,
  BString,
  DString,
  EString,
  GString,
  HighEString
} from "../Components/Strings";
import { PitchClass } from "../Types/PitchClass";

export function MuiPlayground() {
  return (
    <Grid container spacing={2}>
      <HighEString />
      <BString />
      <GString />
      <DString />
      <AString />
      <EString />
    </Grid>
  );
}
