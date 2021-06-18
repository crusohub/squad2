import React, { useState } from "react";

const UsuarioLogadoContext = React.createContext([{}, () => {}]);

const UsuarioLogadoProvider = (props) => {
    const initialState = {
        id: "2",
        username: "username 2",
        firstname: "firstname 2",
        lastname: "lastname 2",
        email: "email 2",
        address: "address 2",
        city: "city 2",
        country: "country 2",
        postalcode: "postalcode 2",
        about: "about 2",
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
