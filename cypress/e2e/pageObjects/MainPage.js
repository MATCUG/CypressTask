class Main
{
    clickLoginBtn()
    {
        cy.get("button").contains('LOGIN').click();
    }
    clickSignUpBtn()
    {
        cy.get("span").contains("Don't have an account? Sign up").click();
    }
    firstNameInput(firstName)
    {
        cy.get('div').contains('label', 'First Name').parent().find('input').type(firstName);
    }
    lastNameInput(lastName)
    {
        cy.get('div').contains('label', 'Last Name').parent().find('input').type(lastName);
    }
    emailAddressInputReg(emailAddress)
    {
        cy.get('div').contains('label', 'Email Address').parent().find('input').type(emailAddress);
    }
    phoneNumberInput(phoneNumber)
    {
        cy.get('div').contains('label', 'Phone Number').parent().find('input').type(phoneNumber);
    }
    homeAddressInput(homeAddress)
    {
        cy.get('label').contains(/^Address\*$/).parent().find('input').type(homeAddress);
    }
    passwordInputReg(password)
    {
        cy.get('div').contains('label', 'Password').parent().find('input').type(password);
    }
    passwordConfirmInput(passwordConfirm)
    {
        cy.get('div').contains('label', 'Confirm Password').parent().find('input').type(passwordConfirm);
    }
    marketingAgreementCheck()
    {
        cy.get('label').contains('I want to receive inspiration, marketing promotions and updates via email.').click();
    }
    signUpSubmitBtn()
    {
        cy.get("span").contains("SIGN UP").click();
    }
    firstNameError()
    {
        cy.get('div').contains('The first name field is required.').should("exist");
    }
    lastNameError()
    {
        cy.get('div').contains('The last name field is required.').should("exist");
    }
    emailError()
    {
        cy.get('div').contains('The email field is required.').should("exist");
    }
    phoneNumberError()
    {
        cy.get('div').contains('Phone number is required').should("exist");    
    }
    AddressError()
    {
        cy.get('div').contains('Address is required').should("exist");
    }
    passwordError()
    {
        cy.get('div').contains('The password field is required.').should("exist");
    }
    invalidEmailError()
    {
        cy.get('div').contains('The email must be a valid email address.').should("exist");
    }

}

    export default Main;
