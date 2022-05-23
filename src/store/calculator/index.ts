import {CalculatorState, CalculatorAction, CalculatorActionsNum} from './types';

const initialState: CalculatorState = {
	error: '',
	result: 0,
	counter: 0,
	expression: ''
}

function calclulatorReducer(state = initialState, {type, payload}: CalculatorAction): CalculatorState {
	switch (type) {
		case CalculatorActionsNum.SET_ERROR: return {
			...state,
			error: payload,
			counter: state.counter + 1
		}
		case CalculatorActionsNum.CLEAR_ERROR: return {
			...state,
			error: ''
		}
		case CalculatorActionsNum.ADD_TO_EXPRESSION: return {
			...state,
			expression: `${state.expression}${payload}`
		}
		case CalculatorActionsNum.PASTE_EXPRESSION: return {
			...state,
			expression: payload
		}
		case CalculatorActionsNum.CLEAR_EXPRESSION: return {
			error: '',
			result: 0,
			counter: 0,
			expression: ``
		}
		case CalculatorActionsNum.CALCULATE_EXPRESSION: {
			return {
				...state,
				error: '',
				result: payload,
				counter: state.counter + 1,
			}
		}
		case CalculatorActionsNum.REMOVE_LAST_SYMBOL: return {
			...state,
			expression: state.expression.length > 1 
				? state.expression.slice(0, -1)
				: ''
		}
		case CalculatorActionsNum.SET_RESULT: return {
			...state,
			error: '',
			result: payload
		}
		default:
			return state;
	}
}

export default calclulatorReducer;