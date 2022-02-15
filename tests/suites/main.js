import RegisterUser from "../page_model/registerUser";
import LoginUser from "../page_model/loginUser";
import LoginIncorrectUser from "../page_model/loginIncorrectUser";

import SearchPlace from "../page_model/searchPlace";
import InfoPlace from "../page_model/infoPlace";
require('dotenv').config();

const registerUser = new RegisterUser();
const loginUser = new LoginUser();
const searchPlace = new SearchPlace();
const infoPlace = new InfoPlace();
const loginIncorrectUser = new LoginIncorrectUser()

fixture`Ejemplo test Fixture`.page`http://localhost:3000`;

test('User register', async (t) => {
    await registerUser.actionRegisterUser(t, process.env.NAME_USER, process.env.EMAIL_USER_REG, process.env.PASSWORD_USER_REG, process.env.BIRTH_USER);
});

test('User login incorrect', async (t) => {
    await loginIncorrectUser.actionLoginIncorrect(t, 'correoincorrecto@gmail.com', '12345678');
});

test('User login', async (t) => {
    await loginUser.actionLogin(t, process.env.EMAIL_USER, process.env.PASSWORD_USER);
});


test('Search place by name', async (t) => {
    await searchPlace.actionSearchPlace(t, 'Cerro');
});

test('Navigate to carousel and close of modal', async (t) => {
    await infoPlace.actionInfoPlace(t);
});






