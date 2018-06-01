import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    username: null,
    id: null,
    url: null,
    avatar_url: null,
    html_url: null,
    followers: null,
    following: null,
    created_at: null
  }
  getUser = username => fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(response => response);

  async handleSubmit(e) {
    e.preventDefault();
    let user = await this.getUser(this.refs.username.value);
  
    this.setState({
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
    console.log(typeof this.state.created_at)
    if (this.state.username) {
      user = 
        <div><br/>
          <a href={this.state.html_url}><img src={this.state.avatar_url} width="128" height="128"/></a>
          <p className="App-intro">
            User Name: {this.state.username}</p>
          <p className="App-intro">
            User ID: {this.state.id}</p>
          <p className="App-intro">
            Followers: {this.state.followers}
          </p>
          <p className="App-intro">
            Following: {this.state.following}
          </p>
          <p className="App-intro">
            Active user since {this.state.created_at}
          </p>
          <p className="App-intro">Url: <a className="link" href={this.state.url}>{this.state.url}</a></p>
        </div>
    }  
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input ref="username" type="text" placeholder="username"/>
        </form>
        {user}
      </div>
    );
  }
}

export default App;
