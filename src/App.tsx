import React from 'react';
import './App.css';
import {Display} from "./components/Display/Display";
import {Button} from "./components/Button/Button";
import {Settings} from "./components/Settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from './state/store';
import {
    enableEditModeAC,
    increaseCounterAC,
    resetCounterAC,
    setErrorAC,
    setSelectedValuesAC, StateType
} from "./state/counter-reducer";


export function saveState<T>(key: string, state: T) {
    const stateAsString = JSON.stringify(state);
    localStorage.setItem(key, stateAsString)
}
export function restoreState<T>(key: string, defaultState: T) {
    const stateAsString = localStorage.getItem(key);
    if (stateAsString !== null) defaultState = JSON.parse(stateAsString);
    return defaultState;
}


export function App() {
    /*
        const [counter, setCounter] = useState<CounterType>()
        restoreState('counter', defaultState)*/
    let counter = useSelector<AppRootStateType, StateType>(state => state.couter)
    let dispatch = useDispatch()

    saveState("counter", counter)

    function increaseCounter() {
        dispatch(increaseCounterAC())
    }
    function resetCounter() {
        dispatch(resetCounterAC())
    }
    function setThresholdValues(newStartValue: number, newMaxValue: number) {
        dispatch(setSelectedValuesAC(newStartValue, newMaxValue))
    }
    function setError(value: boolean) {
        dispatch(setErrorAC(value))
    }
    function enableEditMode(value: boolean) {
        dispatch(enableEditModeAC(value))
    }

    console.log(counter)
    return (
        <div>
            <div className={"app"}>
                <Display displayValue={counter.currentValue}
                         hasError={counter.hasError}
                         editMode={counter.setMode}
                         maxValue={counter.maxValue}/>
                <div className={'main-buttons'}>
                    <Button btnName={"inc"}
                            disabled={counter.currentValue === counter.maxValue || counter.setMode}
                            onClick={increaseCounter}/>
                    <Button btnName={"reset"}
                            disabled={counter.currentValue === 0 || counter.setMode}
                            onClick={resetCounter}/>
                </div>
            </div>
            <Settings
                setThresholdValues={setThresholdValues}
                enableEditMode={enableEditMode}
                setError={setError}
                currentErrorValue={counter.hasError}
                currentEditModeValue={counter.setMode}
            />
        </div>

    );
}
