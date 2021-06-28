import React from "react";
import {useEffect, useContext, useState} from "react"

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap";
import { UsuarioLogadoContext } from "context/UsuarioLogadoContext";
import UsuarioDataService from "services/UsuarioDataService";
import Profile from "views/examples/Profile";


const UserHeader = (props) => {

  const [usuarioLogado, setUsuarioLogado]= useContext(UsuarioLogadoContext)

  
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" +
            props.imagemFundo
             +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">{props.titulo}</h1>
              <p className="text-white mt-0 mb-5">
                {props.description}
              </p>
              
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
