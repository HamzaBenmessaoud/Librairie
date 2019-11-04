import React, { Component } from 'react';


class Message extends Component{
    constructor (props){
        super(props);


    }
    f(){
        this.props.addTweet(this.txt.value)
        document.getElementById("exampleFormControlTextarea1").value="";

    }
    render(){
        return(
            <div className="form-group" >
                <textarea className="form-control" id="exampleFormControlTextarea1" name="exampleFormControlTextarea1"
                                              placeholder="Nouveau message? Ecrivez-le" rows="3" cols="150" ref={texte => this.txt =texte}></textarea>

                <button className="btn btn-info" type="submit" style={{position:'auto', left: '89%'}} onClick={()=>this.f()}>Poster !</button>


            </div>


        )
    }



}
export default Message;