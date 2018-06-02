import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: undefined,
    username: undefined,
    id: undefined,
    url: undefined,
    avatar_url: undefined,
    html_url: undefined,
    followers: undefined,
    following: undefined,
    created_at: undefined,
    error: ""
  }
  getUser = username => fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(response => response);

  async handleSubmit(e) {
    e.preventDefault();
    let user = await this.getUser(this.refs.username.value);
  
    this.setState({
      name: user.name,
      username: user.login,
      id: user.id,
      url: user.url,
      avatar_url: user.avatar_url,
      html_url: user.html_url,
      followers: user.followers,
      following: user.following,
      created_at: user.created_at
    })
  }
  render() {
    let user;
    let date = this.state.created_at;
    if (this.state.username) {
      user = 
        <div className="col-xs-12 col-sm-6 col-sm-offset-3"><br/>
          <a href={this.state.html_url}><img className="avatar-round" src={this.state.avatar_url} width="128" height="128"/></a>
          {
            this.state.name && 
            <p className="App-intro">
            <span className="info-tag">Name:&#32;</span> 
            <span className="info-data">{this.state.name}</span>
          </p>
        }
        {
          this.state.username &&
          <p className="App-intro">
            <span className="info-tag">User Name:&#32;</span> 
            <span className="info-data">{this.state.username}</span>
          </p>
        }
        {
          this.state.id &&
          <p className="App-intro">
            <span className="info-tag">User ID:&#32;</span> 
            <span className="info-data">{this.state.id}</span>
          </p>
        }
        {
          this.state.followers &&
          <p className="App-intro">
            <span className="info-tag">Followers:&#32;</span> 
            <span className="info-data">{this.state.followers}</span>
          </p>
        }
        {
          this.state.following &&
          <p className="App-intro">
            <span className="info-tag">Following:&#32;</span>
            <span className="info-data">{this.state.following}</span>
          </p> 
        }
        {
          this.state.created_at &&
          <p className="App-intro">
            <span className="info-tag">Active user since&#32;</span>
            <span className="info-data">{date.substring(0,7)}</span>
          </p>  
        }
        {
          this.state.url &&
          <p className="App-intro"><span className="info-tag">Url:&#32;</span> <a className="link info-data" href={this.state.url}>{this.state.url}</a></p>
        }
      </div>
    } else {
      this.state.error = "Sorry, we could not match your search with any GitHub username";
      user = 
      <div className="col-xs-12 col-sm-6 col-sm-offset-3"><br/>
        <p className="info-tag">{this.state.error}</p>
      </div>
    } 
    return (
      <div className="App">
        <header className="App-header">
          <span className="gitHub-logo" alt="logo"><i className="fa fa-github-square"></i></span>
          <h1 className="App-title">Welcome to GitHub profile finder</h1>
        </header>
        <div className="container">
          <div className="row">
            <div className="col-xs-11 col-sm-8 col-sm-offset-2 block__separation">
              <form onSubmit={e => this.handleSubmit(e)}>
                <div className="form-group">
                  <input ref="username" className="form-control" type="text" placeholder="enter github username"/><i className="fa fa-search"></i>
                </div>
              </form>
              <div className="info__block">{user}</div> 
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
