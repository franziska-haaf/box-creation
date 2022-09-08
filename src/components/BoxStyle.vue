<template>
  <div class="flex-column__24 style-tab">
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
            <button :class="store.boxColumns === 1? ' filled img' : 'img'" @click="store.boxColumns = 1">1</button>
            <button :class="store.boxColumns === 2? ' filled img' : 'img'" @click="store.boxColumns = 2">2</button>
            <button :class="store.boxColumns === 3? ' filled img' : 'img'" @click="store.boxColumns = 3">3</button>
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
      <!--Fill options-->
      <div class="flex-column__4">
        Fill
        <div class="flex-row__48">
          <div>
            <button :class="store.boxWrapperFillStyle === 'Color'? ' filled img' : 'img'"
                    @click="store.boxWrapperFillStyle = 'Color'">
              <img src="../assets/icon/solid_color_fill.svg" alt="Blah">
            </button>
            <button disabled :class="store.boxWrapperFillStyle === 'Gradient'? ' filled img' : 'img'"
                    @click="store.boxWrapperFillStyle = 'Gradient'">
              <img src="../assets/icon/gradient_fill.svg" alt="Blah">
            </button>
            <button disabled :class="store.boxWrapperFillStyle === 'Image'? ' filled img' : 'img'"
                    @click="store.boxWrapperFillStyle = 'Image'">
              <img src="../assets/icon/img_fill.svg" alt="Blah">
            </button>
          </div>
          <div class="flex-row__8">
            <div class="color-picker"><input type="color" v-model="store.boxWrapperFill"></div>
            {{ store.boxWrapperFill }}
          </div>
        </div>
      </div>

      <!--Border options-->
      <div class="flex-column__4">
        Border
        <div class="flex-row__48">
          <div class="hidden-input">
            <img src="../assets/icon/border-weight.svg" alt="Lorem" height="24" width="24">
            <input v-model="store.boxWrapperBorderWeight" class="dense">
          </div>
          <div class="flex-row__8">
            <div class="color-picker"><input type="color" v-model="store.boxWrapperBorderColor"></div>
            {{ store.boxWrapperBorderColor }}
          </div>
          <div>
            <button :class="store.boxWrapperBorderStyle === 'solid'? ' filled img' : 'img'"
                    @click="store.boxWrapperBorderStyle = 'solid'">
              <img src="../assets/icon/border-solid.svg" alt="lorem" height="24" width="24">
            </button>
            <button :class="store.boxWrapperBorderStyle === 'dashed'? ' filled img' : 'img'"
                    @click="store.boxWrapperBorderStyle = 'dashed'">
              <img src="../assets/icon/border-dashed.svg" alt="lorem" height="24" width="24">
            </button>
            <button :class="store.boxWrapperBorderStyle === 'dotted'? ' filled img' : 'img'"
                    @click="store.boxWrapperBorderStyle = 'dotted'">
              <img src="../assets/icon/border-dotted.svg" alt="lorem" height="24" width="24">
            </button>
          </div>
          <!-- Too complicated to implement vanilla:
                   <div v-if="store.boxWrapperBorderStyle === 'dashed' || store.boxWrapperBorderStyle === 'dotted'" class="hidden-input">
                      <img src="../assets/icon/border-gap.svg" alt="blah" height="24" width="24">
                      <input v-model="store.boxWrapperDashedGap" class="dense">
                    </div>-->
        </div>
      </div>

      <!--Spacing options-->
      <div class="flex-column__4">
        Spacing
        <div class="flex-row__48">
          <div class="hidden-input">
            <img src="../assets/icon/margin.svg" alt="A rectangle with 1 rounded corner" height="24" width="24">
            <input v-model="store.boxWrapperPadding" class="dense">
          </div>
          <div>
            Between links
            <button :class="store.sponsoredLinkGapBetween === 'Auto'? ' filled' : ''"
                    @click="store.sponsoredLinkGapBetween = 'Auto'; manualGapBetweenLinks = false">Auto
            </button>
            <button :class="store.sponsoredLinkGapBetween === 'Manual'? ' filled' : ''"
                    @click="store.sponsoredLinkGapBetween = 'Manual'; manualGapBetweenLinks = true">Manual
            </button>
          </div>
          <div v-if="manualGapBetweenLinks" class="hidden-input">
            <img src="../assets/icon/margin_between_links.svg" alt="blah" height="24" width="24">
            <input v-model="store.sponsoredLinkGapBetweenValue" class="dense">
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
            <input v-model="store.sponsoredLinkPadding" class="dense">
          </div>
        </div>
        <div class="flex-column__4">
          Corner roundness
          <div class="hidden-input">
            <img src="../assets/icon/rounded_corner.svg" alt="blah" height="24" width="24">
            <input v-model="store.sponsoredLinkRoundness" class="dense">
          </div>
        </div>
      </div>

      <!--Fill options-->
      <div class="flex-column__4">
        Fill
        <div class="flex-row__48">
          <div>
            <button :class="store.sponsoredLinkFillStyle === 'Color'? ' filled img' : 'img'"
                    @click="store.sponsoredLinkFillStyle = 'Color'">
              <img src="../assets/icon/solid_color_fill.svg" alt="Blah">
            </button>
            <button disabled :class="store.sponsoredLinkFillStyle === 'Gradient'? ' filled img' : 'img'"
                    @click="store.sponsoredLinkFillStyle = 'Gradient'">
              <img src="../assets/icon/gradient_fill.svg" alt="Blah">
            </button>
          </div>
          <div class="hidden-input">
            <select id="boxSite" v-model="store.sponsoredLinkFillFancyness">
              <option disabled value="">Choose a style</option>
              <option>Single color</option>
              <option>Alternating</option>
            </select>
          </div>

          <div class="flex-row__8">
            <div class="color-picker"><input type="color" v-model="store.sponsoredLinkFill"></div>
            {{ store.sponsoredLinkFill }}
          </div>
          <div v-if="store.sponsoredLinkFillFancyness === 'Alternating'" class="flex-row__8">
            <div class="color-picker"><input type="color" v-model="store.sponsoredLinkAlternativeFill"></div>
            {{ store.sponsoredLinkAlternativeFill }}
          </div>
        </div>
      </div>

      <!--Border options-->
      <div class="flex-column__4">
        Border
        <div class="flex-row__48">
          <div class="hidden-input">
            <img src="../assets/icon/border-weight.svg" alt="Lorem" height="24" width="24">
            <input v-model="store.sponsoredLinkBorderWeight" class="dense">
          </div>
          <div class="flex-row__8">
            <div class="color-picker"><input type="color" v-model="store.sponsoredLinkBorderColor"></div>
            {{ store.sponsoredLinkBorderColor }}
          </div>
          <div>
            <button :class="store.sponsoredLinkBorderStyle === 'solid'? ' filled img' : 'img'"
                    @click="store.sponsoredLinkBorderStyle = 'solid'">
              <img src="../assets/icon/border-solid.svg" alt="lorem" height="24" width="24">
            </button>
            <button :class="store.sponsoredLinkBorderStyle === 'dashed'? ' filled img' : 'img'"
                    @click="store.sponsoredLinkBorderStyle = 'dashed'">
              <img src="../assets/icon/border-dashed.svg" alt="lorem" height="24" width="24">
            </button>
            <button :class="store.sponsoredLinkBorderStyle === 'dotted'? ' filled img' : 'img'"
                    @click="store.sponsoredLinkBorderStyle = 'dotted'">
              <img src="../assets/icon/border-dotted.svg" alt="lorem" height="24" width="24">
            </button>
          </div>
          <!-- Too complicated to implement vanilla:
                   <div v-if="store.boxWrapperBorderStyle === 'dashed' || store.boxWrapperBorderStyle === 'dotted'" class="hidden-input">
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
            <select id="fontFamily" v-model="store.sponsoredLinkFontFamily">
              <option disabled value="">Choose a verified site</option>
              <option>"Roboto", sans-serif</option>
              <option>"Qwitcher Grypen", cursive</option>
              <option>"Courier Prime", monospace</option>
            </select>
          </div>
          <div class="hidden-input">
            <img src="../assets/icon/font-size.svg" alt="blah" height="24" width="24">
            <input v-model="store.sponsoredLinkFontSize" class="dense">
          </div>
        </div>
        <div class="flex-row__48">
          <div>
            <button :class="store.sponsoredLinkTextAlignment === 'left'? ' filled img' : 'img'"
                    @click="store.sponsoredLinkTextAlignment = 'left'">
              <img src="../assets/icon/format_align_left.svg" alt="lorem" height="24" width="24">
            </button>
            <button :class="store.sponsoredLinkTextAlignment === 'center'? ' filled img' : 'img'"
                    @click="store.sponsoredLinkTextAlignment = 'center'">
              <img src="../assets/icon/format_align_center.svg" alt="lorem" height="24" width="24">
            </button>
            <button :class="store.sponsoredLinkTextAlignment === 'right'? ' filled img' : 'img'"
                    @click="store.sponsoredLinkTextAlignment = 'right'">
              <img src="../assets/icon/format_align_right.svg" alt="lorem" height="24" width="24">
            </button>
          </div>
          <div>
            <button :class="store.sponsoredLinkFontIsBold ? ' filled img' : 'img'"
                    @click="store.sponsoredLinkFontIsBold = !store.sponsoredLinkFontIsBold">
              <img src="../assets/icon/font-bold.svg" alt="Blah">
            </button>
            <button :class="store.sponsoredLinkFontIsItalic ? ' filled img' : 'img'"
                    @click="store.sponsoredLinkFontIsItalic = !store.sponsoredLinkFontIsItalic">
              <img src="../assets/icon/font-italic.svg" alt="Blah">
            </button>
            <button :class="store.sponsoredLinkFontIsUnderlined ? ' filled img' : 'img'"
                    @click="store.sponsoredLinkFontIsUnderlined = !store.sponsoredLinkFontIsUnderlined">
              <img src="../assets/icon/font-underlined.svg" alt="Blah">
            </button>
            <button :class="store.sponsoredLinkFontIsCaps ? ' filled img' : 'img'"
                    @click="store.sponsoredLinkFontIsCaps = !store.sponsoredLinkFontIsCaps">
              <img src="../assets/icon/font-caps.svg" alt="Blah">
            </button>
          </div>
        </div>

      </div>

      <!--Decoration options-->
      <div class="flex-column__4">
        Decoration
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
      manualGapBetweenLinks: false,
      template: 'Soda',
      store
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
