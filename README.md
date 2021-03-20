# @yawwusu/my-first-npm-package

> default custom React hook from npx create-react hook. This is my first published npm package :) 

[![NPM](https://img.shields.io/npm/v/@yawwusu/my-first-npm-package.svg)](https://www.npmjs.com/package/@yawwusu/my-first-npm-package) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save @yawwusu/my-first-npm-package
```

## Usage

```jsx
import React, { Component } from 'react'

import { useMyFirstHook } from '@yawwusu/my-first-npm-package'

const Example = () => {
  const example = useMyFirstHook()
  return (
    <div>{example}</div>
  )
}
```

## License

MIT © [yawwusu](https://github.com/yawwusu)

---

This hook is created using [create-react-hook](https://github.com/hermanya/create-react-hook).
