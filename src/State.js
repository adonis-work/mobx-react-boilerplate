import { extendObservable, action } from 'mobx'

function State () {
  extendObservable(this,
    {
      start: Date.now(),
      current: Date.now(),

      get elapsedTime () {
        return ((this.current - this.start) / 1000 | 0)
      },

      tick: action('tick', () => {
        this.current = Date.now()
      })
    }
  )
}

export default State
