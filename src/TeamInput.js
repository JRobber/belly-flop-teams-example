import React, { Component } from 'react'

class TeamInput extends Component {
    constructor(){
        super();

        this.state = {
            name: ""
        }
    }

    nameChanged(newName){
        this.setState({
            name: newName
        })
    }

    render() {
        var addPlayer = this.props.addPlayer
        return (
            <div>
                <input onChange={(e) => this.nameChanged(e.target.value)} />
                <button onClick={ (e)=> addPlayer(this.state.name) }>Add</button>
            </div>
        )
    }
}

export default TeamInput