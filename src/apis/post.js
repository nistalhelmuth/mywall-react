import URL from './routes';

export const getAllPosts = (
  profileId,
) => new Promise((resolve, reject) => {
  fetch(`${URL}/posts/general/${profileId ? `?created_by=${profileId}` : ''}`)
  .then((resultado) =>  {
    if (resultado.ok) {
      resultado.json().then((res) => resolve(res));
    } else {
      resultado.json().then((res) => reject(res));
    }
  }).catch((error) => reject(error));
});