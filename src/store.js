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
    boxWrapper: {
        roundness: 0,
        padding: 0,
        columns: 1,
        fillStyle: 'Color',
        fill: '#ffffff',
        borderWeight: 0,
        borderColor: '#000000',
        borderStyle: 'solid',
    },
    sponsoredLink: {
        roundness: 0,
        padding: 0,
        gapBetween: 'Auto',
        gapBetweenValue: '8',
        fillStyle: 'Color',
        fill: '#000000',
        alternativeFill: '#999999',
        fillFancyness: 'Single color',

        borderWeight: 0,
        borderColor: '#381EFF',
        borderStyle: 'solid',

        fontFamily: '"Roboto", sans-serif',
        fontSize: '16',
        fontIsBold: false,
        fontIsItalic: false,
        fontIsUnderlined: false,
        textAlignment: 'left',
        textDecoration: 'None',
        textDecorationPosition: 'Left',
        textListDecoration: 'Heart',
        textListDecorationGap: '8',
        fontColor: '#000000'
    },
    template: 'Soda',
    setTemplate() {
        console.log('I have this template: ' + this.template);
        switch (this.template) {
            case 'Searchie':
                this.boxWrapper.roundness = 0;
                this.boxWrapper.borderWeight = 0;
                this.boxWrapper.padding = 0;
                this.boxWrapper.fill = '#444';
                this.sponsoredLink.fill = '#555';
                this.sponsoredLink.roundness = 0;
                this.sponsoredLink.borderWeight = 0;
                this.sponsoredLink.padding = 24;
                this.sponsoredLink.fontColor = '#fff';
                this.sponsoredLink.gapBetween = 'Manual';
                this.sponsoredLink.gapBetweenValue = 1;
                this.sponsoredLink.textDecoration = 'Searchie';
                break;
            default:
                this.boxWrapper.roundness = 16;
                this.boxWrapper.padding = 16;
                this.boxWrapper.fill = '#F8FFA8';
                this.boxWrapper.borderWeight = 2;
                this.boxWrapper.borderColor = '#BECE09';
                this.sponsoredLink.roundness = 400;
                this.sponsoredLink.padding = 16;
                this.sponsoredLink.fill = '#C0BCF3';
                this.sponsoredLink.alternativeFill = '#F3C9BC';
                this.sponsoredLink.borderWeight = 2;
                this.sponsoredLink.borderColor = '#381EFF';
                this.sponsoredLink.fontColor = '#381EFF';
                this.sponsoredLink.textDecoration= 'None';
        }
    },
})