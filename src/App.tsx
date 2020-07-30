import React, {useState} from 'react';
import './App.css';
import {Display} from "./components/Display/Display";
import {Button} from "./components/Button/Button";
import {Settings} from "./components/Settings/Settings";

export type CounterType = {
    startValue: number
    maxValue: number
    currentValue: number
    hasError: boolean
    setMode: boolean
}

function App() {

    const [counter, setCounter] = useState<CounterType>({
        startValue: 0,
        maxValue: 5,
        currentValue: 0,
        hasError: false,
        setMode: false,
    })

    function increaseCounter() {
        setCounter({...counter, currentValue: counter.currentValue + 1})
    }

    function resetCounter() {
        setCounter({...counter, currentValue: counter.startValue})
    }

    function setThresholdValues(newStartValue: number, newMaxValue: number) {
        setCounter({...counter, maxValue: newMaxValue, startValue: newStartValue, setMode: false, currentValue: newStartValue})

    }

    function setError(value: boolean) {
        setCounter({...counter, hasError: value})
    }

    function editMode(value: boolean) {
        setCounter({...counter, setMode: value})
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
                enableEditMode={editMode}
                setError={setError}
                currentErrorValue={counter.hasError}
                currentEditModeValue={counter.setMode}
            />
        </div>

    );
}

export default App;
