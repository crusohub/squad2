import React from "react";



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
  Col,
} from "reactstrap";


const ForgotPassword = () => {
  return (
   <>
      <Col lg="5" md="7">
      <Card className="bg-secondary shadow border-0">
          <CardHeader className="bg-transparent pb-5">
            <div className="text-muted text-center mt-2 mb-3">
              <h1>Recupere sua senha</h1>
            </div>
           <CardBody className="px-lg-5 py-lg-5">
            <div className="text-center text-muted mb-4">
              <h3>Informe o seu email abaixo</h3>
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
                  />
                </InputGroup>
              </FormGroup>
              <div className="text-center">
                <Button className="my-4" color="primary" type="button">
                  Enviar
                </Button>
              </div>

            </Form>
        </CardBody>
        </CardHeader>
        </Card>
         </Col>
         </>
  );
};

    <div class="msgEnviadoSucesso" id="modalExemplo" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
   <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLabel">Senha enviada com sucesso!</h5>
       <button type="button" class="close" data-dismiss="modal" aria-label="Fechar">
      <span aria-hidden="true">&times;</span>
    </button>
    </div>
      <div class="modal-body">
    ...
    </div>
     </div>
    </div>
      </div>

export default ForgotPassword;
