import React, { useState } from "react";
import useLocalStorage from "../hook/useLocalStorage"

const UsuarioLogadoContext = React.createContext([{}, () => {}]);
const AlertaLoginContext = React.createContext([false, ()=> {}])

const initialState = {
    id: "",
    username: "",
    firstname: "",
    lastname: "",
    email: "",
    address: "",
    city: "",
    country: "",
    postalcode: "",
    about: "",
    photo: "",
    password: "",
};
const UsuarioLogadoProvider = (props) => {
    

    const [usuarioLogado, setUsuarioLogado] = useLocalStorage("user", initialState);
    const [alertaLogin, setAlertaLogin] = useState(false)

    return (
        <UsuarioLogadoContext.Provider
            value={[usuarioLogado, setUsuarioLogado]}
        >
            <AlertaLoginContext.Provider value={[alertaLogin, setAlertaLogin]}>
                {props.children}
            </AlertaLoginContext.Provider>
        </UsuarioLogadoContext.Provider>
    );
};

export { initialState, AlertaLoginContext, UsuarioLogadoContext, UsuarioLogadoProvider };
