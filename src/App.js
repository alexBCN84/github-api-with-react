import React, { Component } from 'react';
import './App.css';
import Header from "./components/Header"
import Form from "./components/Form"
import User from "./components/User"

class App extends Component {
  state = {
    name: null,
    username: null,
    id: null,
    location: null,
    url: null,
    avatar_url: null,
    html_url: null,
    followers: null,
    following: null,
    created_at: null,
    updated_at: null,
    error: null
  }
  getUser = async(e) => {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const api_call = await fetch(`https://api.github.com/users/${username}`);
    const user = await api_call.json();
    if (username) {
      this.setState({
        name: user.name,
        username: user.login,
        location: user.location,
        id: user.id,
        url: user.url,
        avatar_url: user.avatar_url,
        html_url: user.html_url,
        followers: user.followers,
        following: user.following,
        created_at: user.created_at,
        updated_at: user.updated_at,
        error: ""
      })
    } else {
      this.setState({
        name: undefined,
        username: undefined,
        location: undefined,
        id: undefined,
        url: undefined,
        avatar_url: undefined,
        html_url: undefined,
        followers: undefined,
        following: undefined,
        created_at: undefined,
        updated_at: undefined
      })
    }

    if (!this.state.username) {
      this.setState({error: "You need to enter a valid user name"})
    }
  }
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container">
          <div className="row">
            <div className="col-xs-11 col-sm-8 col-sm-offset-2 block__separation">
              <Form getUser={this.getUser}/>
              <User 
                name={this.state.name}
                username={this.state.username}
                location={this.state.location}
                id={this.state.id}
                url={this.state.url}
                avatar_url={this.state.avatar_url}
                html_url={this.state.html_url}
                followers={this.state.followers}
                following={this.state.following}
                created_at={this.state.created_at}
                updated_at={this.state.updated_at}
                error={this.state.error}
              />
            </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default App;