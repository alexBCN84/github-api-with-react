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
    url: null,
    avatar_url: null,
    html_url: null,
    followers: null,
    following: null,
    created_at: null,
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
        id: user.id,
        url: user.url,
        avatar_url: user.avatar_url,
        html_url: user.html_url,
        followers: user.followers,
        following: user.following,
        created_at: user.created_at,
        error: ""
      })
    } else {
      this.setState({
        name: undefined,
        username: undefined,
        id: undefined,
        url: undefined,
        avatar_url: undefined,
        html_url: undefined,
        followers: undefined,
        following: undefined,
        created_at: undefined
      })
    }

    if (!this.state.username) {
      this.setState({error: "You need to enter a valid user name"})
    }
    console.log(username)
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
                id={this.state.id}
                url={this.state.url}
                avatar_url={this.state.avatar_url}
                html_url={this.state.html_url}
                followers={this.state.followers}
                following={this.state.following}
                created_at={this.state.created_at}
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

// class App extends Component {
  // state = {
  //   name: undefined,
  //   username: undefined,
  //   id: undefined,
  //   url: undefined,
  //   avatar_url: undefined,
  //   html_url: undefined,
  //   followers: undefined,
  //   following: undefined,
  //   created_at: undefined,
  //   error: undefined
  // }
//   getUser = username => fetch(`https://api.github.com/users/${username}`)
//     .then(response => response.json())
//     .then(response => response);

//   async handleSubmit(e) {
//     e.preventDefault();
//     let user = await this.getUser(this.refs.username.value);
//     //console.log(user)
//     if (user) {
      // this.setState({
      //   name: user.name,
      //   username: user.login,
      //   id: user.id,
      //   url: user.url,
      //   avatar_url: user.avatar_url,
      //   html_url: user.html_url,
      //   followers: user.followers,
      //   following: user.following,
      //   created_at: user.created_at,
      //   error: ""
      // })
//     } else {
//       this.setState({
//         name: undefined,
//         username: undefined,
//         id: undefined,
//         url: undefined,
//         avatar_url: undefined,
//         html_url: undefined,
//         followers: undefined,
//         following: undefined,
//         created_at: undefined,
//         error: "Sorry, we could not match your search with any GitHub username"
//       })
//     }
    
//   }
//   render() {
//     let userData;
//     let date = this.state.created_at;
//       userData = 
//         <div className="col-xs-12 col-sm-6 col-sm-offset-3"><br/>
//           {
//             this.state.html_url && this.state.url &&
//             <a href={this.state.html_url}><img className="avatar-round" src={this.state.avatar_url} width="128" height="128" alt="profile"/></a>
//           }
          
//           {
//             this.state.name && 
//             <p className="App-intro">
//             <span className="info-tag">Name:&#32;</span> 
//             <span className="info-data">{this.state.name}</span>
//           </p>
//         }
        // {
        //   this.state.username &&
        //   <p className="App-intro">
        //     <span className="info-tag">User Name:&#32;</span> 
        //     <span className="info-data">{this.state.username}</span>
        //   </p>
        // }
        // {
        //   this.state.id &&
        //   <p className="App-intro">
        //     <span className="info-tag">User ID:&#32;</span> 
        //     <span className="info-data">{this.state.id}</span>
        //   </p>
        // }
        // {
        //   this.state.followers &&
        //   <p className="App-intro">
        //     <span className="info-tag">Followers:&#32;</span> 
        //     <span className="info-data">{this.state.followers}</span>
        //   </p>
        // }
        // {
        //   this.state.following &&
        //   <p className="App-intro">
        //     <span className="info-tag">Following:&#32;</span>
        //     <span className="info-data">{this.state.following}</span>
        //   </p> 
        // }
        // {
        //   this.state.created_at &&
        //   <p className="App-intro">
        //     <span className="info-tag">Active user since&#32;</span>
        //     <span className="info-data">{date.substring(0,7)}</span>
        //   </p>  
        // }
        // {
        //   this.state.url &&
        //   <p className="App-intro"><span className="info-tag">Url:&#32;</span> <a className="link info-data" href={this.state.url}>{this.state.url}</a></p>
        // }
        // {
        //   this.state.error &&
        //   <p className="info-tag">{console.log(this.state.error)}</p>
        // }
//       </div>
    
//     return (
//       <div className="App">
//         <Title/>
//         <div className="container">
//           <div className="row">
//             <div className="col-xs-11 col-sm-8 col-sm-offset-2 block__separation">
//               <form onSubmit={e => this.handleSubmit(e)}>
//                 <div className="form-group">
//                   <input ref="username" className="form-control" type="text" placeholder="enter github username"/><i className="fa fa-search"></i>
//                 </div>
//               </form>
//               <div className="info__block">{userData}</div> 
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

//export default App;
