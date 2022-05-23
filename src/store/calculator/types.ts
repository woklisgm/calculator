export interface CalculatorState {
	error: string;
	result: number;
	counter: number; 
	expression: string;
}

export enum CalculatorActionsNum {
	SET_ERROR = 'SET_ERROR',
	CLEAR_ERROR = 'CLEAR_ERROR',
	SET_RESULT = 'SET_RESULT',
	CLEAR_EXPRESSION = 'CLEAR_EXPRESSION',
	ADD_TO_EXPRESSION = 'ADD_TO_EXPRESSION',
	REMOVE_LAST_SYMBOL = 'REMOVE_LAST_SYMBOL',
	CALCULATE_EXPRESSION = 'CALCULATE_EXPRESSION',
}

export interface SetError {
	type: CalculatorActionsNum.SET_ERROR;
	payload: string;
}
export interface ClearError {
	type: CalculatorActionsNum.CLEAR_ERROR;
	payload?: undefined;
}

export interface ClearExpression {
	type: CalculatorActionsNum.CLEAR_EXPRESSION;
	payload?: undefined;
}

export interface SetResult {
	type: CalculatorActionsNum.SET_RESULT;
	payload: number;
}

export interface AddToExpression {
	type: CalculatorActionsNum.ADD_TO_EXPRESSION;
	payload: string;
}

export interface RemoveLastSymbol {
	type: CalculatorActionsNum.REMOVE_LAST_SYMBOL;
	payload?: undefined;
}

export interface CalculateExpression {
	type: CalculatorActionsNum.CALCULATE_EXPRESSION;
	payload: number;
}

export type CalculatorAction = SetError
	| ClearError
	| SetResult
	| AddToExpression 
	| ClearExpression
	| RemoveLastSymbol
	| CalculateExpression;
