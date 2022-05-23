/* eslint-disable testing-library/no-debugging-utils */
import React from 'react';
import renderer  from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';

import { ContextMenu } from './ContextMenu';
import { renderWithRedux } from '../../tests/helpers/renderWithRedux';

const mockPastExpression = jest.fn();
const mockClearExpression = jest.fn();

jest.mock('../../hooks/useActions', () => ({
	useActions: () => ({
		pastExpression: mockPastExpression,
		clearExpression: mockClearExpression
	})
}));

Object.assign(navigator, {
  clipboard: {
    readText: () => {},
  },
});

beforeEach(() => {
	jest.clearAllMocks();
})

describe('Keyboard tests', () => {
	test('snapshot', () => {
		const treeApp = renderer.create(renderWithRedux(<ContextMenu x={0} y={0} />)).toJSON();
		expect(treeApp).toMatchSnapshot();
	});

	test('click on clear button', () => {
		jest.spyOn(navigator.clipboard, "readText").mockReturnValue(new Promise((resolve) => resolve("test")));
		render(renderWithRedux(<ContextMenu x={0} y={0} />));
		const btn = screen.getByTestId('clear');
		
		fireEvent.click(btn);
		expect(mockClearExpression).toBeCalledTimes(1);

	});

	test('click on past button', async () => {
		jest.spyOn(navigator.clipboard, "readText").mockReturnValue(new Promise((resolve) => resolve("test")));
		render(renderWithRedux(<ContextMenu x={0} y={0} />));
		const btn = screen.getByTestId('past');
		
		await fireEvent.click(btn);
		expect(mockPastExpression).toBeCalledTimes(1);

		await fireEvent.click(btn);
		expect(mockPastExpression).toBeCalledTimes(2);
	});

	test('click on past button with empty buffer', async () => {
		jest.spyOn(navigator.clipboard, "readText").mockReturnValue(new Promise((resolve) => resolve("")));
		render(renderWithRedux(<ContextMenu x={0} y={0} />));
		const btn = screen.getByTestId('past');
		
		await fireEvent.click(btn);
		expect(mockPastExpression).toBeCalledTimes(0);

		await fireEvent.click(btn);
		expect(mockPastExpression).toBeCalledTimes(0);
	});
});

