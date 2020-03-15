import axios from "axios";

const YouTube = axios.create({
  baseURL: `https://www.googleapis.com/youtube/v3`
});

export default YouTube;
