import React from "react";

const PerfilUsuario = (props) => {
    const { user } = props;
    const { userName, email, id, password } = user;

    return(
        <div>
            <h3>{userName}</h3>
            <h3>{email}</h3>
            <h3>{id}</h3>
            <h3>{password}</h3>
        </div>
    )
}

export default PerfilUsuario;