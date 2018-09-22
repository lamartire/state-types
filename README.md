# State types

[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier) [![Greenkeeper badge](https://badges.greenkeeper.io/lamartire/state-types.svg)](https://greenkeeper.io/) [![Build Status](https://travis-ci.org/lamartire/state-types.svg?branch=master)](https://travis-ci.org/lamartire/state-types)
[![npm](https://img.shields.io/npm/v/state-types.svg)](https://www.npmjs.com/package/state-types)

> Tiny and easy creating unique types in popular state-management solutions

## Usage

You can simple generate types object in one function:

```js
import types from 'state-types'

const testTypes = types('@@test', ['foo', 'bar'])

// Will return

{
  'foo': '@@test/foo',
  'bar': '@@test/bar'
}
```

## Vuex mutations, actions, etc.

You can use it in `vuex`:

```js
import types from 'state-types'

const testMutations = types('@@types', ['foo', 'bar'])

export default {
  state: false,

  mutations: {
    [testMutations.foo]: (state) => state = true,
    [testMutations.bar]: (state) => state = false
  }
}

...

// Import it where you want and use

this.$store.commit(testMutations.foo)
```

## Redux actions types

You can use it in `redux`:

```js
import types from 'state-types'

export const actionsTypes = types('@@types', ['foo', 'bar'])
export const actionsCreators = {
  [actionsTypes.foo]: () => ({
    type: actionsTypes.foo
  }),
  [actionsTypes.bar]: () => ({
    type: actionsTypes.bar
  })
}

export (state = false, action) => {
  switch(action.type) {
    case actionsTypes.foo:
      return true
    case actionsTypes.bar:
      return false
    default:
      return state
  }
}

...

// Import it where you want and use

dispatch(actionsCreators.foo())
```

## Other cases

You can use it everywhere because it solution hasn't any semantic and code bindings to libraries
and frameworks.
