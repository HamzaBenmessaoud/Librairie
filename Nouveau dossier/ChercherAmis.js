import React, { Component } from 'react';
import axios from 'axios'
export default class ChercherAmis extends Component{
    constructor(props){
        super(props)

        this.state={
            searchamis:[],


        }
       this.addFriend= this.addFriend.bind(this)


    }





    componentDidMount() {
        var url = new URLSearchParams();
        url.append("key", this.props.keySession)
        url.append("chaine", this.props.chaine)

        axios.get("http://localhost:8080/Twister//friend/search?" + url).then(response => {
            var x = 0
            x = response.data["res"]
            x.map(m=>

                this.setState({ searchamis:this.state.searchamis.concat(m)})
            )

        });

    }

    addFriend(id){
         var url = new URLSearchParams();
         url.append("key",this.props.keySession)
         url.append("id", id)
        axios.get("http://localhost:8080/Twister//friend/add?"+url).then(response =>{
            if(typeof  response.data['code']==="undefined"){
                alert("Ami Ajouté Avec succées")
            }else{
                alert("code "+response.data['code']+":"+response.data['Message'])
            }

        })

    }

    render(){
        return (
            <div>
                <div className="col-8" style={{background:"white"}}>
                    {console.log('friend')}
                    <h2 className=" ">{this.state.searchamis.length} Resultat(s) Trouvés </h2>

                    <ul className="list-group list-group-flush">
                        {
                            this.state.searchamis.map((m,index)=>

                                <div className="list-group-item" id={index}>

                                    <div className="float-left"><h4>{m['login']}</h4></div><br/>
                                    <div className="float-right"> <button type="button" className="btn btn-success" onClick={()=> this.addFriend(m['iduser'])} > ADD</button> </div>
                                    <div className="float-none"><small>{m['nom']} {m['prenom']}</small></div>

                                </div>

                            )



                        }
                    </ul>
                </div>

            </div>
        )
    }

}