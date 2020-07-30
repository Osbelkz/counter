import React from "react";
import classes from "./SetValue.module.css";

type SetValueType = {
    setValue: number
    setTitle: string
    error: boolean
    onChange: (value: number) => void
}

export function SetValue(props: SetValueType) {

    const style = props.error ? `${classes.input} ${classes.red}` : `${classes.input}`

    return (
        <div className={classes.set_value}>
            <div>{props.setTitle}</div>
            <input className={style}
                   type="number"
                   onChange={(e)=> props.onChange(+e.currentTarget.value)}
                   value={props.setValue}/>
        </div>
    )
}
