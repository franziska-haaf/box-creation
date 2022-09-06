import { reactive } from 'vue'

export const store = reactive({
    sponsoredLinks: 4,
    increaseSponsoredLink() {
        this.sponsoredLinks++
    },
    decreaseSponsoredLink() {
        this.sponsoredLinks--
    }
})