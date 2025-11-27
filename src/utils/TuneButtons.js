import { Icons } from './Icons.js'

export default class TuneButtons {
  constructor (api, state, onChange) {
    this.api = api
    this.state = state
    this.onChange = onChange
    this.buttons = []
  }

  render () {
    const wrapper = document.createElement('div')
    wrapper.classList.add('image-tune-buttons')

    this._add(wrapper, 'reset', () => {
      this.state.reset()
      this.update()
    })

    this._add(wrapper, 'width', () => {
      this.state.cycleWidth()
      this.update()
    })

    this._add(wrapper, 'ratio', () => {
      this.state.cycleRatio()
      this.update()
    })

    this._add(wrapper, 'align', () => {
      this.state.cycleAlign()
      this.update()
    })

    this._add(wrapper, 'rounded', () => {
      this.state.cycleRounded()
      this.update()
    })

    this.update()
    return wrapper
  }

  _add (wrapper, type, handler) {
    const button = document.createElement('button')
    button.classList.add(this.api.styles.settingsButton)
    button.dataset.type = type

    button.addEventListener('click', e => {
      e.preventDefault()
      e.stopPropagation()
      handler()
      this.onChange()
    })

    wrapper.appendChild(button)
    this.buttons.push(button)
  }

  update () {
    this.buttons.forEach(btn => {
      const type = btn.dataset.type

      switch (type) {
        case 'reset':
          btn.innerHTML = Icons.reset
          btn.style.display = this.state.isDefault() ? 'none' : 'inline-flex'
          break

        case 'width':
          btn.innerHTML = Icons.width[this.state.width]
          break

        case 'ratio':
          btn.innerHTML = Icons.ratio[this.state.ratio]
          break

        case 'align':
          btn.innerHTML = Icons.align[this.state.align]
          break

        case 'rounded':
          btn.innerHTML = Icons.rounded[this.state.rounded]
          break
      }
    })
  }
}
