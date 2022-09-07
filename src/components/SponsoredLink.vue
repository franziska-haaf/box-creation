<template>
  <div class="sponsored-link" :style="linkStyle">
    Sponsored link
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
      }
    }
  }
}
</script>

<style scoped lang="scss">
.sponsored-link {
  box-sizing: border-box;
  padding: var(--padding);
  border-radius: var(--border-radius);
  background-color: var(--fill-color);
  border: var(--border-weight) var(--border-color) var(--border-style);
}
</style>