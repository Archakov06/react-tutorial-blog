import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { HeaderBlock } from 'components';

const mapStateToProps = ({ posts }, { location: { pathname } }) => {
  const postId = pathname.split('/post/')[1];
  return !posts.items ? {} : posts.items.filter(post => post._id === postId)[0];
};

HeaderBlock.defaultProps = {
  title: 'React Blog',
  description: 'Мой блог на ReactJS и MongoDB',
  imageUrl:
    'https://images.unsplash.com/photo-1541103554737-fe33e243b45c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5070c2f1196983d1b380bee6b3315c83&auto=format&fit=crop&w=1350&q=80',
};

export default withRouter(connect(mapStateToProps)(HeaderBlock));
