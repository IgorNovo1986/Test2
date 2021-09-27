import axios  from "axios";

class ApiService {

  init() {
    axios.defaults.baseURL = `https://world.openfoodfacts.org/api/v0`;
    axios.defaults.headers = {
      "Content-type": "application/json",
    };
  }

  get(url) {
    console.log('test get', url)
    return new Promise((resolve) => {
      axios
        .get(`${url}`)
        .then((response) => {
          resolve(response);
        })
        .catch();
    });
  }
}

const apiService = new ApiService();

export default apiService;
