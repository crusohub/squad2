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
} from "reactstrap";
// core components
import HeaderProject from "components/Headers/HeaderProject";
import UsuarioDataService from "services/UsuarioDataService";
import ProjetoDataService from "services/ProjetoDataService";

const ProjectAssociation = () => {

  const [userValue, setUserValue] = useState('');
  const [projectValue, setProjectValue] = useState('');
  const [erros, setErros] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [listUsers, setListUsers] = useState([]);
  const [listProjects, setListProjects] = useState([]);

  const validarCampos = () => {
    if (userValue != '' && projectValue != '') {
      setErros(false);
      return true;
    } else {
      setErros(true);
      if (userValue == '' && projectValue != '') {
        setErrorMessage("Select a user");
      } else {
        if (projectValue == '' && userValue != '') {
          setErrorMessage("Select a project");
        } else {
          setErrorMessage("Select a user and project");
        };
      };
      return false;
    };
  };

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

  const efetuarLogin = () => {
    if (validarCampos() == true) {
      console.log("passou");
    }
  };

  useEffect(() => {
    preencherSelectUsers();
    preencherSelectProjects();

  }, []);

  return (
    <>
      <HeaderProject />
      <Container className="mt--7" fluid>
        <Row>
          <div className="col text-center">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">User Project Association</h3>
              </CardHeader>

              {/* Select de projetos */}
              <div className="col">
                <span className="display-5 text-center">Select a project:</span>
                <select onChange={(e) => setProjectValue(e.target.value)} className="form-control mx-auto mb-3" tabindex="2" style={{ maxWidth: 300, cursor: "pointer,m" }}>
                  <option>Select a project</option>
                  {listProjects.map((data) => (
                    <option value={data.id}>{data.projectname}</option>
                  ))}
                </select>

                {/* Select de usuários */}
                <span className="display-5 text-center">Select a user:</span>
                <select onChange={(e) => setUserValue(e.target.value)} className="form-control mx-auto" tabindex="2" style={{ maxWidth: 300 }}>
                  <option>Select a user</option>
                  {listUsers.map((data) => (
                    <option value={data.id}>{data.username}</option>
                  ))}
                </select>

                {/* Botão de associar projeto */}
                <Button className="my-4" color="primary" type="button" onClick={efetuarLogin}>
                  Associate project
                </Button>

                {/* Div para mostragem de erros */}
                {erros &&
                  <div className="col">
                    <span style={{ color: "#ff0000", fontWeight: "bold" }}>{errorMessage}</span>
                  </div>
                }
              </div>
            </Card>
          </div>
        </Row>

      </Container>
    </>
  );
};

export default ProjectAssociation;
