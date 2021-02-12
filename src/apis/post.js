import URL from './routes';

export const getAllPosts = (
  profileId,
) => new Promise((resolve, reject) => {
  fetch(`${URL}/posts/${profileId ? `?created_by=${profileId}` : ''}`)
  .then((resultado) =>  {
    if (resultado.ok) {
      resultado.json().then((res) => resolve(res));
    } else {
      resultado.json().then((res) => reject(res));
    }
  }).catch((error) => reject(error));
});

export const getAllComments = (
  postId,
) => new Promise((resolve, reject) => {
  fetch(`${URL}/posts/${postId}/`)
  .then((resultado) =>  {
    if (resultado.ok) {
      resultado.json().then((res) => resolve(res));
    } else {
      resultado.json().then((res) => reject(res));
    }
  }).catch((error) => reject(error));
});


export const createPost = (
  token,
  content,
) => new Promise((resolve, reject) => {
  fetch(`${URL}/posts/`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json"
    },
    method: 'POST',
    body: JSON.stringify({
      content
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

export const createComment = (
  token,
  postId,
  content,
) => new Promise((resolve, reject) => {
  fetch(`${URL}/posts/${postId}/`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json"
    },
    method: 'POST',
    body: JSON.stringify({
      content
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