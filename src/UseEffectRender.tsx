import React, { useEffect, useState } from "react";
import { getUser } from "./api/User";
import { User } from "./types/user";

export const UseEffectRender = () => {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    const date = async () => {
      const res = await getUser();
      setUser(res);
    };
    date();
  }, []);

  return user ? <p>{user.name}</p> : <p>データがないです</p>;
};
