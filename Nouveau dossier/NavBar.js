import React, { Component } from 'react';

class NavBar extends Component{
    constructor (props){
        super(props);
        this.f= this.f.bind(this);
    }
    f(){
        alert("Veuillez vous connecter avant d'effectuer une rechercher! Merci.")
    }
    render(){
        return(
            <div className='barre de navigation'>
                <nav className="navbar navbar-light" >

                        <a className="navbar-brand" style={{fontFamily:'Baloo Chettan'}} href="#" onClick={()=> this.props.changerpage("connexion")}>
                            <div className="text-info">
                            Twister
                        </div></a>
                    <form className="form-inline">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={()=>this.f()}>Search</button>
                    </form>
                </nav>

            </div>


        )
    }



}
export default NavBar;