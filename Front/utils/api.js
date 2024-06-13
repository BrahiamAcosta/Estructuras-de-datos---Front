import { BASE_URL } from "../config.env";

export const fetchSingleQr = async (identifier,userName)=>{
    return fetch(`${BASE_URL}/qrs/find`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ qrIdentifier: identifier, userName: userName })
      }).then(response => {
        if (!response.ok) {
          throw new Error('Error fetching single QR');
        }
        return response.json();
      })
      .then(data => data)
      .catch(error => {
        return {message:"este Qr no exite en nuestra base de datos :("}
      });
}

export const reportQrError = async (identifier,userName,description)=>{
  return fetch(`${BASE_URL}/errorReport`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ qrIdentifier: identifier, userName: userName, description: description })
    }).then(response => {
      if (!response.ok) {
        throw new Error('Error reporting QR');
      }
      return response.json();
    })
    .then(data => data)
    .catch(error => {
      console.log(error)
      return {message:"Ocurrió un error al reportar el Qr :("}
    });
}