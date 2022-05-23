import {
	SetError,
	SetResult,
	ClearError,
	PastExpression,
	CalculatorState,
	ClearExpression,
	AddToExpression,
	RemoveLastSymbol,
	CalculatorActionsNum } from './types';
	
import { AppDispatch } from '..';
import { calculate } from '../../utils/Parser';
import { validCharacters } from '../../constants/validCharacters';
import { ParseError } from '../../exceptions/parse-error';

export const CalcActionCreators = {
	setError: (error: string): SetError => ({
		type: CalculatorActionsNum.SET_ERROR,
		payload: error
	}),
	
	clearError: (): ClearError => ({
		type: CalculatorActionsNum.CLEAR_ERROR,
	}),

	clearExpression: (): ClearExpression => ({
		type: CalculatorActionsNum.CLEAR_EXPRESSION
	}),

	addToExpression: (payload: string): AddToExpression => ({
		type: CalculatorActionsNum.ADD_TO_EXPRESSION,
		payload
	}),

	pastExpression: (payload: string): PastExpression => ({
		type: CalculatorActionsNum.PASTE_EXPRESSION,
		payload
	}),

	removeLastSymbol: (): RemoveLastSymbol => ({
		type: CalculatorActionsNum.REMOVE_LAST_SYMBOL,
	}),

	setResult: (payload: number): SetResult => ({
		type: CalculatorActionsNum.SET_RESULT,
		payload
	}),

	calculateExpression: (st: string) => {
		try {
			const result = calculate(st);
			return {
				type: CalculatorActionsNum.CALCULATE_EXPRESSION,
				payload: result,
			}
		} catch (e) {
			const err = e as ParseError;
			return {
				type: CalculatorActionsNum.SET_ERROR,
				payload: err.message,
			}
		}
	},

	checkKey: (key: string) =>
		async (dispatch: AppDispatch,  getState: () => CalculatorState) => {
			if (validCharacters.includes(key)) {
				dispatch(CalcActionCreators.addToExpression(key));
			}

			const {expression: exp} = getState();

			switch(key) {
				case '*': 
					dispatch(CalcActionCreators.addToExpression('×'));
					break;
				case '.': 
					dispatch(CalcActionCreators.addToExpression(','));
					break;
				case '=':
				case 'Enter':
					dispatch(CalcActionCreators.calculateExpression(exp));
					break;
				case 'Backspace':
					dispatch(CalcActionCreators.removeLastSymbol());
					break;
				case 'C':
				case 'Escape':
					dispatch(CalcActionCreators.clearExpression());
			}
		}
}