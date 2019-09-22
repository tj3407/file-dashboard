import React, { useState } from "react";
import Divider from "@material-ui/core/Divider";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  sortableContainer,
  sortableElement,
  sortableHandle
} from "react-sortable-hoc";
import arrayMove from "array-move";
import DehazeIcon from "@material-ui/icons/Dehaze";
import { getSnapshotData } from "jest-snapshot/build/utils";
import jsonData from "../../constants/mockapi/mockapi.json";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  drawer: {
    [theme.breakpoints.up("sm")]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
    }
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      display: "none"
    }
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  root2: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  },
  listItem: {
    float: "right",
    textAlign: "right"
  }
}));

const DragHandle = sortableHandle(() => <DehazeIcon />);

const SortableItem = sortableElement(({ value }) => (
  <ListItem
    style={{
      borderTop: "1px solid #efefef",
      paddingLeft: "50px",
      zIndex: "9999"
    }}
  >
    <DragHandle />
    <ListItemText primary={value} style={{ marginLeft: "10px" }} />
  </ListItem>
));

const SortableContainer = sortableContainer(({ children }) => {
  return <List style={{ width: "100%", padding: "0" }}>{children}</List>;
});

const Sidebar = props => {
  const classes = useStyles();
  const theme = useTheme();
  const [items, setItems] = useState([
    "Document1.txt",
    "Scheduler.txt",
    "Service.txt"
  ]);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    props.onItemClick(items[oldIndex]);
    setItems(arrayMove(items, oldIndex, newIndex));
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <List>
        {jsonData.fileStructure.map((text, index) => (
          <ExpansionPanel key={`${text}-${index}`}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <ListItem button key={text} style={{ paddingLeft: "0px" }}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItem>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails
              style={{ padding: "0", justifyContent: "center" }}
            >
              <SortableContainer onSortEnd={onSortEnd}>
                {text.data.map((value, index) => (
                  <SortableItem
                    key={`item-${value}`}
                    index={index}
                    value={value.name}
                  />
                ))}
              </SortableContainer>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))}
        {/* {["Desktop", "Documents", "Download"].map((text, index) => (
          <ExpansionPanel key={text}>
            <ExpansionPanelSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <ListItem button key={text} style={{ paddingLeft: "0px"}} >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails style={{ padding: "0", justifyContent: "center" }} >
              <SortableContainer onSortEnd={onSortEnd} >
                {items.map((value, index) => (
                  <SortableItem key={`item-${value}`} index={index} value={value} />
                ))}
              </SortableContainer>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        ))} */}
      </List>
      <Divider />
    </div>
  );

  return (
    <nav className={classes.drawer} aria-label="mailbox folders">
      <Hidden smUp implementation="css">
        <Drawer
          container={props.container}
          variant="temporary"
          anchor={theme.direction === "rtl" ? "right" : "left"}
          open={props.mobileOpen}
          onClose={props.handleDrawerToggle}
          classes={{
            paper: classes.drawerPaper
          }}
          ModalProps={{
            keepMounted: true
          }}
        >
          {drawer}
        </Drawer>
      </Hidden>
      <Hidden xsDown implementation="css">
        <Drawer
          classes={{
            paper: classes.drawerPaper
          }}
          variant="permanent"
          open
        >
          {drawer}
        </Drawer>
      </Hidden>
    </nav>
  );
};

export default Sidebar;
