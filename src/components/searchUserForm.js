import React, { Component } from "react"
import {Grid, Icon, Form, Input, Button } from 'semantic-ui-react'


class SearchUser extends Component {
  render() {
    return (
      <Grid centered>
        <Grid.Column mobile={10} tablet={8} computer={6}>
          <Form onSubmit = {this.props.getUser}>
            <Form.Field inline>
              <Input ref="username" type="text" name ="username" placeholder="enter github username"/>
              <Button primary id="get-user" type="submit"><Icon name="search" />&ensp;Search User</Button>
            </Form.Field>
          </Form>
        </Grid.Column>
      </Grid>
    );
  }
}

export default SearchUser;