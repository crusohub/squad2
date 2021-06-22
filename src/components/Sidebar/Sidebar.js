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
/*eslint-disable*/
import React, { useContext, useState } from "react";
import { NavLink as NavLinkRRD, Link } from "react-router-dom";
// nodejs library to set properties for components
import { PropTypes } from "prop-types";

// reactstrap components
import {
    Collapse,
    DropdownMenu,
    DropdownItem,
    UncontrolledDropdown,
    DropdownToggle,
    Form,
    Input,
    InputGroupAddon,
    InputGroupText,
    InputGroup,
    Media,
    NavbarBrand,
    Navbar,
    NavItem,
    NavLink,
    Nav,
    Container,
} from "reactstrap";
import { UsuarioLogadoContext, initialState } from "context/UsuarioLogadoContext";

const Sidebar = (props) => {
    const [collapseOpen, setCollapseOpen] = useState();
    const [usuarioLogado, setUsuarioLogado] = useContext(UsuarioLogadoContext)
    /*É necessário criar um novo estado e função toggle para controlar
      cada seção nova */
    const [isOpenProjects, setIsOpenProjects] = useState(false);
    const [isOpenAuth, setIsOpenAuth] = useState(false);

    const { bgColor, routes, logo } = props;
    let navbarBrandProps;
    if (logo && logo.innerLink) {
        navbarBrandProps = {
            to: logo.innerLink,
            tag: Link,
        };
    } else if (logo && logo.outterLink) {
        navbarBrandProps = {
            href: logo.outterLink,
            target: "_blank",
        };
    }
    // verifies if routeName is the one active (in browser input)
    const activeRoute = (routeName) => {
        return props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
    };
    // toggles collapse between opened and closed (true/false)
    const toggleCollapse = () => {
        setCollapseOpen((data) => !data);
    };
    //funções toggle para controlar abertura e fechamento das seções
    const toggleOpenProject = () => {
        setIsOpenProjects(!isOpenProjects);
    };
    const toggleOpenAuth = () => {
        setIsOpenAuth(!isOpenAuth);
    };
    // closes the collapse
    const closeCollapse = () => {
        setCollapseOpen(false);
    };
    // creates the links that appear in the left menu / Sidebar
    const createLinks = (routes, ...isOpen) => {
        return Object.keys(routes).map((routeMenu, index) => {
            if (routeMenu === "Main") {
                return routes[routeMenu]
                    .filter((rota) => rota.sidebar)
                    .map((prop) => {
                        return <NavItem>
                                <NavLink
                                    to={prop.layout + prop.path}
                                    tag={NavLinkRRD}
                                    onClick={closeCollapse}
                                    activeClassName="active"
                                >
                                    <i className={prop.icon} />
                                    {prop.name}
                                </NavLink>
                            </NavItem>
                    });
            }
            return <>
                    <NavItem>
                        <NavLink
                            to={"#"}
                            tag={NavLinkRRD}
                            onClick={isOpen[2 * index - 1]}
                            activeClassName="active"
                        >
                            <i className="ni ni-bullet-list-67 text-blue" />
                            {routeMenu}
                            <i className="ni ni-bold-down ml-auto" />
                        </NavLink>
                    </NavItem>
                    {isOpen[2 * index - 2]
                        ? routes[routeMenu]
                            .filter((rota) => rota.sidebar)
                            .map((prop) => {
                                return (
                                    <NavItem className="ml-3">
                                        <NavLink
                                            to={prop.layout + prop.path}
                                            tag={NavLinkRRD}
                                            onClick={closeCollapse}
                                            activeClassName="active"
                                        >
                                            <i className={prop.icon} />
                                            {prop.name}
                                        </NavLink>
                                    </NavItem>
                                  );
                              })
                        : null
                    }
                </>
        });
    };

    return (
        <Navbar
            className="navbar-vertical fixed-left navbar-light bg-white"
            expand="md"
            id="sidenav-main"
        >
            <Container fluid>
                {/* Toggler */}
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleCollapse}
                >
                    <span className="navbar-toggler-icon" />
                </button>
                {/* Brand */}
                {logo ? (
                    <NavbarBrand className="pt-0" {...navbarBrandProps}>
                        <img
                            alt={logo.imgAlt}
                            className="navbar-brand-img"
                            src={logo.imgSrc}
                        />
                    </NavbarBrand>
                ) : null}
                {/* User */}
                <Nav className="align-items-center d-md-none">
                    <UncontrolledDropdown nav>
                        <DropdownToggle nav className="nav-link-icon">
                            <i className="ni ni-bell-55" />
                        </DropdownToggle>
                        <DropdownMenu
                            aria-labelledby="navbar-default_dropdown_1"
                            className="dropdown-menu-arrow"
                            right
                        >
                            <DropdownItem>Action</DropdownItem>
                            <DropdownItem>Another action</DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem>Something else here</DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                    <UncontrolledDropdown nav>
                        <DropdownToggle nav>
                            <Media className="align-items-center">
                                <span className="avatar avatar-sm rounded-circle">
                                    <img
                                        alt="..."
                                        src={
                                            require("../../assets/img/theme/team-1-800x800.jpg")
                                                .default
                                        }
                                    />
                                </span>
                            </Media>
                        </DropdownToggle>
                        <DropdownMenu className="dropdown-menu-arrow" right>
                            <DropdownItem
                                className="noti-title"
                                header
                                tag="div"
                            >
                                <h6 className="text-overflow m-0">Welcome!</h6>
                            </DropdownItem>
                            <DropdownItem to="/admin/user-profile" tag={Link}>
                                <i className="ni ni-single-02" />
                                <span>My profile</span>
                            </DropdownItem>
                            <DropdownItem to="/admin/user-profile" tag={Link}>
                                <i className="ni ni-settings-gear-65" />
                                <span>Settings</span>
                            </DropdownItem>
                            <DropdownItem to="/admin/user-profile" tag={Link}>
                                <i className="ni ni-calendar-grid-58" />
                                <span>Activity</span>
                            </DropdownItem>
                            <DropdownItem to="/admin/user-profile" tag={Link}>
                                <i className="ni ni-support-16" />
                                <span>Support</span>
                            </DropdownItem>
                            <DropdownItem divider />
                            <DropdownItem
                                href="#pablo"
                                onClick={(e) => e.preventDefault()}
                            >
                                <i className="ni ni-user-run" />
                                <span>Logout</span>
                            </DropdownItem>
                        </DropdownMenu>
                    </UncontrolledDropdown>
                </Nav>
                {/* Collapse */}
                <Collapse navbar isOpen={collapseOpen} style={{scrollbarWidth:'none'}}>
                    {/* Form */}
                    <Form className="mt-4 mb-3 d-md-none">
                        <InputGroup className="input-group-rounded input-group-merge">
                            <Input
                                aria-label="Search"
                                className="form-control-rounded form-control-prepended"
                                placeholder="Search"
                                type="search"
                            />
                            <InputGroupAddon addonType="prepend">
                                <InputGroupText>
                                    <span className="fa fa-search" />
                                </InputGroupText>
                            </InputGroupAddon>
                        </InputGroup>
                    </Form>
                    {/* Navigation */}
                    <Nav navbar>
                        {/*Após a rota é necessário passar o parametro da nova seção na ordem
                            1- estado de controle de abertura e fechamento
                            2- função toggle para controlar abertura e fechamento*/}
                        {createLinks(
                            routes,
                            isOpenProjects,
                            toggleOpenProject,
                            isOpenAuth,
                            toggleOpenAuth
                        )}
                        {/* <NavItem>
                            <NavLink
                                to={"/auth/login"}
                                tag={NavLinkRRD}
                                onClick={() => setUsuarioLogado(initialState)}
                                activeClassName="active"
                            >
                                <i className="ni ni-user-run text-danger" />
                                Logout
                            </NavLink>
                        </NavItem> */}
                    </Nav>
                    
                   
                </Collapse>
            </Container>
        </Navbar>
    );
};

Sidebar.defaultProps = {
    routes: [{}],
};

Sidebar.propTypes = {
    // links that will be displayed inside the component
    routes: PropTypes.arrayOf(PropTypes.object),
    logo: PropTypes.shape({
        // innerLink is for links that will direct the user within the app
        // it will be rendered as <Link to="...">...</Link> tag
        innerLink: PropTypes.string,
        // outterLink is for links that will direct the user outside the app
        // it will be rendered as simple <a href="...">...</a> tag
        outterLink: PropTypes.string,
        // the image src of the logo
        imgSrc: PropTypes.string.isRequired,
        // the alt for the img
        imgAlt: PropTypes.string.isRequired,
    }),
};

export default Sidebar;
