import React from "react";
import { genUserName } from "../utils/fetchUsers";
import { UserType } from "./Landing";
import StoryIcon from "./StoryIcon";

const SuggestedUser = ({ user }: { user: UserType }) => {
  return (
    <div className="py-1 w-full flex flex-row items-center justify-between">
      <div className="flex flex-row items-center">
        {user ? <StoryIcon user={user} small={10} size={12} /> : ""}
        <div className="flex flex-col">
          <p className="text-sm">
            {genUserName(user.firstName, user.lastName)}
          </p>
          <p className="py-1 text-xs font-semibold text-gray-400">
            New to Instagram
          </p>
        </div>
      </div>
      <p className="px-2 cursor-pointer text-sm text-blue-500 font-semibold">
        Follow
      </p>
    </div>
  );
};

export default SuggestedUser;
