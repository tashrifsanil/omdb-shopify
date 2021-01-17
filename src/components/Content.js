import React from "react";
import SimpleCard from "./SimpleCard";
import Grid from "@material-ui/core/Grid";

export const Content = (props) => {
  return (
    <>
      <Grid
        container
        direction="row"
        justify="flex-start"
        //   alignitem xs={2} xs={2} xs={2}s="stretch"
        spacing={1}
        xs={12}
      >
        <Grid item xs={2}>
          <SimpleCard />
        </Grid>
        <Grid item xs={2}>
          <SimpleCard />
        </Grid>
        <Grid item xs={2}>
          <SimpleCard />
        </Grid>
        <Grid item xs={2}>
          <SimpleCard />
        </Grid>
        <Grid item xs={2}>
          <SimpleCard />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        justify="flex-start"
        //   alignitem xs={2} xs={2} xs={2}s="stretch"
        spacing={1}
        xs={12}
      >
        <Grid item xs={2}>
          <SimpleCard />
        </Grid>
        <Grid item xs={2}>
          <SimpleCard />
        </Grid>
        <Grid item xs={2}>
          <SimpleCard />
        </Grid>
        <Grid item xs={2}>
          <SimpleCard />
        </Grid>
        <Grid item xs={2}>
          <SimpleCard />
        </Grid>
      </Grid>
    </>
  );
};

export default Content;
