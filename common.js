const $mail = document.getElementById("js-mail")
const $btn = document.getElementById("js-btn")

async function onClickMail(){
  console.log($mail.value)

  const data = {
    client_id: 'xsxd4pxyodsBqyY9GfTgGNRjGOzof9Lo',
    client_secret: 'nV7Syls7g2m8v_gxDVfdpu8cxBckbLdvB-uZTFxH8sEVgHlk5J0w8m0dQpG5tzdy',
    connection: 'email',
    email: $mail.value,
    send: 'link',
    authParams: { 
      "scope": "openid profile email",
      "state": "hKFo2SAzZlkxS0V0d25od25jUnRLUERRNG9hT1N2dU9pV0FYcqFupWxvZ2luo3RpZNkgTU5vNWVzem40Z1dESGM4a3JIU0hnX2lmR3dNanQ4anmjY2lk2SB4c3hkNHB4eW9kc0JxeVk5R2ZUZ0dOUmpHT3pvZjlMbw"
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
        // window.location.href='https://mamadodo.github.io/api-test/complete.html'
      } else {
        console.log('fetch NG');
      }

    }
      
  $btn.addEventListener('click', onClickMail)
