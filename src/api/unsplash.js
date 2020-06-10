import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID I6ct3AUkvWCcDbIeK2_ghskb0zWSxocGiN9Bykd_n-w",
  },
});
