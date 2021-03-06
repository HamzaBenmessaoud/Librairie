import React, { Component } from 'react';  
import { Button, Card, CardFooter, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';  
  
class Reg extends Component {  
  
  constructor() {  
    super();  
  
    this.state = {  
      Name: '',   
      Email: '',  
      Password: '',  
      Avatar: ''  
    }  
  
     
    this.Email = this.Email.bind(this);  
    this.Password = this.Password.bind(this);  
    this.Name = this.Name.bind(this);  
    this.Password = this.Password.bind(this);  
    this.Avatar = this.Avatar.bind(this);  
    this.register = this.register.bind(this);  
  }  
  
  
  
  Email(event) {  
    this.setState({ Email: event.target.value })  
  }  
  
  Avatar(event) {  
    this.setState({ Avatar: event.target.value })  
  }  
  
  Password(event) {  
    this.setState({ Password: event.target.value })  
  }   
  Name(event) {  
    this.setState({ Name: event.target.value })  
  }  
  
  register(event) {  
  
    fetch('http://localhost:3001/library/user/add/', {  
      method: 'post',  
      body: JSON.stringify({  
  
  
        name: this.state.Name,  
        password: this.state.Password,  
        email: this.state.Email,   
        avatar: this.state.Avatar  
      })  
    }).then((Response) => Response.json())  
      .then((Result) => {  
        if (Result.Status == 'Success')  
                this.props.history.push("/Dashboard");  
        else  
          alert('Sorrrrrry !!!! Un-authenticated User !!!!!')  
      })  
  }  
  
  render() {  
  
    return (  
      <div className="app flex-row align-items-center">  
        <Container>  
          <Row className="justify-content-center" align="center">  
            <Col md="9" lg="7" xl="6">  
              <Card className="mx-4">  
                <CardBody className="p-4">  
                  <Form>  
                    <div class="row" className="mb-2 pageheading">  
                      <div class="col-sm-12 btn btn-primary">  
                        Sign Up  
                        </div>  
                    </div>  
                    <InputGroup className="mb-3">  
                      <Input type="text"  onChange={this.Email} placeholder="Enter Email" />  
                    </InputGroup>  
                    <InputGroup className="mb-3">  
                      <Input type="password"  onChange={this.Password} placeholder="Enter Password" />  
                    </InputGroup>  
                    <InputGroup className="mb-4">  
                      <Input type="text"  onChange={this.Name} placeholder="Enter Name" />  
                    </InputGroup>  
                    <InputGroup className="mb-4">  
                      <Input type="text"  onChange={this.Avatar} placeholder="Enter Url for Avatar" />  
                    </InputGroup>  
                    <Button  onClick={this.register}  color="success" block>Create Account</Button>  
                  </Form>  
                </CardBody>  
              </Card>  
            </Col>  
          </Row>  
        </Container>  
      </div>  
    );  
  }  
}  
  
export default Reg; 