<template>
  <div class="content">
    <header>
      <h1>New Box </h1>
      <div class="tabs">
        <button
            v-for="tab in tabs"
            :key="tab"
            :class="['primary', { filled: currentTab === tab }]"
            @click="currentTab = tab"
        >
          <span v-if="tab === 'BasicData'">Basic data</span>
          <span v-if="tab === 'BoxStyle'">Style</span>
        </button>
      </div>
    </header>
    <main>
      <component :is="currentTab"></component>
      <BoxPreview/>
    </main>
  </div>
</template>

<script>
import './assets/style.scss'
import {store} from './store.js'
import BasicData from './components/BasicData.vue'
import BoxPreview from './components/BoxPreview.vue'
import BoxStyle from './components/BoxStyle.vue'

export default {
  name: 'App',
  components: {
    BasicData,
    BoxPreview,
    BoxStyle
  },
  data() {
    return {
      currentTab: 'BasicData',
      tabs: ['BasicData', 'BoxStyle'],
      sponsoredLinksOutput: store.sponsoredLinks,
      store
    }
  }
}
</script>

<style lang="scss">
html, body, #app, .content {
  height: 100%;
  max-height: 100%;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  justify-content: flex-end;
  background: url('assets/background.webp') no-repeat;
  background-size: contain;
}

body {
  margin: 0;
  padding: 0;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 24px;
  box-sizing: border-box;

  width: 1390px;
  height: 100%;

  background: #F8F9FA;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;

  main {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 48px;

    > div {
      width: 50%;
    }
  }
}
</style>
