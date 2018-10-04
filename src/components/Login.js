
import React, { Component } from 'react';
import AuthService from './auth/auth-service';
import {Link} from 'react-router-dom' 
import { Redirect } from 'react-router-dom';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = { 
      username: '',
      password: '',
     };
    this.service = new AuthService();
  }

  handleFormSubmit = (event) => {
    // axios.post()
    // .then(() => this.setState({ redirect: true }));
    console.log(this.state.redirect);
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
  
    this.service.login(username, password)
    .then( response => {
        this.setState({
            username: "", 
            password: "",
        });
        this.props.setTheUserInTheAppComponent(response)
        this.props.history.push('/lobby')
    })
    .catch( error => console.log(error) )
  }
  
  handleChange = (event) => {  
    const {name, value} = event.target;
    this.setState({[name]: value});
  }
      
  
  render(){
    return(
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input type="text" name="username" value={this.state.username} onChange={ e => this.handleChange(e)}/>
          
          <label>Password:</label>
          <input name="password" value={this.state.password} onChange={ e => this.handleChange(e)} />
          
          <input type="submit" value="Login" />
        </form>
  
        <p>Join us, be pro! 
            <Link className="whatever" to={"/signup"}> Signup</Link>
        </p>
  
      </div>
    )
  }
}
export default Login;