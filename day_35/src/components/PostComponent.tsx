import React, { LegacyRef, useCallback, useEffect, useState } from "react";
import { fetchCommentsAPI, genUserName } from "../utils/fetchUsers";
import Comment, { CommentType } from "./Comment";
import { UserType } from "./Landing";
import LikeCommentShare from "./LikeCommentShare";
import StoryIcon from "./StoryIcon";

export interface PostType {
  id: string;
  image: string;
  likes: number;
  owner: any;
  publishDate: string;
  tags: string[];
  text: string;
}

interface PropTypes {
  post: PostType;
  lastPost?: any;
}

const PostComponent = React.forwardRef<HTMLDivElement>(
  ({ post }: PropTypes, ref) => {
    const { image, likes, tags, text, owner, id } = post;
    const [comments, SetComments] = useState<CommentType[]>([]);
    const fetchComments = useCallback(async () => {
      const commentData = await fetchCommentsAPI(id);
      SetComments(commentData.data);
    }, []);
    useEffect(() => {
      fetchComments();
    }, [fetchComments]);
    const userName = genUserName(owner.firstName, owner.lastName);

    return (
      <div ref={ref} className="my-4 bg-white flex flex-col">
        <div className="h-14 px-4 rounded-sm flex flex-row items-center justify-between">
          <div className="flex flex-row items-center justify-betwwen">
            <StoryIcon user={owner} small={8} size={10} />
            <p>{userName}</p>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
            />
          </svg>
        </div>
        <div className="w-full px-4">
          <img src={image} className="w-full" />
          <LikeCommentShare />
          <div className="text-sm font-bold pt-1">{likes} Likes</div>
          <p className="pt-1">
            <span className="font-semibold cursor-pointer">{userName}</span>
            &nbsp;&nbsp;
            <span className="text-wrap">{text}</span>
          </p>
          <p className="pt-3 pb-1">
            {tags.map((tag, inx) => (
              <span key={inx} className="text-blue-800 italic">
                #{tag}&nbsp;&nbsp;
              </span>
            ))}
          </p>
          {comments.length ? (
            <p className="text-sm font-light">
              View all {comments.length} comments
            </p>
          ) : (
            ""
          )}
          {comments.length ? (
            <div className="py-2">
              {comments.slice(0, 2).map(({ owner, message, id }) => (
                <Comment key={id} owner={owner} message={message} />
              ))}
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
);

export default PostComponent;
