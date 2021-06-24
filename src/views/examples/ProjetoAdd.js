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
import React, { useState } from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import HeaderProject from "components/Headers/HeaderProject";
import ProjetoDataService from "services/ProjetoDataService";
import HeaderGenerico from "../../components/Headers/HeaderGenerico"
const ProjetoAdd = () => {
  const [random, setRandom] = useState(1)
  const baseProjeto={
    id: null,
    image: "",
    projectname: "",
    status: "",
    budget: "",
    completed:""
  }
  const [novoProjeto,setNovoProjeto] = useState(baseProjeto)
  var inputImg = document.getElementById("input-imagem")
  var inputName = document.getElementById("input-projectname")
  var inputStatus = document.getElementById("input-status")
  var inputDespesas = document.getElementById("input-despesas")
  var inputPercentual = document.getElementById("input-percentual")
  const handleInputChange = (event) => {
    const { name, value } = event.target; // bota a propriedade em name e o valor em value
    setNovoProjeto({ ...novoProjeto, [name]: value }); //nesse caso ele vai acessar remedio e name vai virar uma propriedade do objeto e value é o oq o usario quer adicionar
  };
  const NewProject=()=>{
    if (novoProjeto.projectname!=='' && novoProjeto.status!=='' && novoProjeto.budget!=='' && novoProjeto.completed!=='') {
      ProjetoDataService.create(novoProjeto).then((Response)=>{
        reinicia()
      })
    }
  }
  const reinicia=()=>{
    setNovoProjeto(baseProjeto)
    inputImg.value=""
    inputName.value=""
    inputStatus.value=""
    inputDespesas.value=""
    inputPercentual.value=""
  }
  const aleatorio=()=>{
    let aleatorio = Math.floor((Math.random() * 1000) + 0);
    setNovoProjeto({ ...novoProjeto, ["image"]:`https://picsum.photos/id/${aleatorio}/200` });
    document.getElementById("input-imagem").value=`https://picsum.photos/id/${aleatorio}/200`
  }
  return (
    <>
      <HeaderGenerico imagemFundo={require(`../../assets/img/theme/team-${random}-800x800.jpg`).default}
            titulo={`New Project:`}
            description={"  This is  a new project page. Below you can create new projects "}
      />
      {/* Page content */}
      <Container className="mt--12" fluid>
        <Row>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="justify-content-center">
                  <Col className="order-lg-2" lg="3">
                    <div className="card-profile-image">
                      <a href="#pablo" onClick={(e) => e.preventDefault()}>
                        {novoProjeto.image!==""?                    
                          <img
                            alt="..."
                            className="rounded-circle"
                            src={novoProjeto.image}
                            />
                        :
                          <img className="rounded-circle" src="https://picsum.photos/id/1/200"/>
                        }
                      </a>
                    </div>
                  </Col>
                </Row>
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Projeto</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Link to={"/admin/projeto"} style={{marginRight:20}}> 
                      <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => NewProject()}
                      size="xm">
                      Pesquisar
                      </Button>
                    </Link>
                    
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => NewProject()}
                      size="xm"
                    >
                      Criar
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    Informações sobre o projeto
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-projectname"
                          >
                            Nome do projeto
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={novoProjeto.projectname}
                            id="input-projectname"
                            name="projectname"
                            placeholder="Nome"
                            type="text"
                            onBlur={handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-status"
                          >
                            Status
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-status"
                            placeholder=""
                            defaultValue={novoProjeto.status}
                            name="status"
                            type="select"
                            onBlur={handleInputChange}
                          >          
                          <option>Pending</option>
                          <option>Completed</option>
                          <option>Delayed</option>
                          <option>On schedule</option>
                          </Input>
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                        <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-imagem"
                          >
                            Imagem
                          </label>
                          <Input
                            className="form-control-alternative"
                            name="image"
                            id="input-imagem"
                            placeholder="URL"
                            type="text"
                            onBlur={handleInputChange}
                          />
                        </FormGroup>
                        </Col>
                        <Col lg="2">
                        <Button
                        color="primary"
                        href="#pablo"
                        onClick={(e) => aleatorio()}
                        style={{marginTop: 32 }}
                        >
                          RANDOM 
                        </Button>
                      </Col>                 

                      <Col lg="3">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-despesas"
                          >
                            Despesas
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={novoProjeto.budget}
                            name="budget"
                            id="input-despesas"
                            placeholder="Despesas"
                            type="text"
                            onBlur={handleInputChange}
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="3">                        
                          <FormGroup>
                            <label
                              className="form-control-label"
                              htmlFor="input-percentual"
                            >
                              Percentual Completo
                            </label>
                            <Input
                              className="form-control-alternative"
                              name="completed"
                              id="input-percentual"
                              defaultValue={novoProjeto.percentual}
                              placeholder="Percentual"
                              type="text"
                              onBlur={handleInputChange}
                            />
                          </FormGroup>
                        
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                </Form>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProjetoAdd;
