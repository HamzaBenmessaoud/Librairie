import React, { Component } from 'react';
import ListMessage from './ListMessage';



export default class Profil extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div >
                <h2 className="">{"@"+this.props.login_user} </h2>
                <ListMessage keySession={this.props.keySession} id={this.props.id} />





            </div>
        )
    }

}