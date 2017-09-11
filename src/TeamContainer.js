import React, { Component } from 'react'
import TeamList from './TeamList'
import TeamInput from './TeamInput'

class TeamContainer extends Component {
    constructor() {
        super();

        this.state = {
            players: ["Michael", "Herman", "Dougie", "Smalls"],
            teamName: "Bellafonte",
            players2: ["Tonka", "Helga", "Olga", "Smolga"],
            teamName2: "Ga ga"
        }

        this.addPlayer = this.addPlayer.bind(this);
        this.addPlayerToTeam2 = this.addPlayerToTeam2.bind(this)
    }

    addPlayer(playerName) {
        var newPlayers = this.state.players.slice();
        newPlayers.push(playerName);
        this.setState({
            players: newPlayers
        })
    }

    addPlayerToTeam2(playerName) {
        var newPlayers = this.state.players2.slice();
        newPlayers.push(playerName);
        this.setState({
            players2: newPlayers
        })
    }

    render() {
        return (
            <div>
                <TeamList list={this.state.players}
                    name={this.state.teamName}
                />
                <TeamInput addPlayer={this.addPlayer} />
                <hr />
                <TeamList list={this.state.players2}
                    name={this.state.teamName2}
                />
                <TeamInput addPlayer={this.addPlayerToTeam2} />
            </div>
        )
    }
}

export default TeamContainer