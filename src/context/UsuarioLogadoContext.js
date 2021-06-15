import React, { useState } from "react";

const UsuarioLogadoContext = React.createContext([{}, () => {}]);

const UsuarioLogadoProvider = (props) => {
    const initialState = {
        id: "1",
        username: "username 1",
        firstname: "firstname 1",
        lastname: "lastname 1",
        email: "email 1",
        address: "address 1",
        city: "city 1",
        country: "country 1",
        postalcode: "postalcode 1",
        about: "about 1",
        password: "1",
    };

    const [usuarioLogado, setUsuarioLogado] = useState(initialState);

    return (
        <UsuarioLogadoContext.Provider
            value={[usuarioLogado, setUsuarioLogado]}
        >
            {props.children}
        </UsuarioLogadoContext.Provider>
    );
};

export { UsuarioLogadoContext, UsuarioLogadoProvider };
