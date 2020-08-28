import { restoreState } from "../App"

enum COUNTER_ACTION_TYPES {
    INCREASE_COUNTER = "INCREASE_COUNTER",
    RESET_COUNTER="RESET_COUNTER",
    SET_THRESHOLD_VALUES = "SET_THRESHOLD_VALUES",
    SET_ERROR = "SET_ERROR",
    ENABLE_EDIT_MODE = "ENABLE_EDIT_MODE",
    INIT = "INIT"
}


export interface StateType {
    startValue: number
    maxValue: number
    currentValue: number
    hasError: boolean
    setMode: boolean
}

interface IncreaseCounterAction {
    type: COUNTER_ACTION_TYPES.INCREASE_COUNTER
}

interface ResetCounterAction {
    type: COUNTER_ACTION_TYPES.RESET_COUNTER
}

interface SetThresholdValuesAction {
    type: COUNTER_ACTION_TYPES.SET_THRESHOLD_VALUES
    payload: {startValue: number, maxValue: number}
}

interface SetErrorAction {
    type: COUNTER_ACTION_TYPES.SET_ERROR
    payload: {hasError: boolean}
}

interface EnableEditModeAction {
    type: COUNTER_ACTION_TYPES.ENABLE_EDIT_MODE
    payload: {setMode: boolean}
}

type ActionType = IncreaseCounterAction | ResetCounterAction | SetThresholdValuesAction | SetErrorAction | EnableEditModeAction

const initialState: StateType = {
    startValue: 0,
    maxValue: 5,
    currentValue: 0,
    hasError: false,
    setMode: false,
}

export function counterReducer(state = restoreState('counter', initialState), action: ActionType): StateType {
    switch (action.type) {

        case COUNTER_ACTION_TYPES.INCREASE_COUNTER:
            return {
                ...state,
                currentValue: state.currentValue + 1,
            }
        case COUNTER_ACTION_TYPES.RESET_COUNTER:
            return {
                ...state,
                currentValue: state.startValue,
            }
        case COUNTER_ACTION_TYPES.SET_THRESHOLD_VALUES:
            return {
                ...state,
                startValue: action.payload.startValue,
                maxValue: action.payload.maxValue,
                currentValue: action.payload.startValue,
                setMode: false,
            }
        case COUNTER_ACTION_TYPES.ENABLE_EDIT_MODE:
            return {
                ...state,
                ...action.payload,
            }
        case COUNTER_ACTION_TYPES.SET_ERROR:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export function increaseCounterAC():IncreaseCounterAction {
    return {type: COUNTER_ACTION_TYPES.INCREASE_COUNTER}
}

export function resetCounterAC():ResetCounterAction {
    return {type: COUNTER_ACTION_TYPES.RESET_COUNTER}
}

export function setSelectedValuesAC (startValue: number, maxValue: number): SetThresholdValuesAction {
    return {type: COUNTER_ACTION_TYPES.SET_THRESHOLD_VALUES, payload: {startValue, maxValue}}
}

export function setErrorAC (hasError: boolean):SetErrorAction {
    return {type: COUNTER_ACTION_TYPES.SET_ERROR, payload: {hasError}}
}

export function enableEditModeAC (setMode: boolean):EnableEditModeAction {
    return {type: COUNTER_ACTION_TYPES.ENABLE_EDIT_MODE, payload: {setMode}}
}
