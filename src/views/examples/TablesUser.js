
// core components
import HeaderProject from "components/Headers/HeaderProject";
import React, { useContext, useEffect, useState } from "react";
import { UsuarioLogadoContext } from "context/UsuarioLogadoContext"
import UsuarioDataService from "services/UsuarioDataService"
import ProfileDelete from "./ProfileDelete"

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
} from "reactstrap";


const TablesUser = (props) => {
  const [users, setUsers] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [pageSize, setPageSize] = useState(10)
  const [pageCount, setPageCount] = useState(0)

  const getUsers = () => {
    UsuarioDataService.getAll()
    .then(response => {
      setUsers(response.data)
      setPageCount(Math.ceil(response.data.length/pageSize))  
    })
    .catch((e) => {
      console.log(e)
    })
  }

  useEffect(() => {
    getUsers()
  })

  const handlePage = (e, pageNum) => {
    e.preventDefault()
    setCurrentPage(pageNum)
  }

  const callEdit = () => {
    props.history.push("/admin/user-profile")
  }

  const deleteUser = (id) => {
    if(id){
      UsuarioDataService.remove(id)
          .then(response => {
              alert("Usuario deletado com sucesso");
              props.history.push("/admin/index")
          })
          .catch(e => {console.log(e)})
    }else {
      alert("Usuário não encontrado!")
    }
  }

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
                <h3 className="mb-0">Card tables</h3>
              </CardHeader>
              <Table className="align-items-center table-flush table table-striped" responsive>
                <thead className="thead-light">
                  <tr>
                    {/* <th scope="col">ID</th> */}
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Address</th>
                    <th scope="col">City</th>
                    <th scope="col">Country</th>
                    <th scope="col">Postal Code</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                {users
                  .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
                  .map((value, index) => (
                    <tr>
                      {/* <td>{value.id}</td> */}
                      <th scope="row">
                        <Media className="align-items-center">
                          <a
                            className="avatar rounded-circle mr-3"
                            href="#"
                            onClick={(e) => e.preventDefault()}
                          >
                            <img
                              alt="..."
                              src={
                                require("../../assets/img/theme/bootstrap.jpg")
                                  .default
                              }
                            />
                          </a>
                          <Media>
                            <span className="mb-0 text-sm">
                              {value.firstname + " " + value.lastname}
                            </span>
                          </Media>
                        </Media>
                      </th>
                      <td>{value.email}</td>
                      <td>{value.address}</td>
                      <td>{value.city}</td>
                      <td>{value.country}</td>
                      <td>{value.postalcode}</td>
                      <td className="text-right">
                        <UncontrolledDropdown>
                          <DropdownToggle
                            className="btn-icon-only text-light"
                            href="#"
                            role="button"
                            size="sm"
                            color=""
                            onClick={(e) => e.preventDefault()}
                          >
                            <i className="fas fa-ellipsis-v" />
                          </DropdownToggle>
                          <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                              href="#"
                              onClick={() => callEdit()}
                            >
                              Edit
                            </DropdownItem>
                            <DropdownItem
                              href="#"
                              onClick={() => deleteUser(value.id)}
                            >
                              Remove
                            </DropdownItem>
                          </DropdownMenu>
                        </UncontrolledDropdown>
                      </td>
                    </tr>
                  ))}

                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem disabled={currentPage <= 0}>
                      <PaginationLink
                        onClick={(e) => handlePage(e, currentPage-1)}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    {[...Array(pageCount)].map((page, i) => (
                      <PaginationItem active={(i) === currentPage} key={(i)}>
                        <PaginationLink onClick={e => handlePage(e, (i))} href="#">
                          {i+1}
                       </PaginationLink>
                      </PaginationItem>
                    ))}
                    <PaginationItem disabled={currentPage > (pageCount-2)}>
                      <PaginationLink 
                        onClick={(e) => handlePage(e, currentPage+1)}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
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

export default TablesUser;
