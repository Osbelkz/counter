import React from "react";
import classes from "./Display.module.css";

type DisplayType = {
    displayValue: number
    maxValue: number
    hasError: boolean
    editMode: boolean
}

export function Display(props: DisplayType) {
    const style = (props.displayValue === props.maxValue) ? `${classes.display} ${classes.red}` : classes.display
    return (
        <div className={style}>
            {props.editMode
                ? props.hasError
                    ? <span className={`${classes.error} ${classes.red}`}>Invalid value</span>
                    : <span className={classes.error}>edit mode press SET to set params</span>

                : <span>{props.displayValue}</span>}
        </div>
    )
}
