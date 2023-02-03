import { Button, Grid } from "@mui/material";
import { FretButton } from "../Components/FretButton";
import {
  Astring,
  Bstring,
  Dstring,
  Estring,
  Gstring,
} from "../Components/Strings";
import { Note } from "../Types/note";

export function MuiPlayground() {
  return (
    <Grid container spacing={2}>
      <Estring />
      <Bstring />
      <Gstring />
      <Dstring />
      <Astring />
      <Estring />
    </Grid>
  );
}
