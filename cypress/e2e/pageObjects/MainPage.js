class Main
{

    clickLoginBtn()
    {
        cy.get("button[class='v-btn v-theme--PetGreen text-white v-btn--density-default v-btn--size-default v-btn--variant-outlined ml-6']").click();
    }
    clickSignUpBtn()
    {
        cy.get("body > div:nth-child(6) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(6) > span:nth-child(2)").click();
    }
    firstNameInput(firstName)
    {
        cy.get("#input-33").should("exist").type(firstName);
    }
    lastNameInput(lastName)
    {
        cy.get("#input-35").should("exist").type(lastName);
    }
    emailAddressInputReg(emailAddress)
    {
        cy.get("#input-37").should("exist").type(emailAddress);
    }
    phoneNumberInput(phoneNumber)
    {
        cy.get("#input-39").should("exist").type(phoneNumber);
    }
    homeAddressInput(homeAddress)
    {
        cy.get("#input-41").should("exist").type(homeAddress);
    }
    passwordInputReg(password)
    {
        cy.get("#input-43").should("exist").type(password);
    }
    passwordConfirmInput(passwordConfirm)
    {
        cy.get("#input-45").should("exist").type(passwordConfirm);
    }
    marketingAgreementCheck()
    {
        cy.get("#checkbox-47").should("exist").should("exist").click;
    }
    SignUpSubmitBtn()
    {
        cy.get("button[class='v-btn v-btn--elevated v-theme--PetGreen bg-primary v-btn--density-default v-btn--size-default v-btn--variant-elevated text-white'] span[class='v-btn__content']").should("exist").click;
    }

}

    export default Main;
