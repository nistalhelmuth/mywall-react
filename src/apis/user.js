import CURRENT_URL from './routes';

export const getProfileInfo = (
  profileId,
) => new Promise((resolve, reject) => {
  fetch(`${CURRENT_URL}/users/profile/${profileId}/`)
  .then((resultado) =>  {
    if (resultado.ok) {
      resultado.json().then((res) => resolve({
        response: res
      }));
    } else {
      resultado.json().then((res) => resolve({
        response: res,
        error: true,
        logout: resultado.status === 401,
      }));
    }
  }).catch((error) => reject(error));
});

export const registerUser = (
  email,
  name,
  city,
  gender,
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
      gender,
      password,
    })
  })
  .then((resultado) =>  {
    if (resultado.ok) {
      resultado.json().then((res) => resolve({
        response: res
      }));
    } else {
      resultado.json().then((res) => resolve({
        response: res,
        error: true,
        logout: resultado.status === 401,
      }));
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
      resultado.json().then((res) => resolve({
        response: res
      }));
    } else {
      resultado.json().then((res) => resolve({
        response: res,
        error: true,
        logout: resultado.status === 401,
      }));
    }
  }).catch((error) => reject(error));
});