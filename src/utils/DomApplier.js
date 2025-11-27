export default class DomApplier {
  static apply (blockHolder, state) {
    if (!blockHolder) return

    // cleanup
    const classes = [
      'mn-img--align-left',
      'mn-img--align-center',
      'mn-img--align-right',
      'mn-img--ratio-16-9',
      'mn-img--ratio-4-3',
      'mn-img--ratio-1-1',
      'mn-img--rounded-0',
      'mn-img--rounded-8',
      'mn-img--rounded-16',
      'mn-img--rounded-24'
    ]
    blockHolder.classList.remove(...classes)

    // align
    blockHolder.classList.add(`mn-img--align-${state.align}`)

    // ratio
    if (state.ratio) {
      blockHolder.classList.add(
        `mn-img--ratio-${state.ratio.replace(':', '-')}`
      )
    }

    // rounded
    blockHolder.classList.add(`mn-img--rounded-${state.rounded}`)

    // width
    const img = blockHolder.querySelector('img')
    if (img) {
      img.style.maxWidth = `${state.width}%`
      img.style.width = '100%'
      img.style.height = 'auto'
    }
  }
}
