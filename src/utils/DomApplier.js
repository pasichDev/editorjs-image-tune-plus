export default class DomApplier {
  static apply (block, state) {
    const holder = block.holder
    if (!holder) return

    const imgContainer = holder.querySelector('.image-tool')
    if (!imgContainer) return

    // reset classes
    imgContainer.classList.remove(
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
    )

    // apply classes
    imgContainer.classList.add(`mn-img--align-${state.align}`)
    if (state.ratio) {
      imgContainer.classList.add(
        `mn-img--ratio-${state.ratio.replace(':', '-')}`
      )
    }
    imgContainer.classList.add(`mn-img--rounded-${state.rounded}`)

    // image styles
    const img = imgContainer.querySelector('img')
    if (img) {
      img.style.maxWidth = `${state.width}%`
      img.style.width = '100%'
      img.style.height = 'auto'
    }
  }
}
