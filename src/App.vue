<template>
  <div class="content">
    <header>
      <h1>New Box </h1>
      <div class="tabs">
        <button
            v-for="tab in tabs"
            :key="tab"
            :class="['tab', { active: currentTab === tab }]"
            @click="currentTab = tab"
        >
          <span v-if="tab === 'BasicData'">Basic data</span>
          <span v-if="tab === 'BoxStyle'">Style</span>
        </button>
      </div>
    </header>
    <main>
      <component :is="currentTab"></component>
      <BoxPreview msg="Welcome to Your Vue.js App"/>
    </main>
  </div>
</template>

<script>
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
  data(){
    return{
      currentTab: 'BasicData',
      tabs: ['BasicData', 'BoxStyle']
    }
  }
}
</script>

<style>
html, body, #app, .content{
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

body{
  margin: 0;
  padding: 0;
}

.content{
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 24px;

  width: 1390px;
  height: 100%;

  background: #F8F9FA;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}

.tab{
  background: #ffffff;
  border: 1px solid #381EFF;
  height: 40px;
  padding: 10px 24px;
  color: #381EFF;
}

.tab.active{
  background: #381EFF;
  color: #ffffff;
}

.tab.active:hover{
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.12), rgba(255, 255, 255, 0.12)), #381EFF;
  cursor: pointer;
}

.tab:not(.active):hover{
  background: rgba(56, 30, 255, 0.08);
  cursor: pointer;
}

main{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
  align-content: stretch;
  gap: 48px;
}
main > *{
  width: 50%;
}

</style>
