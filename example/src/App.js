import React from 'react'
import { useMyFirstHook } from '@yawwusu/my-first-npm-package'

const App = () => {
  const example = useMyFirstHook()
  return (
    <div>
      {example}
    </div>
  )
}
export default App