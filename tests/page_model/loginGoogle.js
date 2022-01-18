import { Selector } from "testcafe";
require('dotenv').config();

export default class login {

    fieldEmail = Selector('#identifierId');
    fieldPassword = Selector('#password > div.aCsJod.oJeWuf > div > div.Xb9hP > input');
    buttonNext = Selector('#identifierNext > div > button');
    myEmailUser = Selector('#wSDd7b > div > span');

    formLogin = async(t, emailUser, passwordUser) => {
        await t
            .maximizeWindow()
            .typeText(this.fieldEmail, emailUser)
            .wait(10)
            .click(this.buttonNext)
            .wait(2000)
            .typeText(this.fieldPassword, passwordUser)
            .wait(1000)
            .pressKey('enter')
            .wait(2000)
            .expect(this.myEmailUser.innerText).eql(process.env.EMAIL_USER)
            .wait(2000);
    }

}