import React, { Component } from 'react';
import axios from 'axios'

class Login extends Component {

        constructor(props){
            super(props);
            this.connexion= this.connexion.bind(this);
        }

    connexion(){

    if((this.log.value==="")||(this.mdp.value==="")){
        alert("Error! Veuillez SVP renseignez le(s) champ(s) manquant(s)!");
    }else {
        var url = new URLSearchParams();
        url.append("login", this.log.value)
        url.append("password", this.mdp.value)

        axios.get("http://localhost:8080/Twister//user/login?" + url).then(response => {

            var x = 0
            x = response.data['code']
           // console.log(response.data['CONNEXION REUSSIE']['key'])
            if (typeof  x === "undefined") {
               console.log(response.data['CONNEXION REUSSIE'])
                this.props.changerkey(response.data['CONNEXION REUSSIE'])
               this.props.changerpage("accueil")
            }else {
                alert("Error!" + response.data['Message']);
            }
        });

    }
}



    render() {
        return (
            <div className="global_Login"  style={{
                position: 'absolute', left: '50%', top: '50%',
                transform: 'translate(-50%, -50%)'
            }} >
                <center>
                <div className="containerConnexion">
                    <h1 className="text-info" style={{fontFamily:'Baloo Chettan'}}>
                        Bienvenue
                    </h1>

                    <form className="w-100 p-3">
    <div className="form-group">
        <div className="row">

                            <input className="form-control form-control-lg" type="text" ref={username => this.log=username} placeholder="Login" required autoFocus/>
            </div>
<br/>
            <div className="row">
                            <input className="form-control form-control-lg" type="password" ref={pwd => this.mdp =pwd} placeholder="PassWord" required autoFocus/>
            </div>
<br/>


                            <div className="col" style={{
                                position: 'absolute', left: '37%',

                            }}>
                                <input className="btn btn-info" type="submit" value="Login" onClick={()=> this.connexion()}/>

                            </div>



                                <div className="row"> <a  onClick={()=> this.props.changerpage("inscription")} href="#"> S'inscrire.</a></div>

                        </div>



                    </form>
                </div>
                </center>
            </div>



    );
    }

}

export default Login;