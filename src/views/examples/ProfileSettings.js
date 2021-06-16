
import React from "react";

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

const Settings = () => {
    
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
                                    placeholder="Re-enter the New Password"
                                    type="password"
                                    autoComplete="new-password"
                                />
                            </InputGroup>
                        </FormGroup>
                        <div className="text-center">
                            <Button className="my-4" color="danger" type="button">
                                Cancel
                            </Button>
                            <Button className="my-4" color="primary" type="button">
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