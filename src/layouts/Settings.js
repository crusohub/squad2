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
import React, {useContext, useState} from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components
import SettingsNavbar from "components/Navbars/SettingsNavbar.js";
import AuthFooter from "components/Footers/AuthFooter.js";

import routesSettings from "routesSettings";
import { UsuarioLogadoContext, AlertaLoginContext } from "context/UsuarioLogadoContext";

const Settings = (props) => {
  const mainContent = React.useRef(null);
  const location = useLocation();
  const [title, setTitle] = useState("Title")
  const [usuarioLogado, setUsuarioLogado] = useContext(UsuarioLogadoContext)
  const [alertaLogin, setAlertaLogin] = useContext(AlertaLoginContext)

  React.useEffect(() => {
    changeTitle();
    document.body.classList.add("bg-default");
    return () => {
      document.body.classList.remove("bg-default");
    };
  }, []);

  React.useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;
    mainContent.current.scrollTop = 0;
    if(usuarioLogado.firstname === ""){
      setAlertaLogin(true)
      setTimeout(()=>setAlertaLogin(false), 4000)
      props.history.push("/auth/login")
    }
  }, [location]);

  const changeTitle = () => {
    if(props.location.pathname === "/settings/changePassword"){
      setTitle("Change your password!")
    } else if(props.location.pathname === "/settings/delete"){
      setTitle("Delete your account")
    }
  }

  const getRoutes = (routesSettings) => {
    return routesSettings.map((prop, key) => {
      if (prop.layout === "/settings") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <div className="main-content" ref={mainContent}>
        <SettingsNavbar />
        <div className="header bg-gradient-info py-7 py-lg-8">
          <Container>
            <div className="header-body text-center mb-7">
              <Row className="justify-content-center">
                <Col lg="5" md="6">
                  <h1 className="text-white">{title}</h1>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="fill-default"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </div>
        {/* Page content */}
        <Container className="mt--8 pb-5">
          <Row className="justify-content-center">
            <Switch>
              {getRoutes(routesSettings)}
              <Redirect from="*" to="/" />
            </Switch>
          </Row>
        </Container>
      </div>
      <AuthFooter />
    </>
  );
};
export default Settings;