import { Selector } from "testcafe";
require('dotenv').config();

export default class LoginUser {

    iconUser = Selector('#root > div > div.Navbar > nav > div.mx-3.my-1 > button > img'); 
    fieldEmail = Selector('#offcanvasWithBackdrop > div.offcanvas-body > div.d-grid.gap-2.col-6.mx-auto.my-5.w-75 > input:nth-child(1)');
    fieldPassword = Selector('#offcanvasWithBackdrop > div.offcanvas-body > div.d-grid.gap-2.col-6.mx-auto.my-5.w-75 > input:nth-child(2)');
    buttonLogin = Selector('#offcanvasWithBackdrop > div.offcanvas-body > div.d-grid.gap-2.col-6.mx-auto.my-5.w-75 > button');
    buttonLogout = Selector('#offcanvasWithBackdrop > div.offcanvas-body > div.d-grid.gap-2.col-6.mx-auto.w-75 > button:nth-child(3)');

    actionLogin = async(t, emailUser, passwordUser) => {
        await t
            .maximizeWindow()
            .click(this.iconUser)
            .wait(100)
            .typeText(this.fieldEmail, emailUser)
            .typeText(this.fieldPassword, passwordUser)
            .click(this.buttonLogin)
            .wait(2000)
            .click(this.iconUser)
            .wait(100)
            .expect(this.buttonLogout.innerText).eql('Cerrar sesión')
            .wait(1000)
            .click(this.buttonLogout)
            .wait(2000)
    }
}