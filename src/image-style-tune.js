import TuneState from './utils/TuneState.js'
import TuneButtons from './utils/TuneButtons.js'
import DomApplier from './utils/DomApplier.js'
export default class ImageStyleTune {
  static get isTune () {
    return true
  }
  static get saveTuneId () {
    return 'imageTunePlus'
  }

  constructor ({ api, data, block, config }) {
    this.api = api
    this.block = block
    this.config = config || {}

    const saved = block.data?.tunes?.imageTunePlus || data || {}
    this.state = new TuneState(saved)
    this.buttons = new TuneButtons(api, this.state, () => this._apply())

    requestAnimationFrame(() => this._apply(false))
  }

  render () {
    const el = this.buttons.render()
    requestAnimationFrame(() => this._apply(false))

    return el
  }

  save () {
    return this.state.toJSON()
  }

  _apply (triggerChange = true) {
    DomApplier.apply(this.block, this.state)

    if (triggerChange) {
      this.block.dispatchChange()
    }
  }
}
