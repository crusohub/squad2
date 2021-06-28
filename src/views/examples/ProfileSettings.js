
import React, { useContext, useState, useEffect } from "react";
import UsuarioDataService from "services/UsuarioDataService"
import { UsuarioLogadoContext } from "context/UsuarioLogadoContext"
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
    const [user, setUser] = useContext(UsuarioLogadoContext)
    const [inputCurrentPassword, setInputCurrentPassword] = useState("")
    const [newPassword, setNewPassword] = useState("")
    const [reNewPasswod, setReNewPasswod] = useState("")


    const cancel = () => {
        props.history.push("/admin/user-profile")
    }

    const updatePassword = () => {
        console.log(user)
        const data = user
        data.password = newPassword

        UsuarioDataService.update(user.id, data)
            .then(response => {
                setUser(response.data)
                alert("Password Updated!")
                props.history.push("/admin/user-profile")
            })
            .catch(e => {
                console.log(e);
            })
    }

    const handleInputCurrentPassword = (e) => {
        setInputCurrentPassword(e.target.value)
    }
    const handleNewPassword = (e) => {
        setNewPassword(e.target.value)
    }
    const handleReNewPasswod = (e) => {
        setReNewPasswod(e.target.value)
    }
    const resetPassword = () => {
        console.log(user)
        if (inputCurrentPassword === "") {
            alert("Insira o password atual!")
            return false
        } else if (inputCurrentPassword !== user.password) {
            alert("O password inserido não é o password atual.\nPor favor insira o password atual!")
            return false
        }
        if (newPassword === "") {
            alert("Insira o seu novo password!")
            return false
        }
        if (newPassword !== reNewPasswod) {
            alert("Os password tem que ser iguais em:\nNew Password e Re-Entre New Password")
            return false
        }
        if (user.password === newPassword){
            alert("O novo password não pode ser igual ao password atual!")
            return false
        }
        updatePassword()
    }

    // alert("user.password: "+user.password)
    return (
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
                                    onChange={(e) => handleInputCurrentPassword(e)}
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
                                    name="password"
                                    placeholder="New Password"
                                    type="password"
                                    autoComplete="new-password"
                                    onChange={(e) => handleNewPassword(e)}
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
                                    onChange={(e) => handleReNewPasswod(e)}
                                />
                            </InputGroup>
                        </FormGroup>
                        <div className="text-center">
                            <Button className="my-4" color="danger" type="button" onClick={() => cancel()}>
                                Cancel
                            </Button>
                            <Button className="my-4" color="primary" type="button" onClick={() => resetPassword()} >
                                Reset Password
                            </Button>
                        </div>
                    </Form>
                </CardBody>
            </Card>
            {/* <Row className="mt-3">
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
            </Row> */}
        </Col>
    );
};
export default Settings;