import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Svg from '@moxy/react-svg';

export const Icon = forwardRef(({ className, ...rest }, ref) => {
    const finalProps = {
        ...rest,
        className: classNames('react-icon', className),
    };

    return <Svg ref={ ref } { ...finalProps } />;
});

Icon.propTypes = {
    svg: PropTypes.oneOfType([PropTypes.string, PropTypes.shape({ then: PropTypes.func.isRequired })]).isRequired,
    className: PropTypes.string,
};

export default Icon;
