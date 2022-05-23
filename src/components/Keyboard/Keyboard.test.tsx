import React from 'react';
import renderer  from 'react-test-renderer';
import { fireEvent, render, screen } from '@testing-library/react';

import { Keyboard } from './Keyboard';
import { keyboard } from '../../constants/keyboard';
import { renderWithRedux } from '../../tests/helpers/renderWithRedux';

const mockCheckKey = jest.fn();

jest.mock('../../hooks/useActions', () => ({
	useActions: () => ({
		checkKey: mockCheckKey
	})
}));

describe('Keyboard tests', () => {
	test('snapshot', () => {
		const treeApp = renderer.create(renderWithRedux(<Keyboard />)).toJSON();
		expect(treeApp).toMatchSnapshot();
	});

	test('click on keyboard button', () => {
		render(renderWithRedux(<Keyboard />));
		const btn = screen.getAllByTestId('keyboard-btn');
		
		fireEvent.click(btn[0]);
		expect(mockCheckKey).toBeCalledTimes(1);

		fireEvent.click(btn[0]);
		expect(mockCheckKey).toBeCalledTimes(2);
	});

	test('count keyboard btn', () => {
		render(renderWithRedux(<Keyboard />));
		const btns = screen.getAllByTestId('keyboard-btn');
		
		expect(btns.length).toBe(keyboard.length);
	});
});
