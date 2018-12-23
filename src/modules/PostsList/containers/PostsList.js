import React from 'react';
import { connect } from 'react-redux';
import { PostsList } from 'components';
import PostsListActions from '../actions';

class PostsListContainer extends React.Component {
  componentWillMount() {
    const { fetchItems } = this.props;
    fetchItems();
  }
  render() {
    return <PostsList items={this.props.items} />;
  }
}

export default connect(
  ({ posts }) => posts,
  PostsListActions,
)(PostsListContainer);
