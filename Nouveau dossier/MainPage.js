import React, { Component } from 'react';


import NavigationPannel from './NavigationPannel';

class MainPage extends Component {
    constructor(props){
        super(props);
        this.state={page:"connexion",
                    keySession:"",
                    id:0,
                    login_user:""}
        this.changerpage= this.changerpage.bind(this);
        this.changerkey=this.changerkey.bind(this);

    }
changerkey(txt){
        if (txt===""){
            this.setState({

                keySession:"",
                id:0,
                login_user:"",

            })
        }else{
        this.setState({

            keySession:txt['key'],
            id:txt['id'],
            login_user:txt['login'],
        })}
}
changerpage(txt){
        this.setState({
            page:txt,
        })

}

    render() {

        return (
            <div className="MainPage">

            <NavigationPannel  page={this.state.page} keySession={this.state.keySession}id={this.state.id}login_user={this.state.login_user} changerpage={this.changerpage} changerkey={this.changerkey}/>


            </div>
        );
    }
}

export default MainPage;
