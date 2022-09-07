<template>
  <div class="box-preview-wrapper">
    <div class="box-preview" :style="boxSize">
      <SponsoredLink v-for="amount in store.sponsoredLinks" :key="amount">
        Sponsored link
      </SponsoredLink>
    </div>
  </div>
</template>

<script>
import {store} from '@/store'
import SponsoredLink from './SponsoredLink'

export default {
  name: 'BoxPreview',
  components: {
    SponsoredLink
  },
  data() {
    return {
      store
    }
  },
  computed: {
    boxSize() {
      return {
        '--box-height': store.boxHeight > 0 ? store.boxHeight + 'px' : '100%',
        '--box-width': store.boxWidth > 0 ? store.boxWidth + 'px' : '100%'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box-preview-wrapper {
  overflow: hidden;
}

.box-preview {
  background-color: pink;
  max-height: 100%;
  max-width: 100%;
  height: var(--box-height);
  width: var(--box-width);
}
</style>
