import { userDeleteFlow } from "../../support/auth_Utilities";


describe('User Registration', () => {
    beforeEach(() => {
    
      cy.visit(Cypress.env('url'));
    });

    it('User perform valid registration', () => {
      userDeleteFlow();
    })
})