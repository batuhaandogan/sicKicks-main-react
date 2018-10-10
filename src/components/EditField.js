import React, { Component } from 'react';
import axios from 'axios';

class EditField extends Component {
  constructor(props){
    super(props);
    this.state = {
        teamsPlaying: this.props.theField.teamsPlaying, 
        fieldName: this.props.theField.fieldName,
        details: this.props.theField.details
    }
  }

    
  handleFormSubmit = (event) => {
    const teamsPlaying = this.state.teamsPlaying;
    const fieldName = this.state.fieldName;
    const details = this.state.details;

    event.preventDefault();

    axios.put(process.env.REACT_APP_BASE_URL + `/fields/${this.props.theField._id}`, { teamsPlaying
    , fieldName, details 
  })
    .then( () => {
        this.props.getTheField();
        // after submitting the form, redirect to '/fields'
        this.props.history.push('/fields');    
    })

    .catch( error => console.log(error) )
  }

  handleChangeTeamsPlaying = (event) => {  
    this.setState({
      teamsPlaying:event.target.value
    })
  }

  handleChangeFieldName = (event) => {  
    this.setState({
      fieldName:event.target.value
    })
  }

  handleChangeDetails = (event) => {  
    this.setState({
      details:event.target.value
    })
  }
  render(){
    return (
      <div className="the-input-boxes">
        <hr />
        <h3>Edit form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>Teams Playing:</label>
          <input type="text" name="teamsPlaying" value={this.state.teamsPlaying} onChange={e => this.handleChangeTeamsPlaying(e)}/>
          {/* <br/> */}
          <label>Field Name:</label>
          <input type="text" name="fieldName" value={this.state.fieldName} onChange={e => this.handleChangeFieldName(e)}/>
          <br/>
          <label>Details:</label>
          <br/>
          <textarea name="details" value={this.state.details} onChange={ e => this.handleChangeDetails(e)} />
          <br/>

          <input type="submit" value="Submit" className="btn btn-success"/>



          <hr/>

        </form>
      </div>
    )
  }
}

export default EditField;