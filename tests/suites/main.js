import RegisterUser from "../page_model/registerUser";
import LoginUser from "../page_model/loginUser";
require('dotenv').config();

const registerUser = new RegisterUser();
const loginUser = new LoginUser();

fixture`Ejemplo test Fixture`.page`http://localhost:3000`;


test('User login', async (t) => {
    await loginUser.actionLogin(t, process.env.EMAIL_USER, process.env.PASSWORD_USER);
});

test('User register', async (t) => {
    await registerUser.actionRegisterUser(t, process.env.NAME_USER, process.env.EMAIL_USER_REG, process.env.PASSWORD_USER_REG, process.env.BIRTH_USER);
});

