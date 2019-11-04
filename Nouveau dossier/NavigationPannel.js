import React, { Component } from 'react';

import Login from "./Login";
import Signin from "./Signin";
import Accueil from "./Accueil";
import NavBar from "./NavBar";

class NavigationPannel extends Component {
    constructor(props){
        super(props);

    }




    render() {
        return (
            <div>{console.log("NAVPANNEL")}

                <nav>{this.props.keySession === "" && this.props.page ==="connexion" ?
                    <div>
                    <NavBar changerpage={this.props.changerpage}/>
                    <Login changerpage={this.props.changerpage} changerkey={this.props.changerkey}/>
                    </div>:
                    this.props.keySession === "" && this.props.page ==="inscription" ?
                        <div>
                            <NavBar changerpage={this.props.changerpage}/>
                            <Signin changerpage={this.props.changerpage}/>
                        </div>
                        :
                        <div>
                            <Accueil keySession={this.props.keySession} id={this.props.id} login_user={this.props.login_user} changerpage={this.props.changerpage} page={this.props.page} changerkey={this.props.changerkey}/>
                        </div>


                    }</nav>



            </div>
        );
    }
}

export default NavigationPannel;
