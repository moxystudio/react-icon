/* eslint-disable import/no-commonjs */

const { withSVG } = require('@moxy/next-common-files');
const withOneOf = require('@moxy/next-webpack-oneof');
const withPlugins = require('next-compose-plugins');

const withSymlinks = (nextConfig = {}) => ({
    ...nextConfig,
    webpack(config) {
        config.resolve.symlinks = false;

        return config;
    },
});

module.exports = (phase, nextConfig) =>
    withPlugins([
        withSymlinks,
        withOneOf,
        withSVG(),
        withSVG({
            include: /\.data-url\./,
            options: {
                limit: Infinity,
            },
        }),
        withSVG({
            include: /\.inline\./,
            inline: true,
        }),
    ], {})(phase, nextConfig);
