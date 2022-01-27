import { Selector } from "testcafe";


export default class RegisterUser {
    iconUser = Selector('#root > div > div.Navbar > nav > div.mx-3.my-1 > button > img'); 
    linkRegister = Selector('#offcanvasWithBackdrop > div.offcanvas-body > div.d-grid.gap-2.col-6.mx-auto.my-5.w-75 > p > a');
    fieldName = Selector('#root > div.container.mt-5.w-50 > form > div > div:nth-child(1) > input');
    fieldEmail = Selector('#root > div.container.mt-5.w-50 > form > div > div:nth-child(2) > input');
    fieldPassword = Selector('#root > div.container.mt-5.w-50 > form > div > div:nth-child(3) > input');
    fieldBirth = Selector('#root > div.container.mt-5.w-50 > form > div > div.w-50.m-auto.mb-5 > div > div > input');
    buttonCreate = Selector('#root > div.container.mt-5.w-50 > form > div > button');
    birthSelected = Selector('#body > div:nth-child(7) > div > div > div > div > div > div.ant-picker-body > table > tbody > tr:nth-child(3) > td.ant-picker-cell.ant-picker-cell-in-view.ant-picker-cell-selected > div');
    titlePlace = Selector('#root > div > div.Home > div:nth-child(3) > div:nth-child(1) > h2');

    actionRegisterUser = async(t, name, email, password, birth) => {
        await t
            .wait(3000)
            .maximizeWindow()
            .click(this.iconUser)
            .wait(100)
            .click(this.linkRegister)
            .wait(2000)
            .typeText(this.fieldName, name)
            .wait(2000)
            .typeText(this.fieldEmail, email)
            .wait(2000)
            .typeText(this.fieldPassword, password)
            .wait(2000)
            .typeText(this.fieldBirth, birth)
            .wait(3000)
            .click(this.birthSelected)
            .wait(1000)
            .click(this.buttonCreate)
            .wait(3000)
            .expect(this.titlePlace.innerText).eql('Cerro Pan de Azúcar');
    }
}