import React, { Component } from 'react'
import { observer } from 'mobx-react'
import s from './State'
// import DevTools from 'mobx-react-devtools'
//    <DevTools />

const App = () => (
  <div>
    <button onClick={s.reset}>
      Seconds passed: {s.elapsedSeconds}
    </button>
  </div>
)

export default observer(App)
