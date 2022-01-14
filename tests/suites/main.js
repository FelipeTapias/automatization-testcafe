import login from "../page_model/loginGoogle";
import refillForm from "../page_model/refillForm"

const pageLogin = new login();
const pageForm = new refillForm();

fixture`Ejemplo test Fixture`.page`https://docs.google.com/forms/d/e/1FAIpQLSe7SJKEb3i6S1V7BGwXYh16WwQbjJRkMivOfHFUkw6-Cg1sdA/viewform`;

// test('Ejemplo search', async (t) => {
//     await t.maximizeWindow()
//         .typeText(pageLogin.fieldSearch, 'Automatización')
//         .wait(100)
//         .pressKey('enter')
//         .wait(5000)
// });


test('Ejemplo search', async (t) => {
    await pageLogin.formLogin(t, 'xxxx', 'xxxx');
    await pageForm.refillFormPoli(t, 'xxx', 'xxx', 'xxx', 'xxx');
});

