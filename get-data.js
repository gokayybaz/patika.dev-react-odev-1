import axios from "axios";

const USERS_URL = "https://jsonplaceholder.typicode.com/users/";
const POSTS_URL = "https://jsonplaceholder.typicode.com/posts?userId=";

async function getData(user_id) {
  const { data: user } = await axios.get(USERS_URL + user_id);
  const { data: userPosts } = await axios.get(POSTS_URL + user_id);
  const data = {
    userInfo: user,
    userPosts: userPosts,
  };
  return data;
}

export default getData;
