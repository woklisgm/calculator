import React, { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import { CalculatorState } from '../../store/calculator/types';

// TODO: createStore
export const renderWithRedux = (component: ReactElement, 
	initialState: CalculatorState = {error: '', counter: 0, result: 0, expression: ''}) => {
	return (
		<Provider store={store}>
			{component}
		</Provider>
	)
}