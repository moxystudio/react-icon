import React, { forwardRef } from 'react';
import Icon from '@moxy/react-icon';

// SVGs
const twitterIcon = import(/* webpackChunkName: "svg-sprite" */ '../../media/twitter.inline.svg');

// Icons
const TwitterIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ twitterIcon } />);

export {
    TwitterIcon,
};
