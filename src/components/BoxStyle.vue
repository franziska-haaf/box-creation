<template>
  <div class="flex-column__24">
    <div class="flex-row__auto">
      <div class="flex-row__8">
        <span>Show advanced</span>
        <input type="checkbox" v-model="showAdvanced">
      </div>
      <button class="primary" disabled>Save design as template</button>
    </div>

    <div class="flex-column__4">
      <label for="boxTemplate">Template</label>
      <div class="flex-row__8">
        <select id="boxTemplate" v-model="template" class="flex-grow-1">
          <option disabled value="">Choose a template</option>
          <option>Soda</option>
          <option>Searchie</option>
          <option>Gothic</option>
        </select>
        <span class="text-primary">Reset changes</span>
      </div>
    </div>

    <div class="flex-column__16 card">
      <h3>Wrapper</h3>
  <div class="flex-row__24">
    <div class="flex-column__4">
      Columns
      <div>
        <button :class="store.boxColumns === 1? ' filled' : ''" @click="store.boxColumns = 1">1</button>
        <button :class="store.boxColumns === 2? ' filled' : ''" @click="store.boxColumns = 2">2</button>
        <button :class="store.boxColumns === 3? ' filled' : ''" @click="store.boxColumns = 3">3</button>
      </div>
    </div>
    <div class="flex-column__4">
      Corner roundness
      <div class="hidden-input">
        <img src="../assets/icon/rounded_corner.svg" alt="A rectangle with 1 rounded corner" height="24" width="24">
        <input v-model="store.boxWrapperRoundness" class="dense">
      </div>
    </div>
  </div>
    </div>
  </div>
</template>

<script>
import {store} from "@/store";

export default {
  name: 'BoxStyle',
  data() {
    return {
      showAdvanced: true,
      template: 'Soda',
      store
    }
  }
}
</script>

<style scoped lang="scss">
.card {
  background: rgba(0, 0, 0, 0.08);
  padding: 16px;

  > div:not(:last-child) {
    border-bottom: 2px solid rgba(0, 0, 0, 0.12);
    padding-bottom: 16px;
  }
}

.hidden-input {
  position: relative;
  input {
    border: none;
    padding-left: 32px;
    width: 80px;
  }
  img{
    position: absolute;
    left: 4px;
    top: 6px;
  }
}
</style>
