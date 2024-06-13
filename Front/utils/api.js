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

export const addQrToFavorite = async (identifier,userName)=>{
  return fetch(`${BASE_URL}/qrs/favorite`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ qrIdentifier: identifier, userName: userName })
    }).then(response => {
      if (!response.ok) {
        throw new Error('Error adding single QR to favorites');
      }
      return response.json();
    })
    .then(data => data)
    .catch(error => {
      return {message:"este Qr no exite en nuestra base de datos :("}
    });
}

export const getAllUserQrs = async (userName) => {
  try {
    const response = await fetch(`${BASE_URL}/users/all/${userName}`);

    if (!response.ok) {
      throw new Error('Error fetching QRs');
    }

    const data = await response.json();

    if (!data.qrs || !Array.isArray(data.qrs)) {
      throw new Error('QRs data not found or invalid format');
    }

    // Mapear los recursos de cada QR
    const qrsWithResources = data.qrs.map(qr => {
      // Obtener solo los contenidos de los recursos
      const resources = qr.resources.map(resource => resource.content);
      const tags = qr.tags.map(tag => tag.name);
      return {
        ...qr,
        resources: resources,
        tags
      };
    });
    return qrsWithResources;

  } catch (error) {
    console.error('Error fetching QRs:', error);
    return { message: "Nombre de usuario inválido" }; // Manejo de errores
  }
};

export const getFavoriteUserQrs = async (userName) => {
  try {
    const response = await fetch(`${BASE_URL}/users/favorites/${userName}`);

    if (!response.ok) {
      throw new Error('Error fetching QRs');
    }

    const data = await response.json();
    console.log(data)

    if (!data.favoriteQrs || !Array.isArray(data.favoriteQrs)) {
      throw new Error('QRs data not found or invalid format');
    }

    // Mapear los recursos de cada QR
    const qrsWithResources = data.favoriteQrs.map(favoriteQrs => {
      // Obtener solo los contenidos de los recursos
      const resources = favoriteQrs.resources.map(resource => resource.content);
      const tags = favoriteQrs.tags.map(tag => tag.name);
      return {
        ...favoriteQrs,
        resources: resources,
        tags
      };
    });
    return qrsWithResources;

  } catch (error) {
    console.error('Error fetching QRs:', error);
    return { message: "Nombre de usuario inválido" }; // Manejo de errores
  }
};

