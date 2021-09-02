import React from "react";
import { genUserName } from "../utils/fetchUsers";
import { UserType } from "./Landing";

interface PropTypes {
  owner: UserType;
  message: string;
}

export interface CommentType {
  id: string;
  owner: UserType;
  message: string;
  post: string;
  publishDate: string;
}

const Comment = ({ owner, message }: PropTypes) => {
  return (
    <p className="pt-1">
      <span className="font-semibold cursor-pointer">
        {genUserName(owner.firstName, owner.lastName)}1
      </span>
      &nbsp;&nbsp;
      <span className="text-wrap">{message}</span>
    </p>
  );
};

export default Comment;
