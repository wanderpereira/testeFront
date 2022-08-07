import axios from "axios";

const api = axios.create({
  baseURL: "https://cors-everywhere.herokuapp.com/http://testingapi.eba-mmams2ep.us-east-1.elasticbeanstalk.com/",
});

export default api;
