import axios from "axios";

function getFetch(id) {
  return axios.get(
    `https://simple-blog-api.crew.red/posts/${id}?_embed=comments`
  );
}

const fetchFromApi = data => ({
  type: "SIMPLE",
  data
});

export const asyncSimple = id => dispatch => {
  getFetch(id).then(res => dispatch(fetchFromApi(res.data)));
};
