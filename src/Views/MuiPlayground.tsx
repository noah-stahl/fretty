import { Button, Grid } from "@mui/material";

export function MuiPlayground() {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Button variant="text" color="primary">
          Text
        </Button>
        <Button variant="contained" color="primary">
          Contained
        </Button>
        <Button variant="outlined" color="primary">
          Outlined
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="text" color="secondary">
          Text
        </Button>
        <Button variant="contained" color="secondary">
          Contained
        </Button>
        <Button variant="outlined" color="secondary">
          Outlined
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="text" color="error">
          Text
        </Button>
        <Button variant="contained" color="error">
          Contained
        </Button>
        <Button variant="outlined" color="error">
          Outlined
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="text" color="warning">
          Text
        </Button>
        <Button variant="contained" color="warning">
          Contained
        </Button>
        <Button variant="outlined" color="warning">
          Outlined
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="text" color="info">
          Text
        </Button>
        <Button variant="contained" color="info">
          Contained
        </Button>
        <Button variant="outlined" color="info">
          Outlined
        </Button>
      </Grid>
      <Grid item xs={12}>
        <Button variant="text" color="success">
          Text
        </Button>
        <Button variant="contained" color="success">
          Contained
        </Button>
        <Button variant="outlined" color="success">
          Outlined
        </Button>
      </Grid>
    </Grid>
  );
}
