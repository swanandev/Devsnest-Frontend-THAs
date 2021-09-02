import React, { useCallback, useEffect, useState } from "react";
import { fetchPostsAPI, fetchUsersAPI } from "../utils/fetchUsers";
import PostComponent from "./PostComponent";
import Posts from "./Posts";
import Stories from "./Stories";
import StoryIcon from "./StoryIcon";
import SuggestedUsers from "./SuggestedUsers";

export interface UserType {
  firstName: string;
  id: string;
  lastName: string;
  picture: string;
  title: string;
}

const Landing = () => {
  return (
    <div className="w-full lg:w-7/12 my-10 h-screen flex flex-row overflow-y-auto no-scrollbar">
      <div className="w-full md:px-2 md:w-2/3 h-full flex flex-col justify-start overflow-y-auto no-scrollbar">
        <Stories />
        <Posts />
      </div>
      <div className="hidden  md:px-2 md:block  md:w-1/3">
        <SuggestedUsers />
      </div>
    </div>
  );
};

export default Landing;
