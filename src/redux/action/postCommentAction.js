import axios from "axios";

export const asyncPost = () => {
  axios
    .post("https://simple-blog-api.crew.red/comments", {
      postId: 6,
      body: "Testing post",
      id: "444"
    })
    .then(res => {
      console.log(res.data);
    });
};
