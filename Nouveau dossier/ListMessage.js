import React, { Component } from 'react';
import Message from './Message';
import axios from 'axios';
import Profil from "./Accueil";

class ListMessage extends Component{
    constructor (props){
        super(props);
this.state={
    listemessages:[],
    add:false,
    reversed:[]

}

        this.addTweet=this.addTweet.bind(this);
        this.message= this.message.bind(this);
        this.listermessage= this.listermessage.bind(this);
        this.supp=this.supp.bind(this);


    }
    addTweet(txt) {
        if (txt===""){
            alert("Veuillez inserer un message")
        }else {
            var url = new URLSearchParams();
            url.append("key", this.props.keySession)
            url.append("texte", txt)

            axios.get("http://localhost:8080/Twister//message/add?" + url).then(response => {
                var x = 0
                x = response.data['OK']
                // console.log(response.data['CONNEXION REUSSIE']['key'])
                if (typeof x === "undefined") {
                    alert("Error! Message Non ajouté");
                } else {
                    this.message(response)
                }

            });

        }
    }
    message(reponse) {

        console.log("Fonction Message")
        var x = 0
        x = reponse.data


        if (typeof x[""] !== "undefined"){
            x[""].map( m =>
            {   console.log(m)

                this.setState({
                    listemessages: this.state.listemessages.concat(m),
                    add:!this.state.add,
                })


            })
         }
        if (typeof x["OK"] !== "undefined") {
            var nouv=[]
            nouv=nouv.concat(x["OK"])
            nouv=nouv.concat(this.state.listemessages)

            this.setState({
                listemessages: nouv,
                add:!this.state.add,
            })

        }


    }
    componentDidMount() {
    var url = new URLSearchParams();
    url.append("key", this.props.keySession)
    url.append("id_user", this.props.id)
//console.log(url)
    axios.get("http://localhost:8080/Twister//message/list?" + url).then(response => {
        //console.log(response+" didmont")
        this.message(response)

    });

}
    listermessage(){

        var url = new URLSearchParams();
        url.append("key", this.props.keySession)
        url.append("id_user", this.props.id)
           // console.log("ici"+url)
        axios.get("http://localhost:8080/Twister//message/list?" + url).then(response => {
           // console.log(response+" lister")
            this.message(response)

        });

    }
    supp(id){

    var url = new URLSearchParams();
    url.append("key", this.props.keySession)
    url.append("id_texte", id)

    axios.get("http://localhost:8080/Twister//message/delete?" + url).then(response => {
        console.log(response.data["Resultat Suppression"])

        console.log(typeof response.data)
    if(typeof response.data["Message non trouvé"] ==="undefined"){

        alert("Message Supprimé")


    }else{
        alert("Erreur Veuillez Reessayer")
    }

    });


}

    render(){
        return(<div>
            {this.props.id === 0 ? null :

                <div className="float-right">Vous avez {this.state.listemessages.length} message(s)</div>

            }

            <Message addTweet={this.addTweet}/>

            {
                this.state.listemessages.map((x) =>
                    <div className="" style={{position: 'relative'}}>
                        <div className="list-group-item" id={x['idMessage']}>
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">{x['author']
                                }</h5>
                                <small>{x['Heure']
                                }</small>


                                {this.props.id === 0 ? null :
                                    <div className="float-right">
                                        <button type="button" className="btn btn-danger" onClick={()=> this.supp(x['idMessage'])}> X</button>
                                    </div>

                                }
                            </div>
                            <p className="mb-1">{x['message']
                            }</p>

                        </div>
                    </div>
                )

            }

        </div>)
}

}
export default ListMessage;