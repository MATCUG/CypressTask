import Admin from "../pageObjects/adminDashboardPage"
import Admin2 from "../pageObjects/adminLoginPage"


describe('AdminLoginTest', () => {
    
    it('Checks admin login feature', () =>{
        
        cy.fixture("admLogin").then((data)=>{
            
            cy.visit('https://pet-shop.buckhill.com.hr/login');

            data.forEach((userdata)=> {
            const ad= new Admin();
            const ad2= new Admin2();
            ad2.getAdminLoginInput(userdata.login);
            ad2.getAdminPasswordInput(userdata.password);
            ad2.adminSubmintBtn();

            if(userdata.login=='admin@buckhill.co.uk' && userdata.password=='admin')
            {
                ad.getDashboardParagraph();
                cy.visit('https://pet-shop.buckhill.com.hr/login');
            }
            else{
                ad2.authenticationError();
                cy.visit('https://pet-shop.buckhill.com.hr/login');
            }


            })

        })


    })





})