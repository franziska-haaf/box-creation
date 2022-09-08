<template>
  <div class="flex-column__24 style-tab">
    <div class="flex-row__auto">
      <div class="flex-row__8">
        <span>Show advanced settings</span>
        <input type="checkbox" v-model="showAdvanced">
      </div>
      <button class="primary" disabled>Save design as template</button>
    </div>

    <div class="flex-column__4">
      <label for="boxTemplate">Template</label>
      <div class="flex-row__8">
        <select id="boxTemplate" v-model="selectedTemplate" class="flex-grow-1">
          <option disabled value="">Choose a template</option>
          <option>Soda</option>
          <option>Searchie</option>
          <option>Dentist</option>
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
            <button :class="store.boxWrapper.columns === 1? ' filled img' : 'img'" @click="store.boxWrapper.columns = 1">1</button>
            <button :class="store.boxWrapper.columns === 2? ' filled img' : 'img'" @click="store.boxWrapper.columns = 2">2</button>
            <button :class="store.boxWrapper.columns === 3? ' filled img' : 'img'" @click="store.boxWrapper.columns = 3">3</button>
          </div>
        </div>
        <div class="flex-column__4">
          Corner roundness
          <div class="hidden-input">
            <img src="../assets/icon/rounded_corner.svg" alt="A rectangle with 1 rounded corner" height="24" width="24">
            <input v-model="store.boxWrapper.roundness" class="dense">
          </div>
        </div>
      </div>
      <!--Fill options-->
      <div class="flex-column__4">
        Fill
        <div class="flex-row__48">
          <div v-if="showAdvanced">
            <button :class="store.boxWrapper.fillStyle === 'Color'? ' filled img' : 'img'"
                    @click="store.boxWrapper.fillStyle = 'Color'">
              <img src="../assets/icon/solid_color_fill.svg" alt="Blah">
            </button>
            <button disabled :class="store.boxWrapper.fillStyle === 'Gradient'? ' filled img' : 'img'"
                    @click="store.boxWrapper.fillStyle = 'Gradient'">
              <img src="../assets/icon/gradient_fill.svg" alt="Blah">
            </button>
            <button disabled :class="store.boxWrapper.fillStyle === 'Image'? ' filled img' : 'img'"
                    @click="store.boxWrapper.fillStyle = 'Image'">
              <img src="../assets/icon/img_fill.svg" alt="Blah">
            </button>
          </div>
          <div class="flex-row__8">
            <div class="color-picker"><input type="color" v-model="store.boxWrapper.fill"></div>
            {{ store.boxWrapper.fill }}
          </div>
        </div>
      </div>

      <!--Border options-->
      <div class="flex-column__4">
        Border
        <div class="flex-row__48">
          <div class="hidden-input">
            <img src="../assets/icon/border-weight.svg" alt="Lorem" height="24" width="24">
            <input v-model="store.boxWrapper.borderWeight" class="dense">
          </div>
          <div class="flex-row__8">
            <div class="color-picker"><input type="color" v-model="store.boxWrapper.borderColor"></div>
            {{ store.boxWrapper.borderColor }}
          </div>
          <div v-if="showAdvanced">
            <button :class="store.boxWrapper.borderStyle === 'solid'? ' filled img' : 'img'"
                    @click="store.boxWrapper.borderStyle = 'solid'">
              <img src="../assets/icon/border-solid.svg" alt="lorem" height="24" width="24">
            </button>
            <button :class="store.boxWrapper.borderStyle === 'dashed'? ' filled img' : 'img'"
                    @click="store.boxWrapper.borderStyle = 'dashed'">
              <img src="../assets/icon/border-dashed.svg" alt="lorem" height="24" width="24">
            </button>
            <button :class="store.boxWrapper.borderStyle === 'dotted'? ' filled img' : 'img'"
                    @click="store.boxWrapper.borderStyle = 'dotted'">
              <img src="../assets/icon/border-dotted.svg" alt="lorem" height="24" width="24">
            </button>
          </div>
          <!-- Too complicated to implement vanilla:
                   <div v-if="store.boxWrapper.borderStyle === 'dashed' || store.boxWrapper.borderStyle === 'dotted'" class="hidden-input">
                      <img src="../assets/icon/border-gap.svg" alt="blah" height="24" width="24">
                      <input v-model="store.boxWrapperDashedGap" class="dense">
                    </div>-->
        </div>
      </div>

      <!--Spacing options-->
      <div v-if="showAdvanced" class="flex-column__4">
        Spacing
        <div class="flex-row__48">
          <div class="hidden-input">
            <img src="../assets/icon/margin.svg" alt="A rectangle with 1 rounded corner" height="24" width="24">
            <input v-model="store.boxWrapper.padding" class="dense">
          </div>
          <div>
            Between links
            <button :class="store.sponsoredLink.gapBetween === 'Auto'? ' filled' : ''"
                    @click="store.sponsoredLink.gapBetween = 'Auto'">Auto
            </button>
            <button :class="store.sponsoredLink.gapBetween === 'Manual'? ' filled' : ''"
                    @click="store.sponsoredLink.gapBetween = 'Manual'">Manual
            </button>
          </div>
          <div v-if="store.sponsoredLink.gapBetween === 'Manual'" class="hidden-input">
            <img src="../assets/icon/margin_between_links.svg" alt="blah" height="24" width="24">
            <input v-model="store.sponsoredLink.gapBetweenValue" class="dense">
          </div>
        </div>
      </div>
    </div>

    <div class="flex-column__16 card">
      <h3>Sponsored links</h3>
      <div class="flex-row__48">
        <div class="flex-column__4">
          Spacing
          <div class="hidden-input">
            <img src="../assets/icon/margin.svg" alt="lorem" height="24" width="24">
            <input v-model="store.sponsoredLink.padding" class="dense">
          </div>
        </div>
        <div class="flex-column__4">
          Corner roundness
          <div class="hidden-input">
            <img src="../assets/icon/rounded_corner.svg" alt="blah" height="24" width="24">
            <input v-model="store.sponsoredLink.roundness" class="dense">
          </div>
        </div>
      </div>

      <!--Fill options-->
      <div class="flex-column__4">
        Fill
        <div class="flex-row__48">
          <div v-if="showAdvanced">
            <button :class="store.sponsoredLink.fillStyle === 'Color'? ' filled img' : 'img'"
                    @click="store.sponsoredLink.fillStyle = 'Color'">
              <img src="../assets/icon/solid_color_fill.svg" alt="Blah">
            </button>
            <button disabled :class="store.sponsoredLink.fillStyle === 'Gradient'? ' filled img' : 'img'"
                    @click="store.sponsoredLink.fillStyle = 'Gradient'">
              <img src="../assets/icon/gradient_fill.svg" alt="Blah">
            </button>
          </div>
          <div v-if="showAdvanced" class="hidden-input">
            <select id="boxSite" v-model="store.sponsoredLink.fillFancyness">
              <option disabled value="">Choose a style</option>
              <option>Single color</option>
              <option>Alternating</option>
            </select>
          </div>

          <div class="flex-row__8">
            <div class="color-picker"><input type="color" v-model="store.sponsoredLink.fill"></div>
            {{ store.sponsoredLink.fill }}
          </div>
          <div v-if="store.sponsoredLink.fillFancyness === 'Alternating'" class="flex-row__8">
            <div class="color-picker"><input type="color" v-model="store.sponsoredLink.alternativeFill"></div>
            {{ store.sponsoredLink.alternativeFill }}
          </div>
        </div>
      </div>

      <!--Border options-->
      <div class="flex-column__4">
        Border
        <div class="flex-row__48">
          <div class="hidden-input">
            <img src="../assets/icon/border-weight.svg" alt="Lorem" height="24" width="24">
            <input v-model="store.sponsoredLink.borderWeight" class="dense">
          </div>
          <div class="flex-row__8">
            <div class="color-picker"><input type="color" v-model="store.sponsoredLink.borderColor"></div>
            {{ store.sponsoredLink.borderColor }}
          </div>
          <div v-if="showAdvanced">
            <button :class="store.sponsoredLink.borderStyle === 'solid'? ' filled img' : 'img'"
                    @click="store.sponsoredLink.borderStyle = 'solid'">
              <img src="../assets/icon/border-solid.svg" alt="lorem" height="24" width="24">
            </button>
            <button :class="store.sponsoredLink.borderStyle === 'dashed'? ' filled img' : 'img'"
                    @click="store.sponsoredLink.borderStyle = 'dashed'">
              <img src="../assets/icon/border-dashed.svg" alt="lorem" height="24" width="24">
            </button>
            <button :class="store.sponsoredLink.borderStyle === 'dotted'? ' filled img' : 'img'"
                    @click="store.sponsoredLink.borderStyle = 'dotted'">
              <img src="../assets/icon/border-dotted.svg" alt="lorem" height="24" width="24">
            </button>
          </div>
          <!-- Too complicated to implement vanilla:
                   <div v-if="store.boxWrapper.borderStyle === 'dashed' || store.boxWrapper.borderStyle === 'dotted'" class="hidden-input">
                      <img src="../assets/icon/border-gap.svg" alt="blah" height="24" width="24">
                      <input v-model="store.boxWrapperDashedGap" class="dense">
                    </div>-->
        </div>
      </div>

      <!--Text options-->
      <div class="flex-column__4">
        Text
        <div class="flex-row__48">
          <div class=" hidden-input">
            <select id="fontFamily" v-model="store.sponsoredLink.fontFamily">
              <option disabled value="">Choose a verified site</option>
              <option>"Roboto", sans-serif</option>
              <option>"Qwitcher Grypen", cursive</option>
              <option>"Courier Prime", monospace</option>
            </select>
          </div>
          <div class="hidden-input">
            <img src="../assets/icon/font-size.svg" alt="blah" height="24" width="24">
            <input v-model="store.sponsoredLink.fontSize" class="dense">
          </div>
          <div class="flex-row__8">
            <div class="color-picker"><input type="color" v-model="store.sponsoredLink.fontColor"></div>
            {{ store.sponsoredLink.fontColor }}
          </div>
        </div>
        <div class="flex-row__48">
          <div>
            <button :class="store.sponsoredLink.textAlignment === 'left'? ' filled img' : 'img'"
                    @click="store.sponsoredLink.textAlignment = 'left'">
              <img src="../assets/icon/format_align_left.svg" alt="lorem" height="24" width="24">
            </button>
            <button :class="store.sponsoredLink.textAlignment === 'center'? ' filled img' : 'img'"
                    @click="store.sponsoredLink.textAlignment = 'center'">
              <img src="../assets/icon/format_align_center.svg" alt="lorem" height="24" width="24">
            </button>
            <button :class="store.sponsoredLink.textAlignment === 'right'? ' filled img' : 'img'"
                    @click="store.sponsoredLink.textAlignment = 'right'">
              <img src="../assets/icon/format_align_right.svg" alt="lorem" height="24" width="24">
            </button>
          </div>
          <div>
            <button :class="store.sponsoredLink.isBold ? ' filled img' : 'img'"
                    @click="store.sponsoredLink.isBold = !store.sponsoredLink.isBold">
              <img src="../assets/icon/font-bold.svg" alt="Blah">
            </button>
            <button :class="store.sponsoredLink.isItalic ? ' filled img' : 'img'"
                    @click="store.sponsoredLink.isItalic = !store.sponsoredLink.isItalic">
              <img src="../assets/icon/font-italic.svg" alt="Blah">
            </button>
            <button :class="store.sponsoredLink.isUnderlined ? ' filled img' : 'img'"
                    @click="store.sponsoredLink.isUnderlined = !store.sponsoredLink.isUnderlined">
              <img src="../assets/icon/font-underlined.svg" alt="Blah">
            </button>
            <button :class="store.sponsoredLink.isCaps ? ' filled img' : 'img'"
                    @click="store.sponsoredLink.isCaps = !store.sponsoredLink.isCaps">
              <img src="../assets/icon/font-caps.svg" alt="Blah">
            </button>
          </div>
        </div>
      </div>

      <!--Decoration options-->
      <div v-if="showAdvanced" class="flex-column__4">
        Decoration
        <div class="flex-row__48">
          <div class=" hidden-input">
            <select id="textDecoration" v-model="store.sponsoredLink.textDecoration">
              <option>None</option>
              <option>List</option>
              <option>Fancy border</option>
              <option>Searchie</option>
            </select>
          </div>
          <div v-if="store.sponsoredLink.textDecoration === 'List'" class="flex-row__48">
            <div class=" hidden-input">
              <select id="isList" v-model="store.sponsoredLink.textListDecoration">
                <option>Heart</option>
                <option>Lightning</option>
                <option>Sparkle</option>
                <option>Moon</option>
                <option>Flower</option>
              </select>
            </div>
            <div>
              <button :class="store.sponsoredLink.textDecorationPosition === 'Left'? ' filled img' : 'img'"
                      @click="store.sponsoredLink.textDecorationPosition = 'Left'">
                <img src="../assets/icon/icon-left.svg" alt="lorem" height="24" width="24">
              </button>
              <button :class="store.sponsoredLink.textDecorationPosition === 'Right'? ' filled img' : 'img'"
                      @click="store.sponsoredLink.textDecorationPosition = 'Right'">
                <img src="../assets/icon/icon-right.svg" alt="lorem" height="24" width="24">
              </button>
            </div>
            <div class="hidden-input">
              <img src="../assets/icon/margin_between_links.svg" alt="blah" height="24" width="24">
              <input v-model="store.sponsoredLink.textListDecorationGap" class="dense">
            </div>
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
      showAdvanced: false,
      selectedTemplate: 'Soda',
      store
    }
  },
  watch:{
    selectedTemplate(){
      store.template = this.selectedTemplate
      store.setTemplate()
    }
  }
}
</script>

<style scoped lang="scss">
.style-tab {
  overflow-y: scroll;
  padding-right: 8px;
}

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

  input,
  select {
    border: none;
  }

  input {
    width: 80px;
    padding-left: 32px;
  }

  img {
    position: absolute;
    left: 4px;
    top: 8px;
  }
}

.color-picker {
  height: 32px;
  width: 32px;
  border-radius: 400px;
  overflow: hidden;

  input[type=color] {
    margin-left: -8px;
    margin-top: -8px;
    border: none;
    height: 80px;
    width: 80px;
    cursor: pointer;
  }
}
</style>
