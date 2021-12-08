const API_KEY = "563492ad6f9170000100000102ea52819b4a4035b93d78253511494d";
const API_URL = "https://api.pexels.com/v1/";

const Api = {
  fetchGetAll: async () => {
    const data = await fetch(`${API_URL}curated?page=1&per_page=80`, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const { photos } = await data.json();
    return photos;
  },

  fetchGetById: (id) =>
    fetch(`${API_URL}photos/${id}`, {
      headers: {
        Authorization: API_KEY,
      },
    }),
};

export default Api;
