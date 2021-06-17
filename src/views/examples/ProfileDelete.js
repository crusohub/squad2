
import React, { useState, useContext } from "react";
import UsuarioDataService from "services/UsuarioDataService";

import { UsuarioLogadoContext } from "../../context/UsuarioLogadoContext";

// reactstrap components
import {
    Button,
    Card,
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

import { Link } from "react-router-dom";

const ProfileDelete = (props) => {

    const initialState = {
        username: "",
        password: ""
    }

    const { usuarioLogado, setUsuarioLogado } = useContext(UsuarioLogadoContext)

    const [dadosLogado, setDadosLogado] = useState(initialState)

    const handleInputChange = event => {
        const {name, value} = event.target;
        setDadosLogado({...dadosLogado, [name]: value})
    }

    const deleteAccount = () => {
        if(usuarioLogado.username == dadosLogado.username && usuarioLogado.password == dadosLogado.password){
                UsuarioDataService.remove(usuarioLogado.id)
                    .then(response => {
                        alert("Usuario deletado com sucesso");
                        props.history.push("/auth/login")
                    })
                    .catch(e => {
                        console.log(e)
                        alert("Dados não confirmam")})
            }
    }
    
    return(
        <Col lg="5" md="7">
            <Card className="bg-secondary shadow border-0">
                <CardBody className="px-lg-5 py-lg-5">
                    <Form role="form">
                        <FormGroup>
                            <InputGroup className="input-group-alternative mb-3">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                    <i className="ni ni-email-83" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    placeholder="Username"
                                    type="text"
                                    name="username"
                                    value={dadosLogado.username}
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
                                    name="password"
                                    value={dadosLogado.password}
                                    onChange={handleInputChange}
                                />
                            </InputGroup>
                        </FormGroup>
                        <div className="text-center">
                            <Link to={"/admin/user-profile"} className="mr-3">
                                <Button className="my-4" color="danger" type="button">
                                    Cancel
                                </Button>
                            </Link>
                            <Button 
                            className="my-4" 
                            color="primary" 
                            type="button"
                            onClick={() => {console.log(usuarioLogado)}}>
                                Delete user
                            </Button>
                        </div>
                    </Form>
                </CardBody>
            </Card>
            <Row className="mt-3">
                <Col xs="6">
                    <a
                        className="text-light"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                    >
                    <small>Forgot password?</small>
                    </a>
                </Col>
                <Col className="text-right" xs="6">
                    <a
                        className="text-light"
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                    >
                        <small>Create new account</small>
                    </a>
                </Col>
            </Row>
        </Col>
    );
};
export default ProfileDelete;