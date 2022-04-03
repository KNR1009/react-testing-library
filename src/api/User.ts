import axios from "axios";

// jsonPlaceHolderからuser情報を取得
export const getUser = async () => {
  const res = await axios.get("https://jsonplaceholder.typicode.com/users/1");
  return {
    id: res.data.id,
    name: res.data.name,
    email: res.data.email,
  };
};
