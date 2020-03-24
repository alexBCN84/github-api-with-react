import { useState, useEffect } from 'react';


const endpointRoot = `https://api.github.com`;
const allUsersPath = `/users`;

function handleResponse(response){
    return response.json()
        .then(json => {
            if (response.ok) {
                return json;
            } else {
                let error = {...json, status: response.status, statusText: response.statusText};
                return Promise.reject(error);
            }
        })
}

export function requestUserProfile(username, setProfile){
    const userProfileEndpoint = `${endpointRoot}${allUsersPath}/${username}`;
    fetch(userProfileEndpoint)
        .then(handleResponse)
        .then(data => {
                setProfile(data)
            }
        )
        .catch(error => console.log(error));
}
export function useAllUsersRequest(){
    
    const allUsersEndpoint = `${endpointRoot}${allUsersPath}?page=1&per_page=100`;
    
    const [allUsers, setAllUsers] = useState([]);
    
    useEffect(() => {
        fetch(allUsersEndpoint)
        .then(handleResponse)
        .then(data => {
            console.log(data);
            setAllUsers(data)
        })
        .catch(error => console.log(error))
    },[]);

    return allUsers;
}