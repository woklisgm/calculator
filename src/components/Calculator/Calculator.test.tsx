import React from 'react';
import renderer  from 'react-test-renderer';

import { Calculator } from '.';
import { renderWithRedux } from '../../tests/helpers/renderWithRedux';

describe('Calculator tests', () => {
	test('snapshot', () => {
		const treeApp = renderer.create(renderWithRedux(<Calculator />)).toJSON();

		expect(treeApp).toMatchSnapshot();
	});
})
