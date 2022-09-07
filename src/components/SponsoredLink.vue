<template>
  <div class="sponsored-link" :style="linkStyle">
    Sponsored link
  </div>
</template>

<script>
import {store} from '@/store'

export default {
  name: 'SponsoredLink',
  data() {
    return {
      store
    }
  },
  computed: {
    linkStyle() {
      return {
        '--padding': store.sponsoredLinkPadding + 'px',
        '--border-radius': store.sponsoredLinkRoundness + 'px',
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .sponsored-link{
    padding: var(--padding);
    border-radius: var(--border-radius);
  }
</style>