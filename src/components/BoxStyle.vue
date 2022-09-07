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

<style scoped>

</style>
