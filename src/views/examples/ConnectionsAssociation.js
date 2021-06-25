import React, { useState, useEffect, useContext } from "react";
import AssociacaoDataService from "services/AssociacaoDataService";
import UsuarioDataService from "services/UsuarioDataService";
import ConexaoDataService from "services/ConexaoDataService";
import { UsuarioLogadoContext } from "../../context/UsuarioLogadoContext";
// reactstrap components

import {
    Badge,
    Card,
    CardHeader,
    CardFooter,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Media,
    Pagination,
    PaginationItem,
    PaginationLink,
    Progress,
    Table,
    Container,
    Row,
    UncontrolledTooltip,
    Input,
    InputGroup,
    InputGroupText,
    InputGroupAddon,
    CardBody,
    Col,
    Button,
} from "reactstrap";
// core components
import HeaderProject from "components/Headers/HeaderProject";

const ConnectionsAssociation = () => {
    const [associations, setAssociations] = useState([]);
    const [searchUsername, setSearchUsername] = useState("");
    const [searchProjectname, setSearchProjectname] = useState("");
    const [users, setUsers] = useState([]);
    const [usuarioLogado, setUsuarioLogado] = useContext(UsuarioLogadoContext)
    const [conexao, setConexao] = useState();
    const [findUserId, setFindUserId] = useState([])


    const handleInputUsername = (e) => {
        const { value } = e.target;
        let id = value.split(":")[0];
        let username = value.split(":")[1];
        if (username == undefined) {
            username = "Select a user";
        }
        setConexao({
            ...conexao,
            "userid": id,
            "username": username
        });

    }

    const retrieveAssociation = () => {
        AssociacaoDataService.getAll()
            .then((response) => {
                setAssociations(response.data);
            })
            .catch((e) => console.log(e));
    };

    const retrieveUser = () => {
        UsuarioDataService.getAll()
            .then((response) => {
                setUsers(response.data);
            })
            .catch((e) => console.log(e));
    };
//#####################################################
    const retrieveConexaoUser = () => {
        UsuarioDataService.findByUserIdTeste()
            .then((response) => {
                setFindUserId(response.data);
            })
            .catch((e) => console.log(e));
    };
//####################################################
    function searchUser(id) {
        try {
            let usuarioCapturado = users.find((value) => value.id == id);
            return `${usuarioCapturado.firstname} ${usuarioCapturado.lastname}`;
        } catch { }
    }

    const deleteAssociationUser = (id) => {
        AssociacaoDataService.remove(id).then(retrieveAssociation);
    };

    const searchProjectAssociationUser = (username) => {
        AssociacaoDataService.findByUsername(username)
            .then((response) => {
                setAssociations(response.data);
            })
            .catch((e) => console.log(e));
    };

    const searchProjectAssociationProjectName = (project) => {
        AssociacaoDataService.findByProject(project)
            .then((response) => {
                setAssociations(response.data);
            })
            .catch((e) => console.log(e));
    };
    const connectOnClick = (e) => {
        const data = {
            "userid": usuarioLogado.id,
            "username": usuarioLogado.username,
            "useridconnected": conexao.userid,
            "usernameconnected": conexao.username
        }
        console.log(conexao)
        ConexaoDataService.create(data).then(
            response => console.log(response.data)
        )
    };



    useEffect(() => {
        retrieveAssociation();
        retrieveUser();
        retrieveConexaoUser();
    }, []);

    return (
        <>
            <HeaderProject />
            {/* Page content */}
            <Container className="mt--7" fluid>
                {/* Table */}
                <Row>
                    <div className="col">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <h3 className="mb-0">Connections Association</h3>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col>

                                        <label
                                            className="form-control-label"
                                            htmlFor="currentPassword"
                                        >
                                            Select a user
                                        </label>
                                        <Input
                                            name="username"
                                            type="select"
                                            placeholder="Search by username"
                                            onChange={handleInputUsername}
                                            className="form-control-alternative"
                                        >
                                            <option>Select a user</option>
                                            {users.map((data) => (
                                                <option id={data.userid} value={data.id + ":" + data.username}>{data.username}</option>
                                            ))}
                                        </Input>
                                    </Col>

                                </Row>
                                <Row>
                                    <Col>
                                        <Button
                                            className="my-4"
                                            color="primary"
                                            type="submit"
                                            onClick={connectOnClick}>
                                            Connect
                                        </Button>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Table
                                            className="align-items-center table-flush"
                                            responsive
                                        >
                                            <thead className="thead-light">
                                                <thead className="thead-dark">
                                                    <tr>
                                                        <th scope="col">Name</th>
                                                        <th></th>
                                                    </tr>
                                                </thead>
                                            </thead>
                                            <tbody>
                                                {findUserId.map((cx, index) => (
                                                    <tr>
                                                        <th scope="row">{cx.usernameconnected}</th>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </CardBody>
                            <CardFooter className="py-4">
                                <nav aria-label="...">
                                    <Pagination
                                        className="pagination justify-content-end mb-0"
                                        listClassName="justify-content-end mb-0"
                                    >
                                        <PaginationItem className="disabled">
                                            <PaginationLink
                                                href="#pablo"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                                tabIndex="-1"
                                            >
                                                <i className="fas fa-angle-left" />
                                                <span className="sr-only">
                                                    Previous
                                                </span>
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem className="active">
                                            <PaginationLink
                                                href="#pablo"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                            >
                                                1
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink
                                                href="#pablo"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                            >
                                                2{" "}
                                                <span className="sr-only">
                                                    (current)
                                                </span>
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink
                                                href="#pablo"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                            >
                                                3
                                            </PaginationLink>
                                        </PaginationItem>
                                        <PaginationItem>
                                            <PaginationLink
                                                href="#pablo"
                                                onClick={(e) =>
                                                    e.preventDefault()
                                                }
                                            >
                                                <i className="fas fa-angle-right" />
                                                <span className="sr-only">
                                                    Next
                                                </span>
                                            </PaginationLink>
                                        </PaginationItem>
                                    </Pagination>
                                </nav>
                            </CardFooter>
                        </Card>
                    </div>
                </Row>
            </Container>
        </>
    );
};

export default ConnectionsAssociation;
