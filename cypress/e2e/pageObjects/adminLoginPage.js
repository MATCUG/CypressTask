class Admin2 {
    getAdminLoginInput(login){
        cy.get('div').contains('label', 'Email').parent().find('input').type(login);
    }
    getAdminPasswordInput(password){
        cy.get('div').contains('label', 'Password').parent().find('input').type(password);
    }
    adminSubmintBtn(){
        cy.get("button[type='button']").click();
    }
    authenticationError(){
        cy.get(".text-red.text-center.login__error-message").should('exist');
    }
    




}
export default Admin2;