import React, { Component } from 'react';
import axios from 'axios'
export default class Friend extends Component{
    constructor(props){
        super(props)

        this.state={
            listeamis:[],


        }
        this.amis=this.amis.bind(this);
        this.supp=this.supp.bind(this);
        this.listeramis=this.listeramis.bind(this);
        this.f=this.f.bind(this);
    }
    amis(reponse){

        var nouv=[]
        this.setState({
            listeamis:nouv
        })
        nouv=nouv.concat(reponse["amis"])
        console.log(nouv)

       if (typeof  nouv != "undefined") {
       nouv.map(x=>

           this.setState({ listeamis:this.state.listeamis.concat(x)})
        )


        }


    }
    listeramis(){
        var url = new URLSearchParams();
        url.append("key", this.props.keySession)
        url.append("id", this.props.id)

        axios.get("http://localhost:8080/Twister//friend/list?" + url).then(response => {
            var x = 0
            x = response.data

            this.amis(x)

        });

    }
    supp(id){

        var url = new URLSearchParams();
        url.append("key", this.props.keySession)
        url.append("id", id)

        axios.get("http://localhost:8080/Twister//friend/remove?" + url).then(response => {
            if(response.data["SUPRESSION AMI REUSSI"]===1){

                alert("Amis Supprimé")

            }else{
                alert("Erreur Veuillez Reessayer")
            }

        });

    }


    componentDidMount() {
        var url = new URLSearchParams();
        url.append("key", this.props.keySession)
        url.append("id", this.props.id)

        axios.get("http://localhost:8080/Twister//friend/list?" + url).then(response => {
            var x = 0
            x = response.data

            this.amis(x)

        });

    }
    f(id){
        this.props.userid(id)
        this.props.changerpage("user")


    }

    render(){
        return ( 
            <div>
                <div className="col-8" style={{background:"white"}}>
                {console.log('friend')}
                <h2 className=" ">Vos amis </h2>
                    <div className="float-right">Vous avez {this.state.listeamis.length} Ami(s)</div>
                <ul className="list-group list-group-flush">
                    {
                        this.state.listeamis.map((m,index)=>

                            <div className="list-group-item" id={index}>

                                <div className="float-left"><h4 onClick={()=>this.f(m['iduser'])}>{m['login']}</h4></div><br/>
                                <div className="float-right"> <button type="button" className="btn btn-danger" onClick={()=> this.supp(m['iduser'])}> X</button> </div>
                            <div className="float-none"><small>{m['nom']} {m['prenom']}</small></div>
<div></div>
                            </div>

                        )



                    }
                </ul>
            </div>

        </div>
        )
    }

}