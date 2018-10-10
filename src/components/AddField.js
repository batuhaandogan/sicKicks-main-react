import React, { Component } from 'react';
import axios from 'axios';


class AddField extends Component {
  constructor(props){
      super(props);
      this.state = { 
        fieldName: "",
        teamsPlaying: [],
        details: "" 


       };
  }
   
  handleFormSubmit = (event) => {
    event.preventDefault();
    // const {teamsPlaying} = this.state;
    const fieldName = this.state.fieldName;
    const teamsPlaying = this.state.teamsPlaying;
    const details = this.state.details;
    axios.post(process.env.REACT_APP_BASE_URL + "/fields", {fieldName, teamsPlaying, details})
    .then( () => {
        this.props.getData();
        this.setState({fieldName: "", TeamsPlaying: [], details: ""});
    })
    .catch( error => console.log(error) )
  }

  handleChange = (event) => {  
      const {name, value} = event.target;
    //   ^ this is just fancy syntax for the 2 lines below
    //   const name = event.target.name;
    //   const value = event.target.value;

      this.setState({[name]: value});
  }

  render(){
    return(
      <div className = "add-field">
        <form onSubmit={this.handleFormSubmit}>
          <label>Field Name:</label>
          <input type="text" name="fieldName" value={this.state.fieldName} onChange={ e => this.handleChange(e)}/>
          <br/>          <br/>
          <label>Teams Playing:</label>
          <input type="text" name="teamsPlaying" value={this.state.teamsPlaying} onChange={ e => this.handleChange(e)}/>
          <br/>         <br/>
          <label>Details:</label>
{/* <br/> */}
          <textarea name="details" value={this.state.details} onChange={ e => this.handleChange(e)} />
          <br/>        
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default AddField;