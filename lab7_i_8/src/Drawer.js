import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import { NavLink } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import ListIcon from "@material-ui/icons/List";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: "auto",
    },
});

export default function TemporaryDrawer({ open, handleClose }) {
    const classes = useStyles();

    return (
        <div>
            <React.Fragment>
                <Drawer open={open} onClose={handleClose}>
                    <div
                        className={clsx(classes.list, {
                            [classes.fullList]: true,
                        })}
                        role="presentation"
                        onClick={handleClose}
                        onKeyDown={handleClose}
                    >
                        <List>
                            <ListItem
                                button
                                key="/"
                                component={NavLink}
                                to="/"
                                activeClassName="Mui-selected"
                                exact={true}
                            >
                                <ListItemIcon>
                                    <HomeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Strona główna" />
                            </ListItem>
                            <ListItem
                                button
                                key="/products"
                                component={NavLink}
                                to="/products"
                                activeClassName="Mui-selected"
                                exact={true}
                            >
                                <ListItemIcon>
                                    <ListIcon />
                                </ListItemIcon>
                                <ListItemText primary="Produkty" />
                            </ListItem>
                        </List>
                    </div>
                </Drawer>
            </React.Fragment>
        </div>
    );
}
