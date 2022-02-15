import { Selector } from "testcafe";

export default class SearchPlace {
    inputField = Selector('#root > div > div.Home > input');
    placeName = Selector('#root > div > div.Home > div:nth-child(3) > div > h2');

    actionSearchPlace = async(t, textSearch) => {
        await t
            .wait(2000)
            .maximizeWindow()
            .typeText(this.inputField, textSearch)
            .wait(2000)
            .expect(this.placeName.innerText).eql('Cerro Pan de Azúcar')
            .wait(2000)
    }
    
}