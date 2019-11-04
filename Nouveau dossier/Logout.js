import React, { Component } from 'react';


class Logout extends Component{
    constructor (props){
        super(props);

    }
    render(){
        return(
            <div className='bjsdhn'>
                <input type='submit' className="btn btn-info" value="Deconnexion" onClick={()=> this.props.setLogout()}/>

            </div>


        )
    }



}
export default Logout;