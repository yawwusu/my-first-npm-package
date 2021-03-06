import * as React from 'react'

export const useMyFirstHook = () => {
  let [{
    counter
  }, setState] = React.useState({
    counter: 0
  })

  React.useEffect(() => {
    let interval = window.setInterval(() => {
      counter++
      setState({counter})
    }, 500)
    return () => {
      window.clearInterval(interval)
    }
  }, [])

  return counter
}
