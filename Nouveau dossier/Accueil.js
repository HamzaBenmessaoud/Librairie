import React, { Component } from 'react';
import NavBarAcceuil from './NavBarAcceuil'
import ListMessage from'./ListMessage'
import Friend from './Friend'
import Profil from './Profil'
import ChercherAmis from "./ChercherAmis";
import User from "./User";

class Accueil extends Component{
    constructor (props){
        super(props);

 this.chaineRecherche = this.chaineRecherche.bind(this);
 this.userid=this.userid.bind(this)


    }
    userid(id){
        this.iduser=id;
    }

    chaineRecherche(txt){
        this.chaine=txt;
    }
    render(){
        return(


            <div>
                <NavBarAcceuil chaineRecherche={this.chaineRecherche} keySession={this.props.keySession}id={this.props.id}login_user={this.props.login_user} changerpage={this.props.changerpage} changerkey={this.props.changerkey}/>


                <div className="container" >


                <nav>
                    {this.props.page==="listeAmis" ?
                    <Friend keySession={this.props.keySession}id={this.props.id}login_user={this.props.login_user} changerpage={this.props.changerpage} userid={this.userid}/> :
                        this.props.page==="profil" ?
                            <div>

                                <Profil keySession={this.props.keySession}id={this.props.id}login_user={this.props.login_user} changerpage={this.props.changerpage}/>
                            </div>:
                            this.props.page==="recherche"?
                                <div>
                                    <ChercherAmis keySession={this.props.keySession} chaine={this.chaine} id={this.props.id}/>
                                </div>

                                :
                                this.props.page==="user"?
                                    <div>
                                        <User keySession={this.props.keySession} id={this.iduser} />
                                    </div>

                                    :


                                   <div>
                                       <ListMessage keySession={this.props.keySession} id={0} changerpage={this.props.changerpage}/>


</div>



                        }


                </nav>



                </div>

            </div>


        )
    }



}
export default Accueil;