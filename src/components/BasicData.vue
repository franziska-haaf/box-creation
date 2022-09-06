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
<!--      <label for="sponsoredLinksAmount">Sponsored links amount <span class="small-text">3-10</span></label>-->
      Sponsored links amount
      <div class="number-input">
        <button @click="store.decreaseSponsoredLink()">-</button>
        {{store.sponsoredLinks}}
        <button @click="store.increaseSponsoredLink()">+</button>
      </div>
    </div>
  </div>

</template>

<script>
import { store } from '@/store'

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
