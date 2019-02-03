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
    const { fetchRemoveItem } = this.props;
    return <PostsList items={this.props.items} onRemove={fetchRemoveItem} />;
  }
}

export default connect(
  ({ posts }) => posts,
  PostsListActions,
)(PostsListContainer);
