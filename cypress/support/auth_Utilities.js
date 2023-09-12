
  
    const getAdminToken = async() => {
      const adminData = {
        email: 'admin@buckhill.co.uk',
        password: 'admin'
      }
      const reqBody = Object.keys(adminData).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(adminData[key])).join('&');

      const res = await fetch("https://pet-shop.buckhill.com.hr/api/v1/admin/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: reqBody
      }).then (res => res.json())
      console.log('GETADMIN TOKEN',res)
      return await res.data.token
    };
    const findUser = async (mail) => {
      const token = await getAdminToken();
      const res = await fetch(`https://pet-shop.buckhill.com.hr/api/v1/admin/user-listing?email=${mail}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Bearer ${token}`
        },
      }).then (res => res.json())
      console.log('FIND USER',res)
      return await res.data[0].uuid;
    };
  
    export {getAdminToken, findUser}
   
    