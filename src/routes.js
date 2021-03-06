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

import Index from "views/Index.js";
import Profile from "views/examples/Profile.js";
import Maps from "views/examples/Maps.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import TableUser from "views/examples/TablesUser.js";
import Icons from "views/examples/Icons.js";
import ProjectAssociation from "views/examples/ProjectAssociation.js";
import ProjetoAdd from "views/examples/ProjetoAdd";
import ProjectAssociationSearch from "views/examples/ProjectAssociationSearch";
import EditProject from "views/examples/EditProject";
import SearchProject from "views/examples/ProjectSearch";
import ForgotPassword from "views/examples/ForgotPassword";
import ChangePassword from "views/examples/ChangePassword"
import ConnectionsAssociation from "views/examples/ConnectionsAssociation";
/*  Arquivo das rotas modificado para realizar melhoria da sidebar, caso queira adicionar
    nova seção adicione mais um atributo na rota com o nome que deseja que ele apareça 
    na sidebar, coloque as rotas do submenu, e realize alterações indicadas no arquivo
    ./components/Sidebar/Sidebar */
var routes = {
    Main: [
        {
            path: "/index",
            name: "Dashboard",
            icon: "ni ni-tv-2 text-primary",
            component: Index,
            layout: "/admin",
            sidebar: true,
        },
        /* {
            path: "/icons",
            name: "Icons",
            icon: "ni ni-planet text-blue",
            component: Icons,
            layout: "/admin",
            sidebar: true,
        }, */
        {
            path: "/maps",
            name: "Maps",
            icon: "ni ni-pin-3 text-orange",
            component: Maps,
            layout: "/admin",
            sidebar: false,
        },
        {
            path: "/user-profile",
            name: "User Profile",
            icon: "ni ni-single-02 text-yellow",
            component: Profile,
            layout: "/admin",
            sidebar: true,
        },
        /* {
            path: "/tables",
            name: "Tables",
            icon: "ni ni-bullet-list-67 text-red",
            component: Tables,
            layout: "/admin",
            sidebar: true,
        }, */
        {
            path: "/tableuser",
            name: "Table User",
            icon: "ni ni-bullet-list-67 text-red",
            component: TableUser,
            layout: "/admin",
            sidebar: true,
        },
        {
            path: "/connectionsassociation",
            name: "Connections",
            icon: "ni ni-bullet-list-67 text-blue",
            component: ConnectionsAssociation,
            layout: "/admin",
            sidebar: true,
        },
        {
            path: "/login",
            name: "Login",
            icon: "ni ni-key-25 text-info",
            component: Login,
            layout: "/auth",
            sidebar: false,
        },
        {
            path: "/register",
            name: "Register",
            icon: "ni ni-circle-08 text-pink",
            component: Register,
            layout: "/auth",
            sidebar: false,
        },
        {
            path: "/forgotpassword",
            name: "Forgot Password",
            icon: "ni ni-bullet-list-67 text-blue",
            component: ForgotPassword,
            layout: "/auth",
            sidebar: false,
        },
        {
            path: "/changepassword",
            name: "Change Password",
            icon: "ni ni-bullet-list-67 text-blue",
            component: ChangePassword,
            layout: "/auth",
            sidebar: false,
        }
    ],
    Projects: [
        {
            path: "/projetoadd",
            name: "New Project",
            icon: "ni ni-bullet-list-67 text-blue",
            component: ProjetoAdd,
            layout: "/admin",
            sidebar: true,
        },
        {
            path: "/projeto",
            name: "Projects Search",
            icon: "fas fa-search text-blue",
            component: SearchProject,
            layout: "/admin",
            sidebar: true,
        },
        {
            path: "/projectassociation",
            name: "Project Association",
            icon: "ni ni-bullet-list-67 text-blue",
            component: ProjectAssociation,
            layout: "/admin",
            sidebar: true,
        },
        {
            path: "/projectassociationsearch",
            name: "Project Association Search",
            icon: "fas fa-search text-blue",
            component: ProjectAssociationSearch,
            layout: "/admin",
            sidebar: true,
        },
        {
            path: "/project/editproject/:id",
            name: "Edit Project",
            icon: "ni ni-bullet-list-67 text-blue",
            component: EditProject,
            layout: "/admin",
            sidebar: true,
        }
    ],
};
export default routes;
