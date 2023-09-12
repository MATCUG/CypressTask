import moment from "moment/moment";
import Main from "../pageObjects/mainPage";
import { findUser, getAdminToken } from "../../support/auth_Utilities";


describe('User Registration', () => {
    beforeEach(() => {
    
      cy.visit(Cypress.env('url'));
    });

    it('User perform valid registration', () => {
      const reg=new Main();
      
      reg.clickLoginBtn();
      reg.clickSignUpBtn();
      reg.firstNameInput("Bartek");
      reg.lastNameInput("Bartkowski");
      reg.emailAddressInputReg("Qwerty" + moment().format("hmmss") + "@gmail.com");
      reg.phoneNumberInput("222111333");
      reg.homeAddressInput("Brzozowa 22 61-460 Warszawa");
      reg.passwordInputReg("QWERTY12345");
      reg.passwordConfirmInput("QWERTY12345");
      reg.marketingAgreementCheck();
      reg.signUpSubmitBtn();
    })
    it('User leaves empty fields', () => {
      const reg=new Main();
      reg.clickLoginBtn();
      reg.clickSignUpBtn();
      reg.signUpSubmitBtn();
      reg.firstNameError();
      reg.lastNameError();
      reg.emailError();
      reg.phoneNumberError();
      reg.AddressError();
      reg.passwordError();
    })
    it('User leaves first name field empty', () => {
      const reg=new Main();
      reg.clickLoginBtn();
      reg.clickSignUpBtn();
      reg.lastNameInput("Bartkowski");
      reg.emailAddressInputReg("Qwerty" + moment().format("hmmss") + "@gmail.com");
      reg.phoneNumberInput("222111333");
      reg.homeAddressInput("Brzozowa 22 61-460 Warszawa");
      reg.passwordInputReg("QWERTY12345");
      reg.passwordConfirmInput("QWERTY12345");
      reg.marketingAgreementCheck();
      reg.signUpSubmitBtn();
      reg.firstNameError();
    })
    it('User leaves last name field empty', () => {
      const reg=new Main();
      reg.clickLoginBtn();
      reg.clickSignUpBtn();
      reg.firstNameInput("Bartek");
      reg.emailAddressInputReg("Qwerty" + moment().format("hmmss") + "@gmail.com");
      reg.phoneNumberInput("222111333");
      reg.homeAddressInput("Brzozowa 22 61-460 Warszawa");
      reg.passwordInputReg("QWERTY12345");
      reg.passwordConfirmInput("QWERTY12345");
      reg.marketingAgreementCheck();
      reg.signUpSubmitBtn();
      reg.lastNameError();
    })
    it('User leaves email field empty', () => {
      const reg=new Main();
      reg.clickLoginBtn();
      reg.clickSignUpBtn();
      reg.firstNameInput("Bartek");
      reg.lastNameInput("Bartkowski");
      reg.phoneNumberInput("222111333");
      reg.homeAddressInput("Brzozowa 22 61-460 Warszawa");
      reg.passwordInputReg("QWERTY12345");
      reg.passwordConfirmInput("QWERTY12345");
      reg.marketingAgreementCheck();
      reg.signUpSubmitBtn();
      reg.emailError();
    })
    it('User provides invalid email address.', () => {
      const reg=new Main();
      reg.clickLoginBtn();
      reg.clickSignUpBtn();
      reg.firstNameInput("Bartek");
      reg.lastNameInput("Bartkowski");
      reg.emailAddressInputReg("Qwerty" + moment().format("hmmss") + "gmail.com");
      reg.phoneNumberInput("222111333");
      reg.homeAddressInput("Brzozowa 22 61-460 Warszawa");
      reg.passwordInputReg("QWERTY12345");
      reg.passwordConfirmInput("QWERTY12345");
      reg.marketingAgreementCheck();
      reg.signUpSubmitBtn();
      reg.invalidEmailError();
    })
    it('User leaves phone number field empty.', () => {
      const reg=new Main();
      reg.clickLoginBtn();
      reg.clickSignUpBtn();
      reg.firstNameInput("Bartek");
      reg.lastNameInput("Bartkowski");
      reg.emailAddressInputReg("Qwerty" + moment().format("hmmss") + "@gmail.com");
      reg.homeAddressInput("Brzozowa 22 61-460 Warszawa");
      reg.passwordInputReg("QWERTY12345");
      reg.passwordConfirmInput("QWERTY12345");
      reg.marketingAgreementCheck();
      reg.signUpSubmitBtn();
      reg.phoneNumberError();
    })
    it('User leaves password field empty.', () => {
      const reg=new Main();
      reg.clickLoginBtn();
      reg.clickSignUpBtn();
      reg.firstNameInput("Bartek");
      reg.lastNameInput("Bartkowski");
      reg.emailAddressInputReg("Qwerty" + moment().format("hmmss") + "@gmail.com");
      reg.phoneNumberInput("222111333");
      reg.homeAddressInput("Brzozowa 22 61-460 Warszawa");
      reg.passwordConfirmInput("QWERTY12345");
      reg.marketingAgreementCheck();
      reg.signUpSubmitBtn();
      reg.passwordError();
    })
    it('User leaves address field empty.', () => {
      const reg=new Main();
      reg.clickLoginBtn();
      reg.clickSignUpBtn();
      reg.firstNameInput("Bartek");
      reg.lastNameInput("Bartkowski");
      reg.emailAddressInputReg("Qwerty" + moment().format("hmmss") + "@gmail.com");
      reg.phoneNumberInput("222111333");
      reg.passwordInputReg("QWERTY12345");
      reg.passwordConfirmInput("QWERTY12345");
      reg.marketingAgreementCheck();
      reg.signUpSubmitBtn();
      reg.AddressError();
    })
    it('User leave confirm password field empty.', () => {
      const reg=new Main();
      reg.clickLoginBtn();
      reg.clickSignUpBtn();
      reg.firstNameInput("Bartek");
      reg.lastNameInput("Bartkowski");
      reg.emailAddressInputReg("Qwerty" + moment().format("hmmss") + "@gmail.com");
      reg.phoneNumberInput("222111333");
      reg.homeAddressInput("Brzozowa 22 61-460 Warszawa");
      reg.passwordInputReg("QWERTY12345");
      reg.marketingAgreementCheck();
      reg.signUpSubmitBtn();
      reg.confirmPasswordError();
    })
    it('User provides password with less than 8 characters.', () => {
      const reg=new Main();
      reg.clickLoginBtn();
      reg.clickSignUpBtn();
      reg.firstNameInput("Bartek");
      reg.lastNameInput("Bartkowski");
      reg.emailAddressInputReg("Qwerty" + moment().format("hmmss") + "@gmail.com");
      reg.phoneNumberInput("222111333");
      reg.homeAddressInput("Brzozowa 22 61-460 Warszawa");
      reg.passwordInputReg("QWERTY1");
      reg.passwordConfirmInput("QWERTY1");
      reg.marketingAgreementCheck();
      reg.signUpSubmitBtn();
      reg.weakPasswordError();
    })
    it('User enters a password and a confirmation password that does not match.', () => {
      const reg=new Main();
      reg.clickLoginBtn();
      reg.clickSignUpBtn();
      reg.firstNameInput("Bartek");
      reg.lastNameInput("Bartkowski");
      reg.emailAddressInputReg("Qwerty" + moment().format("hmmss") + "@gmail.com");
      reg.phoneNumberInput("222111333");
      reg.homeAddressInput("Brzozowa 22 61-460 Warszawa");
      reg.passwordInputReg("QWERTY1234");
      reg.passwordConfirmInput("QWERTY12");
      reg.marketingAgreementCheck();
      reg.signUpSubmitBtn();
      reg.noPasswordMatchError();
    })
    it('User enters valid data for all fields except the optional marketing agreement check.', () => {
      const reg=new Main();
      reg.clickLoginBtn();
      reg.clickSignUpBtn();
      reg.firstNameInput("Bartek");
      reg.lastNameInput("Bartkowski");
      reg.emailAddressInputReg(Math.random().toString(5).substring(2)+ "@gmail.com");
      reg.phoneNumberInput("222111333");
      reg.homeAddressInput("Brzozowa 22 61-460 Warszawa");
      reg.passwordInputReg("QWERTY1234");
      reg.passwordConfirmInput("QWERTY1234");
      reg.signUpSubmitBtn();
    })
    it('User enters an email address that already exists in the system.', () => {
      const reg=new Main();
      const usermail = `${Math.random().toString(5).substring(2)}@gmail.com`;
      reg.clickLoginBtn();
      reg.clickSignUpBtn();
      reg.firstNameInput("Bartek");
      reg.lastNameInput("Bartkowski");
      reg.emailAddressInputReg(usermail);
      reg.phoneNumberInput("222111333");
      reg.homeAddressInput("Brzozowa 22 61-460 Warszawa");
      reg.passwordInputReg("QWERTY1234");
      reg.passwordConfirmInput("QWERTY1234");
      reg.signUpSubmitBtn();  
      reg.clickLoginBtn();
      reg.clickSignUpBtn();
      reg.firstNameInput("Bartek");
      reg.lastNameInput("Bartkowski");
      reg.emailAddressInputReg(usermail);
      reg.phoneNumberInput("222111333");
      reg.homeAddressInput("Brzozowa 22 61-460 Warszawa");
      reg.passwordInputReg("QWERTY1234");
      reg.passwordConfirmInput("QWERTY1234");
      reg.signUpSubmitBtn();
      cy.then(async () => {
      // userDeleteFlow();
      const token = await getAdminToken();
      const uuid = await findUser(usermail)
        cy.request({
          method: 'DELETE',
          url: `https://pet-shop.buckhill.com.hr/api/v1/admin/user-delete/${uuid}`,
          headers: {
            'Authorization': `Bearer ${token}`
          },
          form: true, // Set this to send the request as form data
    
        }).then((response) => {
          expect(response.status).to.eq(200)
        })
      })
     
    })
  })

  

  
  