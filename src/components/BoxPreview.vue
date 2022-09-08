<template>
  <div class="box-preview-wrapper">
    <div
        :class="'box-preview ' + 'columns-is-'+ store.boxWrapper.columns + (store.sponsoredLink.textDecoration === 'Fancy border' ? ' decoration-fancy-border': '')"
        :style="boxStyle">
      <SponsoredLink v-for="amount in store.sponsoredLinks" :key="amount" :alternatingCounter="amount">
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
    boxStyle() {
      return {
        '--box-height': store.boxHeight > 0 ? store.boxHeight + 'px' : 'auto',
        '--box-width': store.boxWidth > 0 ? store.boxWidth + 'px' : '100%',
        '--box-border-radius': store.boxWrapper.roundness + 'px',
        '--box-bg-color': store.boxWrapper.fill,
        '--box-padding': store.boxWrapper.padding + 'px',
        '--box-margin-between-links': store.sponsoredLink.gapBetweenValue + 'px',
        '--box-margin-between-links-mode': store.sponsoredLink.gapBetween === 'Auto' ? 'space-between' : 'flex-start',
        '--box-border-weight': store.boxWrapper.borderWeight + 'px',
        '--box-border-color': store.boxWrapper.borderColor,
        '--box-border-style': store.boxWrapper.borderStyle,
        '--sponsored-link-color': store.sponsoredLink.fill,
        /*Too complicated to implement vanilla: '--box-border-gap': store.boxWrapperDashedGap + 'px',*/
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
  background-color: var(--box-bg-color);
  max-height: 100%;
  max-width: 100%;
  height: var(--box-height);
  width: var(--box-width);
  border-radius: var(--box-border-radius);
  padding: var(--box-padding);
  box-sizing: border-box;

  display: flex;
  flex-direction: column;
  gap: var(--box-margin-between-links);
  justify-content: var(--box-margin-between-links-mode);

  border: var(--box-border-weight) var(--box-border-style) var(--box-border-color);
}

.columns-is-1 {
}

.columns-is-2 {
  flex-direction: row;
  flex-wrap: wrap;

  .sponsored-link {
    width: 49%;
  }
}

.columns-is-3 {
  flex-direction: row;
  flex-wrap: wrap;

  .sponsored-link {
    width: 32%;
  }
}

.decoration-fancy-border {
  border-width: 20px;
  border-image: repeating-radial-gradient(
          circle at 10px,
          var(--box-bg-color),
          var(--sponsored-link-color) 2px,
          var(--box-border-color) 4px,
          var(--sponsored-link-color) 2px
  ) 1;
}
</style>
