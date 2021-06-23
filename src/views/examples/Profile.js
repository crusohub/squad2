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
// core components
import HeaderGenerico from "../../components/Headers/HeaderGenerico";
import { UsuarioLogadoContext } from "../../context/UsuarioLogadoContext";
import UsuarioDataService from "../../services/UsuarioDataService";
import React, { useRef } from "react";
import { useEffect, useContext, useState } from "react"
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

const Profile = (props) => {

  const Api = {
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    city: "",
    country: "",
    postalcode: "",
    photo: "",
    about: "",
  }

  const [aleatorio, setAleatorio] = useState(1) // set 1 em aleatorio
  const [usuarioApi, setUsuarioApi] = useState(Api)
  const [usuarioLogado, setUsuarioLogado] = useContext(UsuarioLogadoContext)


  const handleInputChange = event => {
    event.preventDefault()
    const { name, value } = event.target;
    setUsuarioApi({ ...usuarioApi, [name]: value });
    //console.log(usuarioLogado)
  };
  const updateProfile = () => {
    UsuarioDataService.update(usuarioLogado.id, usuarioApi)
      .then(response => {
        setUsuarioApi(response.data)
        setUsuarioLogado(response.data)

        console.log(response);
        alert("Atualizado com sucesso!")

      })
      .catch(e => {
        console.log(e);
      });
  }

  const callSettings = () => {
    props.history.push("/settings/changePassword")
  }

  useEffect(() => {
    setUsuarioApi(usuarioLogado)
    setAleatorio(Math.floor((Math.random() * 5) + 1))
  }, [])

  return (
    <>
      <HeaderGenerico imagemFundo={require(`../../assets/img/theme/team-${aleatorio}-800x800.jpg`).default}
        titulo={`Hello ${usuarioLogado.username}`}
        description={"  This is your profile page. Below you can edit your account details and save the changes "}
      />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a id="profilePciture" href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={usuarioLogado.photo ? usuarioLogado.photo : "https://i1.wp.com/terracoeconomico.com.br/wp-content/uploads/2019/01/default-user-image.png?ssl=1"}
                        // {
                        //   require("../../assets/img/theme/team-4-800x800.jpg").default
                        // }
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <div className="text-center mt-5">
                  <h3>
                    {usuarioLogado.username}
                    <span className="font-weight-light">, 27</span>
                  </h3>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    {usuarioLogado.city}, {usuarioLogado.country}
                  </div>
                  <div className="h5 mt-4">
                    <i className="ni business_briefcase-24 mr-2" />
                    Solution Manager - Creative Tim Officer
                  </div>
                  <div>
                    <i className="ni education_hat mr-2" />
                    University of Computer Science
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="8">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="6">
                    <h3 className="mb-0">My account</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Link to={"/settings/delete"}>
                      <Button
                        color="danger"
                        size="sm"
                      >
                        Delete
                      </Button>
                    </Link>
                  </Col>
                  <Col className="text-right" xs="2">
                    <Button
                      color="primary"
                      onClick={() => callSettings()}
                      size="sm"
                    >
                      Settings
                    </Button>

                  </Col>
                </Row>
              </CardHeader>
              <CardBody>
                <Form>
                  <h6 className="heading-small text-muted mb-4">
                    User information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-username"
                          >
                            Username
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={usuarioLogado.username}
                            id="input-username"
                            name="username"
                            onBlur={handleInputChange}
                            placeholder="Username "
                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-email"
                          >
                            Email address
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-email"
                            name="email"

                            defaultValue={usuarioLogado.email}
                            onBlur={handleInputChange}
                            type="email"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-first-name"
                          >
                            First name
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={usuarioLogado.firstname}
                            onBlur={handleInputChange}
                            id="input-first-name"
                            name="firstname"

                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="6">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-last-name"
                          >
                            Last name
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={usuarioLogado.lastname}
                            onBlur={handleInputChange}
                            id="input-last-name"
                            name="lastname"

                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  {/* Address */}
                  <h6 className="heading-small text-muted mb-4">
                    Contact information
                  </h6>
                  <div className="pl-lg-4">
                    <Row>
                      <Col md="12">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-address"
                          >
                            Address
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={usuarioLogado.address}
                            onBlur={handleInputChange}
                            id="input-address"
                            name="address"

                            type="text"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                    <Row>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-city"
                          >
                            City
                          </label>
                          <Input
                            className="form-control-alternative"
                            defaultValue={usuarioLogado.city}
                            onBlur={handleInputChange}
                            id="input-city"
                            name="city"

                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Country
                          </label>
                          <Input
                            className="form-control-alternative"
                            onBlur={handleInputChange}
                            id="input-country"
                            name="country"
                            defaultValue={usuarioLogado.country}

                            type="text"
                          />
                        </FormGroup>
                      </Col>
                      <Col lg="4">
                        <FormGroup>
                          <label
                            className="form-control-label"
                            htmlFor="input-country"
                          >
                            Postal code
                          </label>
                          <Input
                            className="form-control-alternative"
                            id="input-postal-code"
                            name="postalcode"
                            placeholder={usuarioLogado.postalcode}
                            onBlur={handleInputChange}
                            type="number"
                          />
                        </FormGroup>
                      </Col>
                    </Row>
                  </div>
                  <hr className="my-4" />
                  <Row>
                    <Col md="12">
                      <FormGroup>
                        <label
                          className="form-control-label"
                          htmlFor="input-country"
                        >
                          Photo
                        </label>
                        <Input
                          className="form-control-alternative"
                          id="input-photo"
                          name="photo"
                          placeholder="Input the path of your photo"
                          defaultValue={usuarioLogado.photo}
                          onBlur={handleInputChange}
                          type="text"
                        />
                      </FormGroup>
                    </Col>
                    </Row>
                  <hr className="my-4" />
                  {/* Description */}
                  <h6 className="heading-small text-muted mb-4">About me</h6>
                  <div className="pl-lg-4">
                    <FormGroup>
                      <label>About Me</label>
                      <Input
                        className="form-control-alternative"
                        placeholder="A few words about you ..."
                        rows="4"
                        name="about"
                        defaultValue={usuarioApi.about}
                        onBlur={handleInputChange}
                        type="textarea"
                      />
                    </FormGroup>
                  </div>
                </Form>
                <Button
                  color="info"
                  href="#pablo"
                  onClick={(e) => { updateProfile() }}
                >
                  Edit profile
                </Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
};
export default Profile;
