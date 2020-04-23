import React from 'react';
import { render } from '@testing-library/react';

import { Icon } from '../Icon';

const svg = `<svg height="100" width="100"> 
                <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3"/>
            </svg>`;

const defaultProps = {
    svg,
};

const renderWithProps = (props = {}) => render(<Icon { ...defaultProps } { ...props } />);

describe('Icon', () => {
    it('should render correctly', () => {
        const { asFragment } = renderWithProps();

        expect(asFragment()).toMatchSnapshot();
    });
});
