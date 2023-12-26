import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "cbb36d343ad04a938ca385f047cec7ed",
  },
});
