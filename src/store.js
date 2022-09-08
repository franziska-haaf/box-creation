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
                this.boxWrapper.fill = '#444444';
                this.sponsoredLink.fill = '#555555';
                this.sponsoredLink.roundness = 0;
                this.sponsoredLink.borderWeight = 0;
                this.sponsoredLink.padding = 24;
                this.sponsoredLink.fontColor = '#ffffff';
                this.sponsoredLink.gapBetween = 'Manual';
                this.sponsoredLink.gapBetweenValue = 1;
                this.sponsoredLink.textDecoration = 'Searchie';
                this.sponsoredLink.fontSize = '16';
                this.sponsoredLink.fontFamily = '1"Roboto", sans-serif';
                this.sponsoredLink.fontIsBold = true;
                this.boxWrapper.borderStyle = 'solid';
                break;
            case 'Dentist':
                this.sponsoredLink.gapBetween = 'Auto';
                this.boxWrapper.roundness = 0;
                this.boxWrapper.borderWeight = 8;
                this.boxWrapper.borderColor = '#c8e9f6';
                this.boxWrapper.padding = 16;
                this.boxWrapper.fill = '#e9f2f5';
                this.sponsoredLink.fill = '#ffffff';
                this.sponsoredLink.borderColor = '#c8e9f6';
                this.sponsoredLink.roundness = 4;
                this.sponsoredLink.borderWeight = 1;
                this.sponsoredLink.padding = 24;
                this.sponsoredLink.fontColor = '#222222';
                this.sponsoredLink.gapBetween = 'Manual';
                this.sponsoredLink.gapBetweenValue = 8;
                this.sponsoredLink.textDecoration = 'List';
                this.sponsoredLink.textListDecoration = 'Tooth';
                this.sponsoredLink.textListDecorationGap = '24';
                this.sponsoredLink.fontSize = '32';
                this.sponsoredLink.fontFamily = '"Qwitcher Grypen", cursive';
                this.sponsoredLink.fontIsBold = false;
                this.boxWrapper.borderStyle = 'dotted';
                break;
            default:
                this.sponsoredLink.gapBetween = 'Auto';
                this.boxWrapper.roundness = 16;
                this.boxWrapper.padding = 16;
                this.boxWrapper.fill = '#F8FFA8';
                this.boxWrapper.borderWeight = 2;
                this.boxWrapper.borderColor = '#BECE09';
                this.sponsoredLink.gapBetweenValue = 16;
                this.sponsoredLink.roundness = 400;
                this.sponsoredLink.padding = 16;
                this.sponsoredLink.fill = '#C0BCF3';
                this.sponsoredLink.alternativeFill = '#F3C9BC';
                this.sponsoredLink.borderWeight = 2;
                this.sponsoredLink.borderColor = '#381EFF';
                this.sponsoredLink.fontColor = '#381EFF';
                this.sponsoredLink.textDecoration= 'None';
                this.sponsoredLink.fontSize = '16';
                this.sponsoredLink.fontFamily = '1"Roboto", sans-serif';
                this.sponsoredLink.fontIsBold = false;
                this.boxWrapper.borderStyle = 'solid';
        }
    },
})