import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import State from './State'
import App from './App'

const state = new State()
setInterval(state.tick, 1000)

render(
  <AppContainer>
    <App state={state} />
  </AppContainer>,
  document.getElementById('root')
)

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default

    render(
      <AppContainer>
        <NextApp state={state} />
      </AppContainer>,
      document.getElementById('root')
    )
  })
}
