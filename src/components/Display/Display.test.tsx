/* eslint-disable testing-library/no-debugging-utils */
import React from 'react';
import { cleanup, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import '@testing-library/jest-dom';
import renderer  from 'react-test-renderer';

import { Display } from '.';
import * as hook from '../../hooks/useTypedSelector';
import { renderWithRedux } from '../../tests/helpers/renderWithRedux';

// const mockTypedSelector = jest.fn(() => ({result: 0, expression: ''}));

beforeEach(() => {
	jest.spyOn(hook, 'useTypedSelector').mockReturnValue({result:0, expression: ''});
});

afterEach(cleanup);

afterAll(() => {
	jest.unmock('../../hooks/useTypedSelector');
})

describe('Display test', () => {
	test('snapshot', () => {
		const treeApp = renderer.create(renderWithRedux(<Display />)).toJSON();

		expect(treeApp).toMatchSnapshot();
	});

	test('check not empty expression', () => {
		jest.spyOn(hook, 'useTypedSelector').mockReturnValue({result:0, expression: '1+1'});
		
		render(renderWithRedux(<Display />));
		expect(screen.getByTestId('expression')).toContainHTML('1+1');
	});

	// test('check empty expression', () => {
	// 	jest.spyOn(hook, 'useTypedSelector').mockReturnValue({result:0, expression: ''});
		
	// 	render(renderWithRedux(<Display />));
	// 	expect(screen.getByTestId('expression')).toBeEmptyDOMElement();
	// });

	test('check result === 0', () => {
		jest.spyOn(hook, 'useTypedSelector').mockReturnValue({result: 0, expression: ''});
		
		render(renderWithRedux(<Display />));
		expect(screen.getByTestId('result')).toContainHTML('0');
	});

	test('check not empty result', () => {
		jest.spyOn(hook, 'useTypedSelector').mockReturnValue({result: 122, expression: ''});
		
		render(renderWithRedux(<Display />));
		expect(screen.getByTestId('result')).toContainHTML('122');
	});

	test('if result equal false render 0', () => {
		jest.spyOn(hook, 'useTypedSelector').mockReturnValue({result: null, expression: ''});
		
		render(renderWithRedux(<Display />));
		expect(screen.getByTestId('result')).toContainHTML('0');
	});
})
