import React from 'react';
import ReactDOM from 'react-dom'

export class UserForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = { username: '' };
    }
    myChangeHandler = (event) => {
      this.setState({username: event.target.value});
    }
    render() {
      let header = '';
      if (this.state.username) {
        header = <h1>Hello {this.state.username}</h1>;
      } else {
        header = '';
      } 

      return (
        <form>
        {header}
        <p>Ingresa tu nombre de usuario:</p>
        <input
          type='text'
          onChange={this.myChangeHandler}
        />
        <p>Ingresa tu contraseña:</p>
        <input
          type='text'
          // onChange={this.myChangeHandler}
        />
        </form>
      );
    }
  }
  
//  export default UserForm;