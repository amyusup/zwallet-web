import axios from "axios";

export default axios.create({
  baseURL: "http://54.82.50.0:4444/api/v1",
  // baseURL: "http://localhost:4444/api/v1",
  // baseURL: "https://zwallet-team.herokuapp.com/api/v1",
});
