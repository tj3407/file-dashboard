import React from "react"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"

const Layout = (props) => {
    return (
        <Grid container>
            <Grid item xs={2}>
                {props.sidebarComponent}
            </Grid>
            <Grid item xs={10}>
                <Paper>
                    {props.mainContent}
                </Paper>
            </Grid>
        </Grid>
    )
}

export default Layout;