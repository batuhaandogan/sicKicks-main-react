import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AddTeam from './AddTeam';

class Teams extends Component {
  constructor(){
      super();
      this.state = { listOfTeams: [] };
  }

  getAllTeams = () =>{
    axios.get(process.env.REACT_APP_BASE_URL + `/teams`)
    .then(responseFromApi => {
      this.setState({
        listOfTeams: responseFromApi.data
      })
    })
    .catch((err)=>{
        console.log(err);
    })
  }

  componentDidMount() {
    this.getAllTeams();
  }

  render(){
    return(
      <div className="teams-background">
                <h1>See what teams have signed up!</h1>

        <div style={{width: '60%', float:"left"}}>
          { this.state.listOfTeams.map((team, index) => {
            return (
              <div className="give-a-box" key={team._id}>
                <Link to={`/teams/${team._id}`}>
                  <h3>{team.teamName} ({team.league})</h3>
                </Link>
                <hr/>
                
              </div>
              
            )})
          }
        </div>
        <div style={{width: '40%', float:"right"}}>
            <AddTeam getData={() => this.getAllTeams()}/>
        </div>
      </div>
    )
  }
}

export default Teams;