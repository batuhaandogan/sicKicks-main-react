// import React, { Component } from 'react';
// import '../App.css';


// class Profile extends Component {
//   constructor(props){
//     super(props);
//     this.state = {}
//   }
   
//   addVideo() {
//       console.log('do something')
//   }
  
//   render(){
    



//       return(
        
     
//         <div className="profile">

// <h1>Welcome to your Profile</h1>

// <h2>Name and location:</h2>

// Joey Smith<br/>
// Miami, FL<br/>
// Birthday (if they choose to show it)

// <h2>Summary/Bio:</h2>

// This is where the user's bio will go. They can change it by
// manually editing their own profile.<br/>

// They can also use this to put their skills.


// <h2>Videos:  <button onClick={this.addVideo}>Add a video</button> </h2>




// <iframe className="the-video" width="1000" height="615" src="https://www.youtube.com/embed/tZSIQ_68VFE" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>


//         </div>
//       )
    
//     }
// }
//   export default Profile;

import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
import AuthService from './auth/auth-service';
// import EditPorfile from './components/EditPorfile'


class Profile extends Component {
  constructor(props){
    super(props);
    this.state = { 
      loggedInUser: this.props.userInSession
         };
    this.service = new AuthService();

  }

  
componentWillReceiveProps(nextProps) {
    console.log('1234567890987654321`12345678909876543',nextProps)
    this.setState({ 
      loggedInUser: nextProps["userInSession"]  
  })
  }

    
  render(){
    console.log('!!!!!!!==========' , this.state.loggedInUser)
    if(this.state.loggedInUser){
      console.log(this.state.loggedInUser.username)
      return(
            <div className="change-the-color">
              <div className="moving-the-top">
            <img src={this.state.loggedInUser.avatar} width= "100px"/>
            <h1>Name: {this.state.loggedInUser.firstName} {this.state.loggedInUser.lastName}</h1>
            <br/>
            <h1>{this.state.loggedInUser.username}'s Profile</h1>
            <h1>Email: {this.state.loggedInUser.email} </h1>
{/*             
<div className="background-image-class">
  
</div> */}
              </div>

<br/>

           <iframe className="the-video" width="1000" height="615" src="https://www.youtube.com/embed/bKOTKHtbM54" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>

            </div>
             

      ) 
    } else {
      return (
        <div>
Refresh if you're getting this message so you can view your profile. Sorry!        </div>
      )
    }
    }
  }

  
  export default Profile;