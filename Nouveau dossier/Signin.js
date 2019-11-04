import React, { Component } from 'react';
import axios from 'axios'


class Signin extends Component{
    constructor(props){
        super(props);
        this.validateEmail= this.validateEmail.bind(this);
        this.inscription= this.inscription.bind(this);
        this.response_singin= this.response_singin.bind(this);
    }
    validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    inscription() {
    if ((this.nom.value === "") || (this.prenom.value === "") || (this.login.value === "") || (this.email.value === "") || (this.password.value === "")) {
        alert("Error! Veuillez SVP renseignez le(s) champ(s) manquant(s)!");
    } else {

if(this.validateEmail(this.email.value)){
    const url = new URLSearchParams();
    url.append("nom", this.nom.value);
    url.append('prenom', this.prenom.value);
    url.append('login', this.login.value);
    url.append('email', this.email.value);
    url.append('password', this.password.value);


    axios.get("http://localhost:8080/Twister//user/create?" + url).then(response => {


        this.response_singin(response)
    });

}else{
    alert("Error! Veuillez vérifier votre email!");
}
    }
    }

    response_singin(response){
        if (Object.keys(response.data).length===0){
            alert("Bienvenu! Vous pouvez maintenant rejoindre Twister");
            this.props.changerpage("connexion")

        } else {
            alert("Error!" + response.data['Message'] + " Veuillez SVP renseignez à nouveau les champs");

          {
                this.props.changerpage("inscription")
            }
        }
        }



    render(){
        return(
            <div className="container">
                <div >
                    <h1 style={{fontFamily:'Baloo Chettan'}} className="text-info">Inscription</h1>
                    <p style={{fontFamily:'Baloo Chettan'}} className="text-info">Veuillez remplir les champs ci-dessous:</p>
                    <form>
                        <div className="form-row">

                            <div className="form-group col-md-6">
                                <label htmlFor="inlineFormInput">Nom</label>
                                <input type="text" ref={nomuser => this.nom = nomuser} className="form-control"  placeholder="Nom" required autoFocus/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inlineFormInput">Prénom</label>
                                <input type="text" ref={prenomuser => this.prenom = prenomuser} className="form-control"  placeholder="Prenom" required autoFocus/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" ref={emailuser => this.email = emailuser}  className="form-control"  placeholder="abcd@exemple.com" required autoFocus/>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label htmlFor="inputEmail4">Pseudonyme</label>
                                <input type="text" ref={loginuser => this.login = loginuser}  className="form-control"  placeholder="Pseudonyme" required autoFocus/>
                            </div>
                            <div className="form-group col-md-6">
                                <label htmlFor="inputPassword4">Password</label>
                                <input type="password" ref={mdp => this.password = mdp}  className="form-control"  placeholder="Password" required autoFocus/>
                            </div>
                        </div>
                    </form>
                </div>

                <div >
                    <input type="submit" className="btn btn-info" value="Sign in" onClick={(event)=> this.inscription()}/>
                </div>
                </div>



        )
    }


}
export default Signin;