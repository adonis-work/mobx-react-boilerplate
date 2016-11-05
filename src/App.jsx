import React, { Component } from 'react'
import { observer } from 'mobx-react'
import DevTools from 'mobx-react-devtools'

const App = ({state:{tick, elapsedTime}}) => (
  <div>
    <button onClick={tick}>
      Seconds passed: {elapsedTime}
    </button>
    <DevTools />
  </div>
)

export default observer(App)
