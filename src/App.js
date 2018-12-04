import React, { Component } from 'react';

import { HeaderBlock, PostItem } from 'components';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HeaderBlock
          title="Заголовок сайта"
          description="Описание"
          imageUrl="https://images.unsplash.com/photo-1541103554737-fe33e243b45c?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=5070c2f1196983d1b380bee6b3315c83&auto=format&fit=crop&w=1350&q=80"
        />
        <div className="container">
          <div className="content">
            <button type="button" className="btn btn-primary">
              Add post
            </button>
            <div className="content">
              {/* <div className="post-items">
                <PostItem _id="1" title="Заголовок статьи" createdAt="Fri Nov 02 2018" />
                </div> */}
              <form className="add-form">
                <div className="form-group">
                  <div className="add-form__row">
                    <h4>
                      <label for="title">Title</label>
                    </h4>
                    <input
                      type="text"
                      className="form-control"
                      id="title"
                      placeholder="Enter email"
                    />
                  </div>
                  <div className="add-form__row">
                    <h4>
                      <label for="image">Image URL</label>
                    </h4>
                    <input
                      type="text"
                      className="form-control"
                      id="image"
                      placeholder="Enter image URL"
                    />
                  </div>
                  <div className="add-form__row">
                    <h4>
                      <label for="description">Description</label>
                    </h4>
                    <textarea
                      rows="8"
                      className="form-control"
                      placeholder="Enter text"
                      id="description"
                    />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
