import React from "react";
import http from "../../http-common";

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
  Col,
} from "reactstrap";
import UsuarioDataService from "services/UsuarioDataService";

const ChangePassword = (props) => {
  const changePass = (e) => {
    e.preventDefault()
    if(e.target.new_password.value==e.target.confirm_password.value){
      http.get(`/usuario?email=${e.target.input_email.value}`)
      .then((response) => {
        if (response.data.length > 0) {
          const newPassword = response.data[0]
          newPassword.password = e.target.new_password.value
          UsuarioDataService.update(newPassword.id,newPassword)
          .then (() => {
            alert("Password changed successfully!")
            props.history.push("/auth/login")
          }).catch((error) => console.error(error))
         
          

        }else (alert("Invalid email!"))
      }).catch((error) => console.error(error))
   }else (alert("Invalid password!"))
  }

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <small>Enter your email and your new password</small>
            </div>
            <Form role="form" onSubmit={(e) => {changePass(e)}}>
            <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-email-83" />
                        </InputGroupText>
                      </InputGroupAddon>
                      <Input
                        name="input_email"
                        placeholder="Email"
                        type="email"
                        autoComplete="new-email"
                      />
                    </InputGroup>
                  </FormGroup>
              <FormGroup className="mb-3">
                <InputGroup className="input-group-alternative">
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="ni ni-lock-circle-open" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="New Password"
                    name="new_password"
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
                    placeholder="Confirm Password"
                    name="confirm_password"
                    type="password"
                    autoComplete="new-confirm password"
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="my-4" color="primary" >
                  To Salve
                </Button>
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default ChangePassword;
