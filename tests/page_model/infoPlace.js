import { Selector } from "testcafe";

const elementByXPath = Selector(xpath => {
    const iterator = document.evaluate(xpath, document, null, XPathResult.UNORDERED_NODE_ITERATOR_TYPE, null )
    const items = [];

    let item = iterator.iterateNext();

    while (item) {
        items.push(item);
        item = iterator.iterateNext();
    }

    return items;
});

export default class InfoPlace {

    buttonInfo = Selector('#root > div > div.Home > div:nth-child(3) > div:nth-child(1) > button');
    arrowRight = Selector('#carouselExampleControls > button.carousel-control-next > span.carousel-control-next-icon');
    closeModal = Selector('#body > div:nth-child(6) > div > div.ant-modal-wrap > div > div.ant-modal-content > button > span');

    

    actionInfoPlace = async(t) => {
        await t
            .wait(2000)
            .maximizeWindow()
            .click(this.buttonInfo)
            .wait(1000)
            .click(this.arrowRight)
            .wait(1000)
            .click(this.arrowRight)
            .wait(1000)
            .click(this.closeModal)
            .wait(2000);

    }

}

