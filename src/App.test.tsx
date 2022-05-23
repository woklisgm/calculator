import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import renderer  from 'react-test-renderer';
import userEvent from '@testing-library/user-event';

import App from './App';
import { renderWithRedux } from './tests/helpers/renderWithRedux';

const mockCheckKey = jest.fn();

jest.mock('./hooks/useActions', () => ({
	useActions: () => ({
		checkKey: mockCheckKey
	})
}));

describe('App test', () => {
	test('snapshot', () => {
		const treeApp = renderer.create(renderWithRedux(<App />)).toJSON();

		expect(treeApp).toMatchSnapshot();
	});

	test('check keyboard press', async () => {
		render(renderWithRedux(<App />));
		
		userEvent.keyboard('1');
		expect(mockCheckKey).toBeCalledTimes(1);
	});

	test('calculator in the document', () => {
		render(renderWithRedux(<App />));
		
		const el = screen.getByTestId('calculator');
		expect(el).toBeInTheDocument();
	})

	test('keyboard in the document', () => {
		render(renderWithRedux(<App />));
		
		const el = screen.getByTestId('keyboard');
		expect(el).toBeInTheDocument();
	})

	test('display in the document', () => {
		render(renderWithRedux(<App />));
		
		const el = screen.getByTestId('keyboard');
		expect(el).toBeInTheDocument();
	})
})

// jest.mock('./hooks/useActions', () => {
// 	jest.fn(() => {
// 		return {
// 			__esModule: true,
// 			checkKey: jest.fn(() => true)
// 		}
// 	})
// });