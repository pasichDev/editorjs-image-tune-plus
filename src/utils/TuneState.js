export default class ImageStyleState {
  constructor (data = {}) {
    this.width = data.width ?? 100
    this.ratio = data.ratio ?? null
    this.align = data.align ?? 'center'
    this.rounded = data.rounded ?? 0
  }

  isDefault () {
    return (
      this.width === 100 &&
      this.ratio === null &&
      this.align === 'center' &&
      this.rounded === 0
    )
  }

  isDecorEnabled () {
    return this.rounded > 0
  }

  reset () {
    this.width = 100
    this.ratio = null
    this.align = 'center'
    this.rounded = 0
  }

  cycleWidth () {
    const arr = [100, 80, 60, 50]
    this.width = arr[(arr.indexOf(this.width) + 1) % arr.length]
  }

  cycleRatio () {
    const ratios = [null, '16:9', '4:3', '1:1']
    const idx = ratios.indexOf(this.ratio)
    this.ratio = ratios[(idx + 1) % ratios.length]

    // ratio → auto width 100%
    if (this.ratio !== null) {
      this.width = 100
    }
  }

  cycleAlign () {
    const arr = ['left', 'center', 'right']
    this.align = arr[(arr.indexOf(this.align) + 1) % arr.length]
  }

  cycleRounded () {
    const list = [0, 8, 16, 24]
    const idx = list.indexOf(this.rounded)
    this.rounded = list[(idx + 1) % list.length]
  }

  toJSON () {
    return {
      width: this.width,
      ratio: this.ratio,
      align: this.align,
      rounded: this.rounded
    }
  }
}
