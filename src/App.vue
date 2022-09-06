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
        {{ tab }}
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
background-color: red;
}

.tab.active{
  background-color: blue;
}
</style>
