import URL from './routes';

export const getProfileInfo = (
  profileId,
) => new Promise((resolve, reject) => {
  fetch(`${URL}/users/profile/${profileId}/`)
  .then((resultado) =>  {
    if (resultado.ok) {
      resultado.json().then((res) => resolve(res));
    } else {
      resultado.json().then((res) => reject(res));
    }
  }).catch((error) => reject(error));
});