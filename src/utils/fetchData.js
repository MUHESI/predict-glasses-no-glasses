import axios from "axios";
export const URL_PREDICTION = "http://localhost:5000/";

export const postAPI = async (url, post) => {
  const res = await axios({
    method: "post",
    url: `${URL_PREDICTION}api/${url}`,
    data: post
  });
  return res;
};
