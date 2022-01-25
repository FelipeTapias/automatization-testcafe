import { Selector } from "testcafe";


export default class RegisterUser {
    iconUser = Selector('#root > div > div.Navbar > nav > div.mx-3.my-1 > button > img'); 
    linkRegister = Selector('#offcanvasWithBackdrop > div.offcanvas-body > div.d-grid.gap-2.col-6.mx-auto.my-5.w-75 > p > a');
    fieldName = Selector('#root > div.container.mt-5.w-50 > form > div > div:nth-child(1) > input');
    fieldEmail = Selector('#root > div.container.mt-5.w-50 > form > div > div:nth-child(2) > input');
    fieldPassword = Selector('#root > div.container.mt-5.w-50 > form > div > div:nth-child(3) > input');
    fieldBirth = Selector('#root > div.container.mt-5.w-50 > form > div > div.w-50.m-auto.mb-5 > div > div > input');
    buttonCreate = Selector('#root > div.container.mt-5.w-50 > form > div > button');

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
            .wait(2000)
            .click(this.buttonCreate)
            .wait(5000)
    }
}