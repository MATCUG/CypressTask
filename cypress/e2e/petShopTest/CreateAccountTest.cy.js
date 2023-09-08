import Main from "../pageObjects/MainPage";


describe('User Registration', () => {
    beforeEach(() => {
    
      cy.visit('https://pet-shop.buckhill.com.hr');
    });

    it('should register a new user', () => {
      const reg=new Main();
      reg.clickLoginBtn();
      reg.clickSignUpBtn();
      reg.firstNameInput("Bartek")
      reg.lastNameInput("Bartkowski")
      reg.emailAddressInputReg("Qwerty@gmail.com")
    })
  })
