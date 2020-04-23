'use strict';

const { compose, baseConfig, withRTL, withWeb } = require('@moxy/jest-config');

module.exports = compose(
    baseConfig(),
    withWeb(),
    withRTL(),
);
