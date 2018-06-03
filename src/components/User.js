import React from "react"

const User = props =>  {
  const date = props.created_at;
  const name = props.name;
  const capitalize = name => name.split(' ').map(word => (
    word[0].toUpperCase() + word.substr(1,word.length)
    .split('')
    .map(letter => letter.toLowerCase())
    .join('')))
    .join(' ');
  
  const user = nameOrLogin => (nameOrLogin + (nameOrLogin[nameOrLogin.length -1] === "s" ? "'" : "'s")); 

  return (
    <div className="info__block">
      <div className="col-xs-12 col-sm-6 col-sm-offset-3"><br/>
      { props.html_url && props.avatar_url &&
        <a href={props.html_url}><img className="avatar-round" src={props.avatar_url} width="128" height="128" alt="profile"/></a>
      }
      { props.name &&
        <p className="App-intro">
          <span className="info-tag">Name:&#32;</span> 
          <span className="info-data">{capitalize(name)}</span>
        </p>
      }
      {
        props.username &&
        <p className="App-intro">
          <span className="info-tag">User Login:&#32;</span> 
          <span className="info-data">{props.username}</span>
        </p>
      }
      {
        props.id &&
        <p className="App-intro">
          <span className="info-tag">User ID:&#32;</span> 
          <span className="info-data">{props.id}</span>
        </p>
      }
      {
        props.followers &&
        <p className="App-intro">
          <span className="info-tag">Followers:&#32;</span> 
          <span className="info-data">{props.followers}</span>
        </p>
      }
      {
        props.following &&
        <p className="App-intro">
          <span className="info-tag">Following:&#32;</span>
          <span className="info-data">{props.following}</span>
        </p> 
      }
      {
        props.created_at &&
        <p className="App-intro">
          <span className="info-tag">Active user since&#32;</span>
          <span className="info-data">{date.substring(0,7)}</span>
        </p>  
      }
      {
        props.url &&
        <p className="App-intro"><span className="info-tag">Url:&#32;</span> <a className="link info-data" href={props.url}>{props.url}</a></p>
      }
      {
        props.error &&
        <p className="info-tag">{props.error}</p>
      }
      { 
        props.html_url &&
        <a className="btn btn-default" href={props.html_url}>See {user(props.name && capitalize(props.name) || props.username)} profile</a>
      }
    </div> 
  </div>
)};
  

export default User;