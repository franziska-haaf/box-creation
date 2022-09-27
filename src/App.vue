<template>
  <div class="content">
    <header class="flex-column__16">
      <div class="flex-row__8">
        <button class="primary filled" disabled>X</button>
        <h1>New Box </h1>
      </div>
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
    <footer>
      <button class="primary" disabled>Cancel</button>
      <button class="primary text" disabled>
        <svg xmlns="http://www.w3.org/2000/svg" height="24" width="24"><path d="M14.1 19H7v-2h7.1q1.575 0 2.737-1Q18 15 18 13.5T16.837 11q-1.162-1-2.737-1H7.8l2.6 2.6L9 14 4 9l5-5 1.4 1.4L7.8 8h6.3q2.425 0 4.163 1.575Q20 11.15 20 13.5q0 2.35-1.737 3.925Q16.525 19 14.1 19Z"/></svg>
        Undo last action</button>
      <button class="primary filled" disabled>Create box</button>
    </footer>
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
  },
  mounted() {
    store.setTemplate()
  },
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

header {
  width: 100%;
  border-bottom: solid 1px rgba(0, 0, 0, 0.12);
  padding: 32px 32px 0;
  box-sizing: border-box;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

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
    box-sizing: border-box;
    padding: 0 32px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    gap: 24px;
    overflow: hidden;

    > div {
      width: 50%;
    }
  }

  footer{
    box-sizing: border-box;
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 24px 24px;
  }
}
</style>
