import {reactive} from 'vue'

export const store = reactive({
    sponsoredLinks: 4,
    increaseSponsoredLink() {
        this.sponsoredLinks < 10 ? this.sponsoredLinks++ : ''
    },
    decreaseSponsoredLink() {
        this.sponsoredLinks > 3 ? this.sponsoredLinks-- : ''
    },
    boxHeight: 0,
    boxWidth: 0,
    setBoxHeight(boxHeight) {
        this.boxHeight = boxHeight
    },
    setBoxWidth(boxWidth) {
        this.boxWidth = boxWidth
    },
    /*Box wrapper*/
    boxWrapperRoundness: 16,
    boxWrapperPadding: 16,
    boxColumns: 1,
    boxWrapperFillStyle: 'Color',
    boxWrapperFill: '#F8FFA8',
    boxWrapperBorderWeight: 2,
    boxWrapperBorderColor: '#BECE09',
    boxWrapperStyle: 'solid',
    boxWrapperDashedGap: 4,

    /*Sponsored links*/
    sponsoredLinkPadding: 16,
    sponsoredLinkGapBetween: 'Auto',
    sponsoredLinkGapBetweenValue: '8'

})