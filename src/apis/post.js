import URL from './routes';

export const getAllPosts = () => new Promise((resolve, reject) => {
  fetch(`${URL}/posts/general/`).then((resultado) =>  {
    if (resultado.ok) {
      resultado.json().then((res) => resolve(res));
    } else {
      resultado.json().then((res) => reject(res));
    }
  }).catch((error) => reject(error));
});