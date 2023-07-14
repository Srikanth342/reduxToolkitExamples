import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, selectAllPosts } from "./postsSlice";

import { useEffect } from "react";
import PostExcerpt from "./PostExcerpt";

const PostsList = () => {
  const { posts, status, error } = useSelector(selectAllPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  let content;
  if (status === "loading") {
    content = <p>Loading...</p>;
  } else if (status === "succeeded") {
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts?.map((post, i) => (
      <PostExcerpt key={post?.id} post={post} i={i + 1} />
    ));
  } else if (status === "failed") {
    content = <p>Error...</p>;
  }

  return (
    <section>
      <h2>Posts</h2>
      {content}
    </section>
  );
};

export default PostsList;
