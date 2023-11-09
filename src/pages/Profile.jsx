import React, { useContext } from "react";
import ChangeProfile from "../components/ChangeProfile";
import { AppContext } from "../App";

export default function Profile() {
  const { username, setUsername } = useContext(AppContext);
  return (
    <div>
      Profile, user is: {username}
      <ChangeProfile />
    </div>
  );
}
