<template>
  <div class="flex-column-24">

    <div class="flex-column-4">
      <label for="boxName">Box name</label>
      <input id="boxName" v-model="boxName" placeholder="Green is the new black">
    </div>

    <div class="flex-column-4">
      <label for="boxSite">Site</label>
      <select id="boxSite" v-model="boxSite">
        <option disabled value="">Choose a verified site</option>
        <option>teaminternet.com</option>
        <option>foobar.com</option>
        <option>loremipsum.org</option>
      </select>
    </div>

    <div class="flex-column-4">
      <span>Sponsored links amount <span class="small-text">3-10</span></span>
      <div class="number-input">
        <button @click="store.decreaseSponsoredLink()" :disabled="store.sponsoredLinks === 3">-</button>
        <div class="number">{{store.sponsoredLinks}}</div>
        <button @click="store.increaseSponsoredLink()"  :disabled="store.sponsoredLinks === 10">+</button>
      </div>
    </div>

    <div class="flex-column-4">
      <span>Size</span>
      <div>
        <button @click="store.setBoxWidth(400); store.setBoxHeight(400)">400 x 400</button>
        <button @click="store.setBoxWidth(800); store.setBoxHeight(800)">800 x 800</button>
      </div>
    </div>
  </div>

</template>

<script>
import { store } from '@/store'
import  '../assets/style.css'

export default {
  name: 'BasicData',
  /*  props: {
      sponsoredLinksAmount: Number
    },*/
  data() {
    return {
      boxName: '',
      boxSite: '',
      store
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
