import React, { Component } from 'react';  
import './App.css';  
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
  class Dashboard extends Component {  

    Consult(event) {  
        debugger;  
        fetch('http://localhost:3001/Api/login/Login', {  
            method: 'post',  
            headers: {  
                'Accept': 'application/json',  
                'Content-Type': 'application/json'  
            },  
            body: JSON.stringify({  
                Email: this.state.Email,  
                Password: this.state.Password  
            })  
        }).then((Response) => Response.json())  
            .then((result) => {  
                console.log(result);  
                if (result.Status == 'Invalid')  
                    alert('Invalid User');  
                else  
                    this.props.history.push("/Dashboard");  
            })  
    }
    render() {  
  
        return (  
            <Form>
                toto
            </Form>
            
        );  
    } 
    
}  
  
export default Dashboard;  