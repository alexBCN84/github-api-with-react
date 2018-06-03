import React, { Component } from "react"

class Form extends Component {
  render() {
    return (
      <form onSubmit = {this.props.getUser}>
        <div className="form-group">
          <input ref="username" className="form-control" type="text" name ="username" placeholder="enter github username"/>
          <button id="get-user" className ="btn btn-default fa fa-search" type="submit">&ensp;Get User</button>
        </div>
      </form>
    );
  }
}

export default Form;