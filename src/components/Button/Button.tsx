import React from "react";
import classes from "./Button.module.css";

type ButtonType = {
    btnName: string
    onClick: () => void
    disabled?: boolean
}

export function Button(props: ButtonType) {
    return (
        <button className={classes.button}
                onClick={props.onClick}
                disabled={props.disabled ? props.disabled : false}
        >{props.btnName}</button>
    )
}
