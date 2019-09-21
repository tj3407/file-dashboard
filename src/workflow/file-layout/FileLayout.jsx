import React from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Document1 from "../../constants/Document1";
import Scheduler from "../../constants/Scheduler";
import Service1 from "../../constants/Service";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const FileLayout = (props) => {
    const classes = useStyles();
    const { content } = props;

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            {content === "Document1.txt" && <Document1 />}
            {content === "Scheduler.txt" && <Scheduler />}
            {content === "Service.txt" && <Service1 />}
        </main>
    )
}

export default FileLayout;