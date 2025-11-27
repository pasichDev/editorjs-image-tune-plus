export default class DomApplier {
  static apply (blockHolder, state) {
    if (!blockHolder) return
    const imgContainer = blockHolder.querySelector('.image-tool')
    if (!imgContainer) return

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

    imgContainer.classList.remove(...classes)

    // align
    imgContainer.classList.add(`mn-img--align-${state.align}`)

    // ratio
    if (state.ratio) {
      imgContainer.classList.add(
        `mn-img--ratio-${state.ratio.replace(':', '-')}`
      )
    }

    // rounded
    imgContainer.classList.add(`mn-img--rounded-${state.rounded}`)

    // width
    const img = imgContainer.querySelector('img')
    if (img) {
      img.style.maxWidth = `${state.width}%`
      img.style.width = '100%'
      img.style.height = 'auto'
    }
  }
}
