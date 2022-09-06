<template>
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
  <div class="hello">
  </div>
  <component :is="currentTab"></component>
  <BoxPreview msg="Welcome to Your Vue.js App"/>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
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

</style>
