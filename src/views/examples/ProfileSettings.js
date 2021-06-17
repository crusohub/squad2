
import React, { useContext, useState, useEffect } from "react";
import UsuarioDataService from"services/UsuarioDataService"
import {UsuarioLogadoContext} from "context/UsuarioLogadoContext"
import { Link } from "react-router-dom";

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

const Settings = (props) => {
    // const [currentPassword, setCurrentPassword] = useState("")
    // const [newPassword, setNewPassword] = useState("")
    const [user, setUser] =useContext(UsuarioLogadoContext)

    const getCurrentPassword = (id) => {
        UsuarioDataService.get(id)
        .then(response => {
            setUser(response.data)
        })
        .catch(e => {
            console.log(e);
        })
    }

    // const handleChange = (e) => {
    //     const { name, value } = e.target;
    //     setUser({ ...user, [name]: value })
    // }
    
    const updatePassword = (id, psw) => {
        UsuarioDataService.update(id, psw)
        .then(response => {
            setUser(response.data)
        })
        .catch(e => {
            console.log(e);
        })
    }

    useEffect(() => {
        getCurrentPassword(75);
    },[]);

    const resetPassword = () => {
        const contexCurrentPassword = user.password
        const inputCurrentPassword = (document.querySelector("#currentPassword").value)
        const newPassword = (document.querySelector("#newPasswod").value)
        const reNewPasswod = (document.querySelector("#reNewPasswod").value)

        if(inputCurrentPassword == ""){
            alert("Insira o password atual!")
            return false
        }else if(inputCurrentPassword !== contexCurrentPassword){
            alert("O password inserido não é o password atual.\nPor favor insira o password atual!")
            return false
        }

        if(newPassword == ""){
            alert("Insira o seu novo password!")
            return false
        }

        if(newPassword !== reNewPasswod){
            alert("Os password tem que ser iguais em:\nNew Password e Re-Entre New Password")
            return false
        }

        updatePassword(user.id, user)
    }

    return(
        <Col lg="5" md="7">
            <Card className="bg-secondary shadow border-0">
                <CardBody className="px-lg-5 py-lg-5">
                    <Form role="form">
                        <FormGroup className="mb-3">
                            <InputGroup className="input-group-alternative">
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>
                                    <i className="ni ni-lock-circle-open" />
                                    </InputGroupText>
                                </InputGroupAddon>
                                <Input
                                    id="currentPassword"
                                    placeholder="Current Password"
                                    type="password"
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
                                    id="newPasswod"
                                    placeholder="New Password"
                                    type="password"
                                    autoComplete="new-password"
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
                                    id="reNewPasswod"
                                    placeholder="Re-enter the New Password"
                                    type="password"
                                    autoComplete="new-password"
                                />
                            </InputGroup>
                        </FormGroup>
                        <div className="text-center">
                            <Button className="my-4" color="danger" type="button">
                                <Link to={"/admin/user-profile"}
                                color = "white">
                                    Cancel
                                </Link>
                            </Button>
                            <Button className="my-4" color="primary" type="button" onClick = {() => resetPassword()} >
                                Reset Password
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
export default Settings;