import CURRENT_URL from './routes';

export const getProfileInfo = (
  profileId,
) => new Promise((resolve, reject) => {
  fetch(`${CURRENT_URL}/users/profile/${profileId}/`)
  .then((resultado) =>  {
    if (resultado.ok) {
      resultado.json().then((res) => resolve(res));
    } else {
      resultado.json().then((res) => reject(res));
    }
  }).catch((error) => reject(error));
});

export const registerUser = (
  email,
  name,
  city,
  genre,
  password,
) => new Promise((resolve, reject) => {
  fetch(`${CURRENT_URL}/users/register/`, {
    headers: {
      "Content-type": "application/json"
    },
    method: 'POST',
    body: JSON.stringify({
      email,
      name,
      city,
      genre,
      password,
    })
  })
  .then((resultado) =>  {
    if (resultado.ok) {
      resultado.json().then((res) => resolve(res));
    } else {
      resultado.json().then((res) => reject(res));
    }
  }).catch((error) => reject(error));
});

export const doLogin = (
  email,
  password,
) => new Promise((resolve, reject) => {
  fetch(`${CURRENT_URL}/users/login/`, {
    headers: {
      "Content-type": "application/json"
    },
    method: 'POST',
    body: JSON.stringify({
      email,
      password,
    })
  })
  .then((resultado) =>  {
    if (resultado.ok) {
      resultado.json().then((res) => resolve(res));
    } else {
      resultado.json().then((res) => reject(res));
    }
  }).catch((error) => reject(error));
});