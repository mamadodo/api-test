const $mail = document.getElementById("js-mail")
const $btn = document.getElementById("js-btn")
const $btn2 = document.getElementById("btn2")

async function onClickMail(){
  console.log($mail.value)

  const data = {
    client_id: 'xsxd4pxyodsBqyY9GfTgGNRjGOzof9Lo',
    client_secret: 'nV7Syls7g2m8v_gxDVfdpu8cxBckbLdvB-uZTFxH8sEVgHlk5J0w8m0dQpG5tzdy',
    connection: 'email',
    email: $mail.value,
    send: 'link',
    authParams: { 
      "scope": "openid profile email"
    }
  }
  
    console.log(data)
    
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
      console.log(result);
      console.log(response);
      if(response.ok) {
        console.log('fetch OK');
      } else {
        console.log('fetch NG');
      }

    }
      
  $btn.addEventListener('click', onClickMail)
