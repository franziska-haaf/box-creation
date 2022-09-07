import { reactive } from 'vue'

export const store = reactive({
    sponsoredLinks: 4,
    increaseSponsoredLink() {
        this.sponsoredLinks < 10 ? this.sponsoredLinks ++ : ''
    },
    decreaseSponsoredLink() {
        this.sponsoredLinks > 3 ? this.sponsoredLinks -- : ''
    },
    boxHeight: 0,
    boxWidth: 0,
    setBoxHeight(boxHeight){
        this.boxHeight = boxHeight
    },
    setBoxWidth(boxWidth){
        this.boxWidth = boxWidth
    }
})