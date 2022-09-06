import { reactive } from 'vue'

export const store = reactive({
    sponsoredLinks: 4,
    increaseSponsoredLink() {
        this.sponsoredLinks < 10 ? this.sponsoredLinks ++ : ''
    },
    decreaseSponsoredLink() {
        this.sponsoredLinks > 3 ? this.sponsoredLinks -- : ''
    }
})