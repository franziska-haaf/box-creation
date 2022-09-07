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
    boxWrapperBorderStyle: 'solid',
    /*Too complicated to implement vanilla: boxWrapperDashedGap: 4,*/

    /*Sponsored links*/
    sponsoredLinkRoundness: 400,
    sponsoredLinkPadding: 16,
    sponsoredLinkGapBetween: 'Auto',
    sponsoredLinkGapBetweenValue: '8',
    sponsoredLinkFillStyle: 'Color',
    sponsoredLinkFillFancyness: 'Single color',
    sponsoredLinkFill: '#C0BCF3',
    sponsoredLinkAlternativeFill: '#F3C9BC',
    sponsoredLinkBorderWeight: 2,
    sponsoredLinkBorderColor: '#381EFF',
    sponsoredLinkBorderStyle: 'solid',

    sponsoredLinkFontFamily: '"Roboto", sans-serif',
})