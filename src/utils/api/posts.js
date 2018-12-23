import axios from 'axios';

export default {
  get: () => axios.get('/posts.json'),
};
