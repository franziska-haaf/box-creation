<template>
  <div class="flex-column__24">

    <div class="flex-column__4">
      <label for="boxName">Box name</label>
      <input id="boxName" v-model="boxName" placeholder="Green is the new black">
    </div>

    <div class="flex-column__4">
      <label for="boxSite">Site</label>
      <select id="boxSite" v-model="boxSite">
        <option disabled value="">Choose a verified site</option>
        <option>teaminternet.com</option>
        <option>foobar.com</option>
        <option>loremipsum.org</option>
      </select>
    </div>

    <div class="flex-column__4">
      <span>Sponsored links amount <span class="small-text">3-10</span></span>
      <div class="number-input">
        <button @click="store.decreaseSponsoredLink()" :disabled="store.sponsoredLinks === 3">-</button>
        <div class="number">{{ store.sponsoredLinks }}</div>
        <button @click="store.increaseSponsoredLink()" :disabled="store.sponsoredLinks === 10">+</button>
      </div>
    </div>

    <div class="flex-column__4">
      <span>Size <span class="small-text">height x width in px</span></span>
      <div>
        <button :class="(store.boxWidth === 0 && store.boxHeight === 0) && !customSize? 'primary filled' : 'primary'"
                @click="store.setBoxWidth(0); store.setBoxHeight(0); (customSize=false)">Responsive
        </button>
        <button
            :class="(store.boxWidth === 500 && store.boxHeight === 500 && !customSize)? 'primary filled' : 'primary'"
            @click="store.setBoxWidth(500); store.setBoxHeight(500); (customSize=false)">500 x 500
        </button>
        <button
            :class="(store.boxWidth === 400 && store.boxHeight === 800 && !customSize)? 'primary filled' : 'primary'"
            @click="store.setBoxWidth(400); store.setBoxHeight(800); (customSize=false)">400 x 800
        </button>
        <button
            :class="(store.boxWidth === 600 && store.boxHeight === 400 && !customSize)? 'primary filled' : 'primary'"
            @click="store.setBoxWidth(600); store.setBoxHeight(400); (customSize=false)">600 x 400
        </button>
        <button :class="customSize? 'primary filled' : 'primary'"
                @click="(customSize=true)">Custom
        </button>
      </div>
      <div v-if="customSize">
        <input type="number" placeholder="Height in px" v-model="store.boxHeight">
        height
        <input type="number" placeholder="Width in px" v-model="store.boxWidth">
        width
      </div>
    </div>

  </div>

</template>

<script>
import {store} from '@/store'
import '../assets/style.scss'

export default {
  name: 'BasicData',
  /*  props: {
      sponsoredLinksAmount: Number
    },*/
  data() {
    return {
      customSize: false,
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
