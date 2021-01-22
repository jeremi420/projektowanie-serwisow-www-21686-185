import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Chip from "@material-ui/core/Chip";
import IconButton from "@material-ui/core/IconButton";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}));

function Counter({ onIncrement, onDecrement, onDelete, amount }) {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Chip label={amount} />
            <IconButton onClick={onIncrement} color="secondary">
                <AddIcon />
            </IconButton>
            <IconButton onClick={onDecrement} color="secondary">
                <RemoveIcon />
            </IconButton>
            <IconButton onClick={onDelete} color="secondary">
                <DeleteIcon />
            </IconButton>
        </div>
    );
}

export default Counter;
