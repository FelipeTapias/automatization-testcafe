import { Selector } from "testcafe";
require('dotenv').config();

export default class LoginIncorrectUser {

    iconUser = Selector('#root > div > div.Navbar > nav > div.mx-3.my-1 > button > img'); 
    fieldEmail = Selector('#offcanvasWithBackdrop > div.offcanvas-body > div.d-grid.gap-2.col-6.mx-auto.my-5.w-75 > input:nth-child(1)');
    fieldPassword = Selector('#offcanvasWithBackdrop > div.offcanvas-body > div.d-grid.gap-2.col-6.mx-auto.my-5.w-75 > input:nth-child(2)');
    buttonLogin = Selector('#offcanvasWithBackdrop > div.offcanvas-body > div.d-grid.gap-2.col-6.mx-auto.my-5.w-75 > button');
    closeNavbar = Selector('#offcanvasWithBackdrop > div.offcanvas-header > button')

    actionLoginIncorrect = async(t, emailUser, passwordUser) => {
        await t
            .maximizeWindow()
            .click(this.iconUser)
            .typeText(this.fieldEmail, emailUser)
            .typeText(this.fieldPassword, passwordUser)
            .click(this.buttonLogin)
            .wait(1000)
            .click(this.closeNavbar)
            .click(this.iconUser)
            .wait(1000)
            .expect(this.buttonLogin.innerText).eql("Iniciar sesión")
    }
}