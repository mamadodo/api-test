  (async () => {
    const data = {
          client_id: 'xsxd4pxyodsBqyY9GfTgGNRjGOzof9Lo',
          client_secret: 'nV7Syls7g2m8v_gxDVfdpu8cxBckbLdvB-uZTFxH8sEVgHlk5J0w8m0dQpG5tzdy',
          connection: 'email',
          email: 'm.nagaii15+test1@gmail.com',
          send: 'link',
          authParams: { 
            "scope": "openid profile email"
          }
        }
    
        const JSONdata = JSON.stringify(data)
        const endpoint = 'https://dev-h5zvf-6s.us.auth0.com/passwordless/start'
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSONdata,
        }
    
        const response = await fetch(endpoint, options)
        const result = await response.json()
      })()
