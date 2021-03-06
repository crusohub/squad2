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
import React, { useState, useContext } from "react";
import UsuarioDataService from "services/UsuarioDataService";
import { UsuarioLogadoContext,AlertaLoginContext } from "context/UsuarioLogadoContext";
import { Link } from 'react-router-dom'



// reactstrap components
import {
  Alert,
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

const Login = (props) => {

  const [usuarioLogado, setUsuarioLogado] = useContext(UsuarioLogadoContext)
  const [alertaLogin, setAlertaLogin] = useContext(AlertaLoginContext)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  
  const login = () => {
    console.log(username)
    UsuarioDataService.login(username, password).then(
      response => response.data).then(
        data => {
              console.log(data[0])
              
              if(data[0] != undefined && data[0].password === password){
                autenticaUsuario(data[0])
              }else{
                alert("Falha na autenticação!")
              }
        })
  }
  const handleEnter=(e) => {
    if(e.keyCode===13)
      login()
  }
  const handleusername = (e) => {
    setUsername(e.target.value)
  }
  const handlepassword = (e) => {
    setPassword(e.target.value)
  }
  function autenticaUsuario(usuario) {
    if (usuario != null) {
      console.log(usuario)
      setUsuarioLogado(usuario)
      if (!usuario.firstname) {
        props.history.push('/admin/user-profile')
        return
      }
      props.history.push('/admin/index')
    }else{
      alert("Falha na autenticação!")
    }
  }
  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          <Alert className="font-weight-bold m-2" color="danger" isOpen={alertaLogin}>Faça o login!</Alert>
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Sign in with credentials</small>
            </div>
            <Form role="form">
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-email-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email"
                    type="email"
                    autoComplete="new-email"
                    onChange={handleusername}
                    onKeyUp={handleEnter}
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
                    onChange={handlepassword}
                    onKeyUp={handleEnter}
                  />
                </InputGroup>
              </FormGroup>
              <div className="custom-control custom-control-alternative custom-checkbox">
                <input
                  className="custom-control-input"
                  id=" customCheckLogin"
                  type="checkbox"
                />
                <label
                  className="custom-control-label"
                  htmlFor=" customCheckLogin"
                >
                  <span className="text-muted">Remember me</span>
                </label>
              </div>
              <div className="text-center">
                <Button onClick={login} className="my-4" color="primary" type="button">
                  Sign in
               </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
        <Row className="mt-3">
          
        <Col xs="6">
            <a
              className="text-light"
              href="forgotpassword"
              onClick={(e) => props.history.push("/auth/forgotpassword/")}
            >
              <small>Forgot Password?</small>
            </a>
          </Col>
         
          <Col className="text-right" xs="6">
            <a
              className="text-light"
              href="register"
              onClick={(e) => props.history.push("auth/register")}
            >
              <small>Create new account</small>
            </a>
          </Col>
        </Row>
      </Col>
    </>
  );
};

export default Login;
