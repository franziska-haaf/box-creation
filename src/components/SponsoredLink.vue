<template>
  <div class="sponsored-link flex-row__8" :style="linkStyle">
    <span v-if="store.sponsoredTextDecoration === 'List' && store.sponsoredTextDecorationPosition === 'Left'">
      <span v-if="store.sponsoredTextListDecoration === 'Heart'">&#128151;</span>
      <span v-if="store.sponsoredTextListDecoration === 'Lightning'">&#9889;</span>
      <span v-if="store.sponsoredTextListDecoration === 'Sparkle'">&#10024;</span>
      <span v-if="store.sponsoredTextListDecoration === 'Moon'">&#127770;</span>
      <span v-if="store.sponsoredTextListDecoration === 'Flower'">&#127800;</span>
    </span>
    Sponsored link
    <span v-if="store.sponsoredTextDecoration === 'List' && store.sponsoredTextDecorationPosition === 'Right'">
      <span v-if="store.sponsoredTextListDecoration === 'Heart'">&#128151;</span>
      <span v-if="store.sponsoredTextListDecoration === 'Lightning'">&#9889;</span>
      <span v-if="store.sponsoredTextListDecoration === 'Sparkle'">&#10024;</span>
      <span v-if="store.sponsoredTextListDecoration === 'Moon'">&#127770;</span>
      <span v-if="store.sponsoredTextListDecoration === 'Flower'">&#127800;</span>
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
        '--padding': store.sponsoredLinkPadding + 'px',
        '--border-radius': store.sponsoredLinkRoundness + 'px',
        '--fill-color': store.sponsoredLinkFillFancyness === 'Alternating' && this.isAlternativeFill ? store.sponsoredLinkAlternativeFill : store.sponsoredLinkFill,
        '--border-weight': store.sponsoredLinkBorderWeight + 'px',
        '--border-color': store.sponsoredLinkBorderColor,
        '--border-style': store.sponsoredLinkBorderStyle,
        '--font-color': store.sponsoredLinkFontColor,
        '--font-family': store.sponsoredLinkFontFamily,
        '--font-size': store.sponsoredLinkFontSize + 'px',
        '--font-caps': store.sponsoredLinkFontIsCaps ? 'uppercase' : 'none',
        '--font-is-bold': store.sponsoredLinkFontIsBold ? '700' : '400',
        '--font-italic': store.sponsoredLinkFontIsItalic ? 'italic' : 'normal',
        '--font-underlined': store.sponsoredLinkFontIsUnderlined ? 'underline' : 'none',
        '--font-align': store.sponsoredLinkTextAlignment,
        '--gap': store.sponsoredTextListDecorationGap + 'px',
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