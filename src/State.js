import { extendObservable, action } from 'mobx'

function State () {
  extendObservable(this,
    {
      start: Date.now(),
      current: Date.now(),

      get elapsedTime () {
        return this.current - this.start
      },

      get elapsedSeconds () {
        return this.elapsedTime / 1000 | 0
      },

      tick: action('tick', () => {
        this.current = Date.now()
      }),

      reset: action('reset', () => {
        this.start = Date.now()
      })
    }
  )
}

const state = new State()
setInterval(state.tick, 1000)

export default state
