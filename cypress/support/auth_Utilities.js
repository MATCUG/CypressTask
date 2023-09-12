let authToken = null;
let id = null;
  
    const getAdminToken = () => {
      cy.get({
        method: 'POST',
        url: 'https://pet-shop.buckhill.com.hr/api/v1/admin/login',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: true, 
        body: {
          email: 'admin@buckhill.co.uk',
          password: 'admin'
        }
      }).then((response) => {
        authToken = response.body.token;
      });
    };
    const findUser = (mail) => {
      cy.get({
        method: 'GET',
        url: 'https://pet-shop.buckhill.com.hr/api/v1/admin/user-listing?email='+mail,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': 'Bearer '+authToken
        },
        form: true, // Set this to send the request as form data
        body: {
          email: mail
        }
      }).then((response) => {
        id = response.body.uuid;
      });
    };
    const deleteUser = () => {
      cy.get({
        method: 'POST',
        url: 'https://pet-shop.buckhill.com.hr/api/v1/admin/user-delete/:uuid',
        headers: {
          'Authorization': 'Bearer '+authToken
        },
        form: true, // Set this to send the request as form data
        body: {
          uuid: id
        }
      }).then((response) => {
        id = response.body.uuid;
      });
    };
    const userDeleteFlow = async() => {
      await getAdminToken();
      await findUser("2@2.com");
      await deleteUser();
    };



    export {userDeleteFlow}
   
    