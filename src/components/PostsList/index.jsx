import React from 'react';
import { PostItem } from '../';

import './PostsList.scss';

const PostsList = ({ posts }) => {
  return (
    <div className="post-items">
      {posts.map(post => (
        <PostItem {...post} />
      ))}
    </div>
  );
};

export default PostsList;
