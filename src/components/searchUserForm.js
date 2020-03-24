import React, {useState} from "react"
import {Grid, Icon, Form, Input, Button } from 'semantic-ui-react'
import {requestUserProfile} from '../apiMethods';

export default function SearchUser({setUserProfile}){
  const [userName, setUserName] = useState('');


  function handleInputValue(event){
    setUserName(event.target.value.toString().toLowerCase())
  }
  return (
    <Grid centered>
      <Grid.Column mobile={10} tablet={8} computer={6}>
        <Form onSubmit = {() => requestUserProfile(userName, setUserProfile)}>
          <Form.Field inline>
            <Input type="text" name ="username" value={userName} placeholder="enter github username" onChange={handleInputValue}/>
            <Button primary id="get-user" type="submit"><Icon name="search" />&ensp;Search User</Button>
          </Form.Field>
        </Form>
      </Grid.Column>
    </Grid>
  )
}
