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
import React, { useState, useEffect } from "react";

// reactstrap components
import {
  Card,
  CardHeader,
  Container,
  Row,
  Button,
  UncontrolledTooltip,
  Input,
  Col,
  CardBody,
  CardFooter
} from "reactstrap";
// core components
import HeaderProject from "components/Headers/HeaderProject";
import UsuarioDataService from "services/UsuarioDataService";
import ProjetoDataService from "services/ProjetoDataService";
import AssociacaoDataService from "services/AssociacaoDataService";
import { registerPlugin } from "axe-core";
import HeaderGenerico from "../../components/Headers/HeaderGenerico";

const ProjectAssociation = () => {

  const initialProjectAssociationState = {
    projectid: '',
    userid: '',
    projectname: 'Select a project',
    username: 'Select a user'
  };

  const [userValue, setUserValue] = useState('Select a user');
  const [projectValue, setProjectValue] = useState('Select a project');
  const [erros, setErros] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [listUsers, setListUsers] = useState([]);
  const [listProjects, setListProjects] = useState([]);
  const [projectAssociation, setProjectAssociation] = useState(initialProjectAssociationState);
  const [aleatorio, setAleatorio] = useState(1)



  const validarCampos = () => {
    if (projectAssociation.username != 'Select a user' && projectAssociation.projectname != 'Select a project') {
      setErros(false);
      return true;
    } else {
      setErros(true);
      if (projectAssociation.username == 'Select a user' && projectAssociation.projectname != 'Select a project') {
        setErrorMessage("Select a user");
      } else {
        if (projectAssociation.projectname == 'Select a project' && projectAssociation.username != 'Select a user') {
          setErrorMessage("Select a project");
        } else {
          setErrorMessage("Select a user and project");
        };
      };
      return false;
    };
  };

  const handleInputChange = (e) => {
    const {  value } = e.target;
    let id = value.split(":")[0];
    let projectname = value.split(":")[1];
    if(projectname == undefined){
      projectname = "Select a project";
    }
    setProjectAssociation({
      ...projectAssociation, ...{
        "projectid": id,
        "projectname": projectname
      }
    });
  }

  const handleInputUsername = (e) => {
    const { value } = e.target;
    let id = value.split(":")[0];
    let username = value.split(":")[1];
    if(username == undefined){
      username = "Select a user";
    }
    setProjectAssociation({
      ...projectAssociation, ...{
        "userid": id,
        "username": username
      }
    });

  }

  const preencherSelectUsers = () => {
    UsuarioDataService.getAll()
      .then(response => {
        setListUsers(response.data);
      })
      .catch((e) => console.log(e));
  };

  const preencherSelectProjects = () => {
    ProjetoDataService.getAll()
      .then(response => {
        setListProjects(response.data);
      })
      .catch((e) => console.log(e));
  };

  const createProjectAssociation = () => {
    let data = {
      projectid: projectAssociation.projectid,
      userid: projectAssociation.userid,
      projectname: projectAssociation.projectname,
      username: projectAssociation.username
    }
    AssociacaoDataService.create(data)
      .then(response => {
        alert("Associação de projeto criada com sucesso!")
      })
      .catch(e => console.log(e));
  }

  const efetuarLogin = () => {
    if (validarCampos() == true) {
      createProjectAssociation();
    }
  };

  useEffect(() => {
    preencherSelectUsers();
    preencherSelectProjects();

  }, []);

  return (
    <>
      <HeaderGenerico imagemFundo={require(`../../assets/img/theme/team-${aleatorio}-800x800.jpg`).default}
            titulo={`Project Association:`}
            description={"  This is project Association page. Below you can associate a project"}
      />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">User Project Association</h3>
              </CardHeader>

              <CardBody>
                <Row>
                  <Col>
                    {/* Select de projetos */}
                    <label
                      className="form-control-label"
                      htmlFor="currentPassword"
                    >
                      Select a project
                    </label>
                    <Input
                      name = "projectname"
                      type="select"
                      placeholder="Search by project name or status"
                      className="form-control-alternative"
                      onChange={handleInputChange}
                    //value={searchProject}
                    >
                      <option value = {"Select a project"}>Select a project</option>
                      {listProjects.map((data) => (
                        <option id = {data.projectid} value={data.id + ":"+ data.projectname}>{data.projectname}</option>
                      ))}
                    </Input>

                  </Col>
                  <Col>

                    <label
                      className="form-control-label"
                      htmlFor="currentPassword"
                    >
                      Select a user
                    </label>
                    <Input
                      name = "username"
                      type="select"
                      placeholder="Search by username"
                      onChange={handleInputUsername}
                      className="form-control-alternative"
                    >
                      <option>Select a user</option>
                      {listUsers.map((data) => (
                        <option id = {data.userid} value={data.id + ":"+ data.username}>{data.username}</option>
                      ))}
                    </Input>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    {/* Botão de associar projeto */}
                    <Button
                      className="my-4"
                      color="primary"
                      type="button"
                      onClick={efetuarLogin}
                    >
                      Associate project
                    </Button>
                    {/* Div para mostragem de erros */}
                    {erros &&
                      <div className="col">
                        <span style={{ color: "#ff0000", fontWeight: "bold" }}>{errorMessage}</span>
                      </div>
                    }
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        </Row>


      </Container>
    </>
  );
};

export default ProjectAssociation;
