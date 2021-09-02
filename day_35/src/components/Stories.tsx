import React, { useCallback, useEffect, useState } from "react";
import { fetchUsersAPI } from "../utils/fetchUsers";
import { UserType } from "./Landing";
import StoryIcon from "./StoryIcon";

const Stories = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const fetchUsers = useCallback(async () => {
    const userData = await fetchUsersAPI();
    setUsers(userData.data);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return (
    <div className="w-full h-28 bg-white whitespace-nowrap pt-2">
      <div className="overflow-x-scroll no-scrollbar">
        {users &&
          users.map((user, inx) => (
            <StoryIcon
              key={inx}
              small={14}
              size={16}
              user={user}
              showText
              showBorder
            />
          ))}
      </div>
    </div>
  );
};

export default Stories;
