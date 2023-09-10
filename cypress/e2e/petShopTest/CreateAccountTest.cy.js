import moment from "moment/moment";
import Main from "../pageObjects/MainPage";


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
  
  
  })