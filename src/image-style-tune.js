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

    this.state = new TuneState(data || {})

    this.buttons = new TuneButtons(api, this.state, () => this._apply())
  }

  render () {
    return this.buttons.render()
  }

  save () {
    return {
      ...this.state.toJSON()
    }
  }

  _apply () {
    DomApplier.apply(this.block.holder, this.state, this.block.data)
    this.block.dispatchChange()
  }
}
