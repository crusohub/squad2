/*!

=========================================================
* Argon Dashboard React - v1.2.0
==========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React, { useState, useEffect } from "react";
import AssociacaoDataService from "services/AssociacaoDataService";
import UsuarioDataService from "services/UsuarioDataService";
import ProjetoDataService from "services/ProjetoDataService"

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

const ProjectAssociationSearch = () => {
    const [associations, setAssociations] = useState([]);
    const [searchUsername, setSearchUsername] = useState("");
    const [searchProjectname, setSearchProjectname] = useState("");
    const [users, setUsers] = useState([]);
    const [projetc, setProjetc] = useState([]);

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
    const retrieveProject = () => {
        ProjetoDataService.getAll()
            .then((response) => {
                setProjetc(response.data);
            })
            .catch((e) => console.log(e));
    };
    function searchImgUser(id) {
        let usuarioCapturado = users.find((user)=>user.username===id);
        if (usuarioCapturado!==undefined && usuarioCapturado.photo!==undefined) {
            return `${usuarioCapturado.photo}`;
        }
        else{
            return `https://picsum.photos/200`
        }
}

    function searchNameUser(id) {
            let usuarioCapturado = users.find((user)=>user.username===id);
            if (usuarioCapturado!==undefined) {
                return `${usuarioCapturado.firstname} ${usuarioCapturado.lastname}`;
            }
            else{
                return `usuario ${id} nao encontrado`
            }
    }
    function searchStatsProject(id) {
        let projetoCapturado = projetc.find((user)=>user.projectname===id);
        
        if (projetoCapturado!==undefined) {
            return `${projetoCapturado.status}`;
        }
        else{
            return `projeto ${id} nao encontrado`
        }
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
    const searchProjectAssociationByFilter = (name,project) => {
        AssociacaoDataService.findByProject(project)
        .then((response) => {
            let dados = response.data.filter((data)=>data.username.toUpperCase()===name.toUpperCase())
            setAssociations(dados)
        })
        .catch((e) => console.log(e));
    };

    const searchOnClick = (e) => {
        if (searchProjectname == "") {
            searchProjectAssociationUser(searchUsername);
        } else if (searchUsername == "") {
            searchProjectAssociationProjectName(searchProjectname);
        }
        else{
            searchProjectAssociationByFilter(searchUsername,searchProjectname)
        }
    };

    /* async function zapName(id) {
        var name = "";
        await UsuarioDataService.findById(id).then((response) => {
            const userZap = response.data[0];
            name = `${userZap.firstname} ${userZap.lastname}`;
        });
        console.log(name);
        return name;
    } */

    useEffect(() => {
        retrieveAssociation();
        retrieveUser();
        retrieveProject();
    }, []);
    useEffect(()=>{
        if (searchUsername === "" && searchProjectname==="") {
            retrieveAssociation();
        }
    },[searchProjectname,searchUsername]);
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
                                <h3 className="mb-0">Project Association</h3>
                            </CardHeader>
                            <CardBody>
                                <Row>
                                    <Col>
                                        <label
                                            className="form-control-label"
                                            htmlFor="currentPassword"
                                        >
                                            User
                                        </label>
                                        <Input
                                            placeholder="Search by user"
                                            className="form-control-alternative"
                                            onChange={(e) =>
                                                setSearchUsername(
                                                    e.target.value
                                                )
                                            }
                                            //value={}
                                        />
                                    </Col>
                                    <Col>
                                        <label
                                            className="form-control-label"
                                            htmlFor="currentPassword"
                                        >
                                            Project Name
                                        </label>
                                        <Input
                                            placeholder="Search by project name"
                                            className="form-control-alternative"
                                            onChange={(e) =>
                                                setSearchProjectname(
                                                    e.target.value
                                                )
                                            }
                                            //value={searchProject}
                                        />
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Button
                                            className="my-4"
                                            color="primary"
                                            type="submit"
                                            onClick={searchOnClick}
                                        >
                                            Search
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
                                                <tr>
                                                    <th scope="col">ID</th>
                                                    <th scope="col">User</th>
                                                    <th scope="col">Project</th>
                                                    <th scope="col">Stats</th>
                                                    <th scope="col"></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {associations.map((value) => (
                                                    <tr>
                                                        <th scope="row">
                                                            <script>
                                                                {/* console.log(
                                                                    value
                                                                ) */}
                                                            </script>
                                                            {value.id}
                                                        </th>
                                                        <td className="d-flex align-items-center">
                                                            <div className="avatar-group">
                                                                <a
                                                                    className="avatar avatar-sm"
                                                                    href="#pablo"
                                                                    id="tooltip742438047"
                                                                    onClick={(
                                                                        e
                                                                    ) =>
                                                                        e.preventDefault()
                                                                    }
                                                                >
                                                                    
                                                                    <img
                                                                        alt="..."
                                                                        className="rounded-circle"
                                                                        src={searchImgUser(value.username)}
                                                                    />
                                                                </a>
                                                                {/* <UncontrolledTooltip
                                                                    delay={0}
                                                                    target="tooltip742438047"
                                                                >
                                                                    {value.username} 
                                                                    
                                                                </UncontrolledTooltip> */}
                                                            </div>
                                                            <div className="d-flex align-items-center">
                                                                {
                                                                    searchNameUser(value.username)
                                                                }
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                {
                                                                    value.projectname
                                                                }
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <div className="d-flex align-items-center">
                                                                {
                                                                    searchStatsProject(value.projectname)
                                                                }
                                                            </div>
                                                        </td>
                                                        <td className="text-right">
                                                            <UncontrolledDropdown>
                                                                <DropdownToggle
                                                                    className="btn-icon-only text-light"
                                                                    href="#pablo"
                                                                    role="button"
                                                                    size="sm"
                                                                    color=""
                                                                    onClick={(
                                                                        e
                                                                    ) =>
                                                                        e.preventDefault()
                                                                    }
                                                                >
                                                                    <i className="fas fa-ellipsis-v" />
                                                                </DropdownToggle>
                                                                <DropdownMenu
                                                                    className="dropdown-menu-arrow"
                                                                    right
                                                                >
                                                                    <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={(
                                                                            e
                                                                        ) =>
                                                                            e.preventDefault()
                                                                        }
                                                                    >
                                                                        Action
                                                                    </DropdownItem>
                                                                    <DropdownItem
                                                                        href="#pablo"
                                                                        onClick={(
                                                                            e
                                                                        ) => {
                                                                            e.preventDefault();
                                                                            deleteAssociationUser(
                                                                                value.id
                                                                            );
                                                                        }}
                                                                    >
                                                                        <i className="ni ni-basket text-danger" />
                                                                        Delete
                                                                    </DropdownItem>
                                                                </DropdownMenu>
                                                            </UncontrolledDropdown>
                                                        </td>
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

export default ProjectAssociationSearch;
