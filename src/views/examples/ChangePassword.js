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

const ChangePassword = () => {
  const changePass = (e) => {
    e.preventDefault()
    if(e.target.new_password.value==e.target.confirm_password.value){
      http.get(`/usuario?email=${e.target.input_email.value}`)
      .then((response) => {
        if (response.data.length > 0) {
          const nemPassword = response.data[0]
          nemPassword.password = e.target.new_password.value
          UsuarioDataService.update(nemPassword.id,nemPassword)
          .then (() => {
            alert("Senha alterada com sucesso!")
          }).catch((error) => console.error(error))

        }else (alert("Email inválido!"))
      }).catch((error) => console.error(error))
   }else (alert("Senha inválida!"))
  }

  return (
    <>
      <Col lg="5" md="7">
        <Card className="bg-secondary shadow border-0">
          
          <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <h3>Enter your new password</h3>
            </div>
            <Form role="form" onSubmit={(e) => {changePass(e)}}>
            <FormGroup className="mb-3">
                    <InputGroup className="input-group-alternative">
                      <InputGroupAddon addonType="prepend">
                        <InputGroupText>
                          <i className="ni ni-ussername-83" />
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
                      <i className="ni ni-newpassword-83" />
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Nem Password"
                    name="new_password"
                    type="confirm password"
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
                    type="confirm password"
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
