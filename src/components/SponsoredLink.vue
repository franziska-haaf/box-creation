<template>
  <div class="sponsored-link flex-row__8" :style="linkStyle">
    <span v-if="store.sponsoredLink.textDecoration === 'List' && store.sponsoredLink.textDecorationPosition === 'Left'">
      <span v-if="store.sponsoredLink.textListDecoration === 'Heart'">&#128151;</span>
      <span v-if="store.sponsoredLink.textListDecoration === 'Lightning'">&#9889;</span>
      <span v-if="store.sponsoredLink.textListDecoration === 'Sparkle'">&#10024;</span>
      <span v-if="store.sponsoredLink.textListDecoration === 'Moon'">&#127770;</span>
      <span v-if="store.sponsoredLink.textListDecoration === 'Flower'">&#127800;</span>
    </span>
    Sponsored link
    <span v-if="store.sponsoredLink.textDecoration === 'List' && store.sponsoredLink.textDecorationPosition === 'Right'">
      <span v-if="store.sponsoredLink.textListDecoration === 'Heart'">&#128151;</span>
      <span v-if="store.sponsoredLink.textListDecoration === 'Lightning'">&#9889;</span>
      <span v-if="store.sponsoredLink.textListDecoration === 'Sparkle'">&#10024;</span>
      <span v-if="store.sponsoredLink.textListDecoration === 'Moon'">&#127770;</span>
      <span v-if="store.sponsoredLink.textListDecoration === 'Flower'">&#127800;</span>
    </span>
  </div>
</template>

<script>
import {store} from '@/store'

export default {
  name: 'SponsoredLink',
  props: {
    alternatingCounter: Number
  },
  data() {
    return {
      isAlternativeFill: (this.alternatingCounter % 2) !== 1,
      store
    }
  },
  computed: {
    linkStyle() {
      return {
        '--padding': store.sponsoredLink.padding + 'px',
        '--border-radius': store.sponsoredLink.roundness + 'px',
        '--fill-color': store.sponsoredLink.fillFancyness === 'Alternating' && this.isAlternativeFill ? store.sponsoredLink.alternativeFill : store.sponsoredLink.fill,
        '--border-weight': store.sponsoredLink.borderWeight + 'px',
        '--border-color': store.sponsoredLink.borderColor,
        '--border-style': store.sponsoredLink.borderStyle,
        '--font-color': store.sponsoredLink.fontColor,
        '--font-family': store.sponsoredLink.fontFamily,
        '--font-size': store.sponsoredLink.fontSize + 'px',
        '--font-caps': store.sponsoredLink.isCaps ? 'uppercase' : 'none',
        '--font-is-bold': store.sponsoredLink.isBold ? '700' : '400',
        '--font-italic': store.sponsoredLink.isItalic ? 'italic' : 'normal',
        '--font-underlined': store.sponsoredLink.isUnderlined ? 'underline' : 'none',
        '--font-align': store.sponsoredLink.textAlignment,
        '--gap': store.sponsoredLink.textListDecorationGap + 'px',
      }
    }
  }
}
</script>

<style scoped lang="scss">
.sponsored-link {
  box-sizing: border-box;
  color: var(--font-color);
  padding: var(--padding);
  border-radius: var(--border-radius);
  background-color: var(--fill-color);
  border: var(--border-weight) var(--border-color) var(--border-style);
  font-family: var(--font-family);
  font-size: var(--font-size);
  text-transform: var(--font-caps);
  font-weight: var(--font-is-bold);
  font-style: var(--font-italic);
  text-decoration: var(--font-underlined);
  justify-content: var(--font-align);

  gap: var(--gap);
}
.sponsored-link img{
  font-size: var(--font-size);
}
</style>