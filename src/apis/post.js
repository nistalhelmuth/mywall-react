import CURRENT_URL from './routes';

export const getAllPosts = (
  profileId,
  limit,
  offset,
) => new Promise((resolve, reject) => {
  const url = new URL(`${CURRENT_URL}/posts/`);
  const params = {
    created_by: profileId,
    limit,
    offset,
  }
  Object.keys(params).forEach(key => params[key] && url.searchParams.append(key, params[key]))
  fetch(url).then((resultado) =>  {
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
  fetch(`${CURRENT_URL}/posts/${postId}/`)
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
  fetch(`${CURRENT_URL}/posts/`, {
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
  fetch(`${CURRENT_URL}/posts/${postId}/`, {
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