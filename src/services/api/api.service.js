import axios  from "axios";

class ApiService {

  init() {
    axios.defaults.baseURL = `https://www.breakingbadapi.com/api/`;
    axios.defaults.headers = {
      "Content-type": "application/json",
    };
  }

  get(url) {
    console.log('test get', url)
    return new Promise((resolve,reject) => {
      axios
        .get(`${url}`)
        .then((response) => {
          resolve(response);
        })
        .catch(reject);
    });
  }
}

const apiService = new ApiService();

export default apiService;
