<template>
  <header>
    <h1>New Box </h1>
    <div><p>Tab 1</p>
      <p>Tab 2</p></div>
  </header>
  <div class="hello">
  </div>
  <BasicData msg="Welcome to Your Vue.js App"/>
  <BoxPreview msg="Welcome to Your Vue.js App"/>
  <BoxStyle msg="Welcome to Your Vue.js App"/>
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
</style>
