import { postsApi } from 'utils/api';

const PostsListActions = {
  setItems: items => ({
    type: 'POSTS:SET_ITEMS',
    payload: items,
  }),
  fetchItems: () => dispatch => {
    postsApi.get().then(({ data }) => {
      dispatch(PostsListActions.setItems(data));
    });
  },
};

export default PostsListActions;
