import React from 'react';
import { PostItem } from '../';

import './PostsList.scss';

const PostsList = ({ items }) => {
  return (
    <div className="post-items">
      {items ? items.map(post => <PostItem {...post} />) : 'Loading...'}
    </div>
  );
};

export default PostsList;
