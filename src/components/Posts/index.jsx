import { PostCard } from "../PostCard";

import "./styles.css";

export const Posts = (props) => {
  const { posts } = props;

  return (
    <div className='posts'>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};
