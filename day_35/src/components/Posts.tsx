import React, { useCallback, useEffect, useRef, useState } from "react";
import { fetchPostsAPI } from "../utils/fetchUsers";
import PostComponent, { PostType } from "./PostComponent";

const Posts = () => {
  const [posts, setPosts] = useState<{ data: PostType[]; pageNo: number }>({
    data: [],
    pageNo: 0,
  });
  const updatePosts = async () => {
    let newPostData = await fetchPostsAPI(posts.pageNo + 1, 5);
    console.log("vis", newPostData, posts.pageNo + 1);
    setPosts((oldPosts) => ({
      pageNo: oldPosts.pageNo + 1,
      data: [...oldPosts.data, ...newPostData.data],
    }));
  };

  const fetchPosts = useCallback(async () => {
    const postData = await fetchPostsAPI(posts.pageNo, 5);
    setPosts({ ...posts, data: [...posts.data, ...postData.data] });
  }, []);

  const observer = useRef<IntersectionObserver>();
  const lastPost = useCallback(
    (node) => {
      if (posts.pageNo >= 7) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver(async (entries) => {
        if (entries[0].isIntersecting) {
          console.log(posts, posts.pageNo);
          updatePosts();
        }
      });
      if (node) observer.current.observe(node);
    },
    [posts]
  );
  console.log(posts);

  useEffect(() => {
    fetchPosts();
  }, []);
  //console.log(posts);
  return (
    <div className="">
      {/* {posts[2] && <PostComponent post={posts[2]} />} */}
      {posts.data
        ? posts.data.map((post, inx) => {
            if (inx + 1 === posts.data.length)
              return <PostComponent ref={lastPost} key={post.id} post={post} />;
            return <PostComponent key={post.id} post={post} />;
          })
        : null}
    </div>
  );
};

export default Posts;
