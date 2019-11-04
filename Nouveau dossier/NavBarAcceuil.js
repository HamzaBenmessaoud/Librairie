import React, { Component } from 'react';

import axios from 'axios'
class NavBarAcceuil extends Component{
    constructor (props){
        super(props);
        this.deconnexion= this.deconnexion.bind(this);
        this.f=this.f.bind(this);
    }
    deconnexion(){


    var url = new URLSearchParams()
                url.append("key", this.props.keySession)


                axios.get("http://localhost:8080/Twister//user/logout?" + url).then(response => {

                    var x = 0
                    x = response.data

                    this.props.changerkey("")
                    this.props.changerpage("connexion")

                });



    }
    // fonction qui change la page et qui fait remonter la valeur de l'input
    f() {

        this.props.chaineRecherche(this.chaine.value)
        document.getElementById("champsdesaisie").value="";
        this.props.changerpage("recherche")


    }
    render(){
        return(
            <div className='barre de navigation'>
                <nav className="navbar navbar-expand-lg navbar-light ">

                    <a className="navbar-brand" href="#" style={{fontFamily:'Baloo Chettan'}} onClick={()=>this.props.changerpage("accueil")}>
                        <div className="text-info">
                            Twister
                        </div>
                    </a>


                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Compte
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="#" onClick={(event)=>this.props.changerpage("profil")}>Mon profil</a>
                                    <a className="dropdown-item" href="#" onClick={(event)=>this.props.changerpage("listeAmis")}>Liste amis</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#" onClick={(event)=> this.deconnexion()}>Déconnexion</a>
                                </div>
                            </li>

                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" id="champsdesaisie" ref={c => this.chaine=c}/>
                            <button className="btn btn-info" type="submit" onClick={()=> this.f()}>Search</button>
                        </form>
                    </div>
                </nav>

            </div>



        )
    }



}
export default NavBarAcceuil;