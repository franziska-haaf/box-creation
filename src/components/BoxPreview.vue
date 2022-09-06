<template>
  <div class="box-preview-wrapper">
    <div class="box-preview" :style="boxSize">
      Box preview
    </div>
  </div>
</template>

<script>
import {store} from '@/store'

export default {
  name: 'BoxPreview',
  data() {
    return {
      store
    }
  },
  computed: {
    boxSize () {
      return{
        '--box-height': store.boxHeight + 'px',
        '--box-width': store.boxWidth + 'px'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.box-preview-wrapper{
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
