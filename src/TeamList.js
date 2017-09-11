import React, { Component } from 'react'

class TeamList extends Component {
    constructor() {
        super();
    }
    
    render() {
        // var listOfPlayers = this.props.list.map( (playerName) => <li>{playerName}</li>)
        var list =  this.props.list;

        var listOfPlayers = []
        for(var i = 0; i < list.length; i++){
            listOfPlayers.push(<li> {list[i]} </li> )
        }

        return (
            <div>
                <h3>{this.props.name}</h3>
                <ul>
                    {listOfPlayers}
                </ul>
            </div>
        )
    }
}

export default TeamList