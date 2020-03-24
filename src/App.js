import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react'
import './App.css';
import Header from "./components/Header"
import User from "./components/User"
import { useAllUsersRequest, requestUserProfile} from '../src/apiMethods';
import SearchUser from './components/searchUserForm';

const inputStyle = {
  width: 200,
  height: 20,
  border: '1px solid #1777C2',
  borderRadius: 2,
  padding: 15,
  margin: "20px 0"
}

export default function App(){
  const usersList = useAllUsersRequest();
  const [searchInputValue, setSearchInputValue] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    setFiltered(usersList.filter( userLogin => {
      return userLogin.login.toLowerCase().includes(searchInputValue)
    }));

  }, [usersList, searchInputValue]);
  
  function onChangeFilterUser(event){
    setSearchInputValue(event.target.value.toString().toLowerCase())
  }
  
  function handleProfile(username){
    setUserProfile(requestUserProfile(username,setUserProfile));
  }

  function handleResults(){
    if(filtered.length === 0) {
      return <h1>No matches found</h1>
    } else {
      return (
        <section style={{margin: '20px 0px'}}>
          {filtered.map(({login}, index) => 
            <button key={index} onClick={() => handleProfile(login)}>{login}</button>
          )}
        </section>
      );
    }
  }

  return (
    <div>
      <Header/>
      <Container>
        <form>
          <input placeholder="filter first hundred profiles" value={searchInputValue} onChange={onChangeFilterUser} style={inputStyle}/>
        </form>
        {handleResults()}
        <SearchUser userProfile={userProfile} setUserProfile={setUserProfile} />
        {userProfile && <User {...userProfile}/>}
      </Container>
    </div>
  );
}

