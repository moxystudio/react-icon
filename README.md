# react-icon

[![NPM version][npm-image]][npm-url] [![Downloads][downloads-image]][npm-url] [![Build Status][build-status-image]][build-status-url] [![Coverage Status][codecov-image]][codecov-url] [![Dependency status][david-dm-image]][david-dm-url] [![Dev Dependency status][david-dm-dev-image]][david-dm-dev-url]

[npm-url]:https://npmjs.org/package/@moxy/react-icon
[downloads-image]:https://img.shields.io/npm/dm/@moxy/react-icon.svg
[npm-image]:https://img.shields.io/npm/v/@moxy/react-icon.svg
[build-status-url]:https://github.com/moxystudio/react-icon/actions
[build-status-image]:https://img.shields.io/github/workflow/status/moxystudio/react-icon/Node%20CI/master
[codecov-url]:https://codecov.io/gh/moxystudio/react-icon
[codecov-image]:https://img.shields.io/codecov/c/github/moxystudio/react-icon/master.svg
[david-dm-url]:https://david-dm.org/moxystudio/react-icon
[david-dm-image]:https://img.shields.io/david/moxystudio/react-icon.svg
[david-dm-dev-url]:https://david-dm.org/moxystudio/react-icon?type=dev
[david-dm-dev-image]:https://img.shields.io/david/dev/moxystudio/react-icon.svg

A component to render `SVG` icons.

## Installation

```sh
$ npm install @moxy/react-icon
```

This library is written in modern JavaScript and is published in both CommonJS and ES module transpiled variants. If you target older browsers please make sure to transpile accordingly.

## Motivation

This package was implemented to help import `SVG` icons in `react` projects.

## Usage

Create an `react-icons` folder on your `shared/modules`, and export icons from there.

```js
// shared/modules/react-icons/index.js

import React, { forwardRef } from 'react';
import Icon from '@moxy/react-icon';

const arrowLeftSvg = import(/* webpackChunkName: "svg-sprite" */ '../media/arrow-left.inline.svg');
const ArrowLeftIcon = forwardRef((props, ref) => <Icon ref={ ref } { ...props } svg={ arrowLeftSvg } />);

export { ArrowLeftIcon };
```

Then, just import the recently created icons wherever you need.

```js
import { ArrowLeftIcon } from '../shared/modules/react-icons';

const MyComponent = ({ children }) => (
    <div>
        { children }
        <ArrowLeftIcon />
    </div>
);
```

Also, don't forget to export the icons on your `shared/modules/index.js`. Just add this line:

```js
export * from './icons';
```

## API

These are the props available in `@moxy/react-icon`.

#### svg

Type: `string` or `object` | Required: `true`

The contents of the `SVG` that should be rendered. 
In the case of the prop being an object, it must be the `Promise` that gets the contents of the `SVG`.

#### className

Type: `string` | Required: `false`

A className to apply to the component.

## Tests

```sh
$ npm test
$ npm test -- --watch # during development
```

## Demo

A demo [Next.js](https://nextjs.org/) project is available in the [`/demo`](./demo) folder so you can try out this component.

First, build the `react-icon` project with:

```sh
$ npm run build
```

To run the demo, do the following inside the demo's folder:

```sh
$ npm i
$ npm run dev
```

## License

Released under the [MIT License](./LICENSE).