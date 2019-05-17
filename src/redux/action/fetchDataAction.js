import axios from "axios";

function getFetch() {
  return axios.get("https://simple-blog-api.crew.red/posts");
}

const fetchFromApi = data => ({
  type: "DOWNLOADED",
  data
});

export const asyncData = () => dispatch => {
  getFetch().then(res => dispatch(fetchFromApi(res.data)));
};
