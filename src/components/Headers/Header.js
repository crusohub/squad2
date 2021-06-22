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
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";

import UsuarioDataService from "services/UsuarioDataService";
import ProjetoDataService from "services/ProjetoDataService";
import ConexaoDataService from "services/ConexaoDataService";
import AssociacaoDataService from "services/AssociacaoDataService";

const Header = () => {

  const [users, setUsers] = useState([])
  const [projects, setProjects] = useState([])
  const [connections, setConnections] = useState([])
  const [associacao, setAssociacao] = useState([])
  const [qtdProject, setQtdprojetc] = useState(0)
  const [qtdUsersProject, setQtdusersProject] = useState(0)

  const getUsers = () => {
    UsuarioDataService.getAll()
      .then(response => {
        setUsers(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getUsers()
  })


  const getProjects = () => {
    ProjetoDataService.getAll()
      .then(response => {
        setProjects(response.data)
        setQtdprojetc(response.data.length)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getProjects()
  })

  const getConnections = () => {
    ConexaoDataService.getAll()
      .then(response => {
        setConnections(response.data)
      })
      .catch((e) => {
        console.log(e)
      })
  }
  useEffect(() => {
    getConnections()
  })

  const getAssociacao = () => {
    AssociacaoDataService.getAll()
      .then(response => {
        setAssociacao(response.data)
        setQtdusersProject(response.data.length)
      })
      .catch((e) => {
        console.log(e)
      })
  }

  useEffect(() => {
    getAssociacao()
  })

  return (
    <>
   
 

      <div className="header bg-gradient-info pb-8 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Total Users
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">
                          {users.length}
                        </span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                          <i className="fas fa-chart-bar" />
                        </div>
                      </Col>
                    </Row>
                    {/*<p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fa fa-arrow-up" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                      </p>*/}
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Total projects
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{projects.length}</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                          <i className="fas fa-chart-pie" />
                        </div>
                      </Col>
                    </Row>
                    {/*<p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-danger mr-2">
                        <i className="fas fa-arrow-down" /> 3.48%
                      </span>{" "}
                      <span className="text-nowrap">Since last week</span>
                    </p>*/}
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Total connections
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{connections.length}</span>
                      </div>
                      
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                          <i className="fas fa-users" />
                        </div>
                      </Col>
                    </Row>
                    {/*<p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-warning mr-2">
                        <i className="fas fa-arrow-down" /> 1.10%
                      </span>{" "}
                      <span className="text-nowrap">Since yesterday</span>
                    </p>*/}
                  </CardBody>
                </Card>
              </Col>
              <Col lg="6" xl="3">
                <Card className="card-stats mb-4 mb-xl-0">
                  <CardBody>
                    <Row>
                      <div className="col">
                        <CardTitle
                          tag="h5"
                          className="text-uppercase text-muted mb-0"
                        >
                          Average people per project
                        </CardTitle>
                        <span className="h2 font-weight-bold mb-0">{(qtdProject / qtdUsersProject).toFixed(2)}</span>
                      </div>
                      <Col className="col-auto">
                        <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                          <i className="fas fa-percent" />
                        </div>
                      </Col>
                    </Row>
                    {/*<p className="mt-3 mb-0 text-muted text-sm">
                      <span className="text-success mr-2">
                        <i className="fas fa-arrow-up" /> 12%
                      </span>{" "}
                      <span className="text-nowrap">Since last month</span>
                    </p>*/}
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </div>
        </Container>
      </div>
    </>
  );
};
export default Header;
