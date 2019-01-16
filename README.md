# paper-autocomplete

> Autocomplete component compatible with Polymer 3.x

[![Published on webcomponents.org](https://img.shields.io/badge/webcomponents.org-published-blue.svg)](https://www.webcomponents.org/element/@cwmr/paper-autocomplete)

`paper-autocomplete` extends earlier efforts such as this
[https://github.com/rodo1111/paper-input-autocomplete](https://github.com/rodo1111/paper-input-autocomplete) to provide
keyboard support, remote binding and results scrolling.

# Installation

``` bash
npm install --save paper-autocomplete
```

# Usage

```html
<script type="module" href="node_modules/@cwmr/paper-autocomplete/paper-autocomplete.js">

<paper-autocomplete id="my-id" label="Select"></paper-autocomplete>
```

# Want to contribute?

Check out our [Contributing guide](./CONTRIBUTING.md)!

# For Developers

## Getting Started

Clone the repository and run:

```
npm install
```

## How to run the project

You just need

```
npm run start
```

## How to run the tests

### Locally

In order to run the tests you have two option. You can either run:

```
npm run test
```

### Remote (in Saucelabs)

```
npm run test:remote
```
> You must set these two environment variables: `SAUCE_USERNAME` and `SAUCE_ACCESS_KEY` before running remote tests.


## How to *lint* the project

```
npm run lint
```
