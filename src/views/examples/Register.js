/*!

=========================================================
* Argon Dashboard React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { registerPlugin } from "axe-core";
import { AlertaLoginContext } from "context/UsuarioLogadoContext";
import React, { useState } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

import userDataService from "../../services/UsuarioDataService";

const Register = (props) => {

  //VALOR DE STATE PADRAO
  const initialRegisterState = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    city: "",
    country: "",
    postalcode: "",
    about: "",
    password: " ",
  }

  const [register, setRegister] = useState(initialRegisterState);

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setRegister({...register,[name]: value })
  }

  const createUser = () => {
    let data = {
      username: register.username,
      email: register.email,
      password: register.password      
    }
    
    userDataService.login(data.email)
      .then(response => {
        if (response.data[0] !== undefined){
          alert("Email address already exists")
        }else{
            userDataService.create(data)
              .then(response => {
                alert("Usuário criado com sucesso");
                props.history.push("/auth/login")
              })
              .catch(e => {console.log(e)})
          }
      })
      .catch(e => {console.log(e)       
      })
  }

  return (
    <>
      <Col lg="6" md="8">
        <Card className="bg-secondary shadow border-0">
          <CardBody className="px-lg-5 py-lg-5">
            <Form role="form">
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-hat-3" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input 
                  placeholder="Name" 
                  type="text" 
                  name="username"
                  value={register.username}
                  // defaultValue=""
                  onChange={handleInputChange}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative mb-3">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    name="email"
                    value={register.email}
                    onChange={handleInputChange}
                  />
                </InputGroup>
              </FormGroup>
              <FormGroup>
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Password"
                    type="password"
                    autoComplete="new-password"
                    name="password"
                    value={register.password}
                    onChange={handleInputChange}
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="mt-4" color="primary" type="button" onClick={createUser}>
                  Create account
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default Register;