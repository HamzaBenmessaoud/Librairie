import React, { Component } from 'react';
import axios from 'axios'


export default class User extends Component{
    constructor(props){
        super(props)

        this.state={
            listeamis:[],
            add:true,
            listemessages:[]

        }
        this.amis=this.amis.bind(this);
        this.message=this.message.bind(this)

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

    message() {
        var url = new URLSearchParams();
        url.append("key", this.props.keySession)
        url.append("id_user", this.props.id)
        axios.get("http://localhost:8080/Twister//message/list?" + url).then(response => {
            console.log(response+" lister")
            console.log("Fonction Message")
            var x = 0
            x = response.data


            if (typeof x[""] !== "undefined"){
                x[""].map( m =>
                {   console.log(m)

                    this.setState({
                        listemessages: this.state.listemessages.concat(m),
                        add:!this.state.add,
                    })


                })
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
        this.message()


    }
    render(){
        return (
            <div className="container">
                <div className="col-4" style={{background:"white"}}>
                    {console.log('friend')}
                    <h2 className=" "> </h2>

                    <ul className="list-group list-group-flush">
                        {
                            this.state.listeamis.map((m,index)=>

                                <div className="list-group-item" id={index}>

                                    <div className="float-left"><h4>{m['login']}</h4></div><br/>
                                     <div className="float-none"><small>{m['nom']} {m['prenom']}</small></div>

                                </div>

                            )



                        }
                    </ul>
                </div>
                <div className="col-8" style={{background:"lightgrey"}}>
                    {console.log(this.state.listemessages.length)}{
                        this.state.listemessages.map((x) =>
                            <div className="" style={{position: 'relative'}}>
                                <div className="list-group-item" id={x['idMessage']}>
                                    <div className="d-flex w-100 justify-content-between">
                                        <h5 className="mb-1">{x['author']
                                        }</h5>
                                        <small>{x['Heure']
                                        }</small>

                                    </div>
                                    <p className="mb-1">{x['message']
                                    }</p>

                                </div>
                            </div>
                        )

                    }




                </div>

            </div>
        )
    }

}