import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from './auth/auth-service';
// import Lobby from './Lobby'


class Navbar extends Component {
  constructor(props){
    super(props);
    this.state = { 
      loggedInUser: null
         };
    this.service = new AuthService();

  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({ 
      loggedInUser: nextProps["userInSession"]  
  })
  }


  logout = () =>{
    this.service.logout()
    .then(()=>{
      this.props.setTheUserInTheAppComponent(null)
      this.props.history.push('/');
    })
  }



    
  render(){
    if(this.state.loggedInUser){
      return(
        <nav className="nav-style">
          <ul>
            <li>Welcome, {this.state.loggedInUser.username}!</li>
            <li id="the-navbar-base">
              <Link to='/lobby' style={{ textDecoration: 'none' }}> Lobby </Link>
              <button className="btn btn-danger the-logout" onClick={()=>this.logout()}>Logout</button>
              </li>
          </ul>
        </nav>
      )
    } else {
      return (
        <div>

        </div>
      )
    }
    }
  }

  
  export default Navbar;