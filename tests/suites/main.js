import login from "../page_model/loginGoogle";
import refillForm from "../page_model/refillForm";
require('dotenv').config();

const pageLogin = new login();
const pageForm = new refillForm();

fixture`Ejemplo test Fixture`.page`https://docs.google.com/forms/d/e/1FAIpQLSe7SJKEb3i6S1V7BGwXYh16WwQbjJRkMivOfHFUkw6-Cg1sdA/viewform`;

test('Ejemplo search', async (t) => {
    await pageLogin.formLogin(t, process.env.Email_USER, process.env.PASSWORD_USER);
    await pageForm.refillFormPoli(t, process.env.NAME_USER, process.env.CITY_USER, process.env.PROFESSION_USER, process.env.STUDY_USER);
});

