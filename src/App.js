import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { HeaderBlock, FullPost, AddForm, NotFound } from 'components';
import { PostsList } from 'modules';

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
            {/* <button type="button" className="btn btn-primary">
              Add post
            </button> */}
            <div className="content">
              <Router>
                <div>
                  <Switch>
                    <Route path="/" exact component={() => <PostsList />} />
                    <Route
                      path="/post/:id"
                      exact
                      component={() => (
                        <FullPost title="Заголовок статьи" createdAt={'' + new Date()} />
                      )}
                    />
                    <Route path="/post/:id/edit" exact component={AddForm} />
                    <Route path="*" component={NotFound} />
                  </Switch>
                </div>
              </Router>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
