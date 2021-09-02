import React, { useCallback, useEffect, useState } from "react";
import {
  fetchUsersAPI,
  genUserName,
  getCurrentUser,
} from "../utils/fetchUsers";
import { UserType } from "./Landing";
import StoryIcon from "./StoryIcon";
import SuggestedUser from "./SuggestedUser";

const SuggestedUsers = () => {
  const [suggestedUsers, setSuggestedUsers] = useState<UserType[]>([]);
  const fetchUsers = useCallback(async () => {
    const userData = await fetchUsersAPI(1, 5);
    setSuggestedUsers(userData.data);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  let currentUser = getCurrentUser();
  return (
    <div className="bg-white w-full flex flex-col items-center">
      <div className="py-1 w-full flex flex-row items-center justify-between">
        <div className="flex flex-row items-center">
          {currentUser ? <StoryIcon user={currentUser} size={16} /> : ""}
          <div className="flex flex-col">
            <p className="text-sm">
              {genUserName(currentUser.firstName, currentUser.lastName)}
            </p>
            <p className="text-sm text-gray-400">{`${currentUser.firstName} ${currentUser.lastName}`}</p>
          </div>
        </div>
        <p className="px-4 cursor-pointer text-sm text-blue-500 font-semibold">
          Switch
        </p>
      </div>
      <div className="w-full flex flex-row items-center justify-between">
        <p className="px-2 py-1 text-sm font-semibold text-gray-400">
          Suggestions for you
        </p>
        <p className="px-2 py-1 cursor-pointer text-sm">See All</p>
      </div>
      <div className="px-2 py-4 w-full flex flex-col ">
        {suggestedUsers
          ? suggestedUsers.map((user) => (
              <SuggestedUser key={user.id} user={user} />
            ))
          : ""}
      </div>
    </div>
  );
};

export default SuggestedUsers;
