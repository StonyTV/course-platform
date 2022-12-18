const BACK_URL = "http://127.0.0.1:3000/"
export const apiFetch = (urlPath, options) =>
  fetch(BACK_URL + urlPath, options)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .catch(error => {
      console.error('There was an error:', error);
    });
