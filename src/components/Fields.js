import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import AddField from './AddField';

class Fields extends Component {
  constructor(){
      super();
      this.state = { listOfFields: [] };
  }

  getAllFields = () =>{
    axios.get(process.env.REACT_APP_BASE_URL + `/fields`)
    .then(responseFromApi => {
      this.setState({
        listOfFields: responseFromApi.data
      })
    })
    .catch((err)=>{
        console.log(err);
    })
  }

  componentDidMount() {
    this.getAllFields();
  }

  render(){
    return(
      <div className="fields-background">
        <h1>See what fields are available!</h1>
        <div style={{width: '60%', float:"left"}}>
          { this.state.listOfFields.map((field, index) => {
            return (
              <div className="give-a-box" key={field._id}>
                <Link to={`/fields/${field._id}`}>
                  <h3>{field.fieldName} ({field.teamsPlaying})</h3>
                </Link>
                <hr/>

              </div>
            )})
          }
        </div>
        <div style={{width: '40%', float:"right"}}>
            <AddField getData={() => this.getAllFields()}/>
        </div>
      </div>
    )
  }
}

export default Fields;