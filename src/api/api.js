// import { createClient } from "pexels";
const API_KEY = "563492ad6f9170000100000102ea52819b4a4035b93d78253511494d";
const API_URL = "https://api.pexels.com/v1/search?query=natureza/";

// const client = createClient(
//   "563492ad6f9170000100000102ea52819b4a4035b93d78253511494d"
// );
// const query = "Nature";

const Api = {
  fetchGetAll: async () => {
    const data = await fetch(API_URL, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const { photos } = await data.json();
    return photos;
  },
  // fetchGetAll: () =>
  //   fetch(API_URL, {
  //     headers: {
  //       Authorization: API_KEY,
  //     },
  //   }),
  fetchGetById: (id) =>
    fetch(`${API_URL}${id}`, {
      headers: {
        Authorization: API_KEY,
      },
    }),
  fetchPost: (vaga) => {
    return fetch(`${Api.apiUrl}/add`, {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(vaga),
    });
  },
  fetchPut: (vaga, id) => {
    return fetch(`${Api.apiUrl}/update/${id}`, {
      method: "PUT",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(vaga),
    });
  },
  fetchDelete: (id) => {
    return fetch(`${Api.apiUrl}/delete/${id}`, {
      method: "DELETE",
    });
  },
};

export default Api;
