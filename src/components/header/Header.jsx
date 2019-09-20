import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import SearchIcon from "@material-ui/icons/Search";
import Grid from "@material-ui/core/Grid";

const Header = props => {
  return (
    <Grid container>
      <Grid item xs={2}></Grid>
      <Grid item xs={10}>
        <AppBar position="fixed">
          <Typography variant="h6" style={ { display: 'inline-block', paddingLeft: '160px', paddingTop: '20px'}}>File Dashboard</Typography>
          <div style={ {display: 'inline-block', paddingLeft: '160px', paddingTop: '20px'}}>
            <SearchIcon />
          </div>
        </AppBar>
      </Grid>
    </Grid>
  );
};

export default Header;
