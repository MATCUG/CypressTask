class Admin{
    getDashboardParagraph(){
        cy.get("p").contains("Dashboard").should('exist');

    }
    




}
export default Admin;