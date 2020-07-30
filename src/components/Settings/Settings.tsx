import {SetValue} from "../SetValue/SetValue";
import {Button} from "../Button/Button";
import React, {useState} from "react";


type PropsType = {
    setThresholdValues: (minValue: number, maxValue: number) => void
    enableEditMode: (value: boolean) => void
    setError: (value: boolean) => void
    currentErrorValue: boolean
    currentEditModeValue: boolean
}

export function Settings(props: PropsType) {

    let [maxValue, setMaxValue] = useState<number>(5)
    let [minValue, setMinValue] = useState<number>(0)

    function setMaxValueHandler(newValue: number) {
        setMaxValue(newValue)
        if (!props.currentEditModeValue) props.enableEditMode(true)
    }

    function setMinValueHandler(newValue: number) {
        setMinValue(newValue)
        if (!props.currentEditModeValue) props.enableEditMode(true)
    }

    function setThresholdValuesHandler() {
        props.setThresholdValues(minValue, maxValue)
    }

    if (maxValue < minValue) {
        if (!props.currentErrorValue) props.setError(true)
    } else {
        if (props.currentErrorValue) props.setError(false)
    }

    return (
        <div className={"app"}>
            <div className="settings-values">
                <SetValue setValue={maxValue}
                          setTitle={'max value'}
                          onChange={setMaxValueHandler}
                          error={minValue > maxValue}/>
                <SetValue setValue={minValue}
                          setTitle={'start value'}
                          onChange={setMinValueHandler}
                          error={minValue > maxValue}/>
            </div>
            <div className={'main-buttons settings'}>
                <Button btnName={"set"}
                        disabled={maxValue < minValue}
                        onClick={setThresholdValuesHandler}/>
            </div>
        </div>
    )
}
