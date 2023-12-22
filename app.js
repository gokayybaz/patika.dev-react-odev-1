import getData from "./get-data.js";

console.log("patika.dev React Ödev - 1");

const getUserData = getData(3);

(async () => {
  const userInfo = (await getUserData).userInfo;
  const userPosts = (await getUserData).userPosts;
  console.log(userInfo);
  console.log(userPosts);
})();
