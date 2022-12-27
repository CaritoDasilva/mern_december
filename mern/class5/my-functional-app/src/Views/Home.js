import React, { useState } from "react";
import CounterButton from "../Components/CounterButton";
import FormRegister from "../Components/FormRegister";
import PerfilUsuario from "../Components/PerfilUsuario";


const Home = () => {
//    const [counter, setCounter] = useState(0)
    const [user, setUser] = useState({
        userName: '',
        email: '',
        id: '',
        password: ''
    })

    return (
        <div>
            {/* <h1>Acá un componente funcional</h1>
            <CounterButton counter={counter} setCounter={setCounter} /> */}
            <h3>Ingresa tus datos</h3>
            <FormRegister 
                user={user}
                setUser={setUser}
            />
            <PerfilUsuario
                user={user}
            />
        </div>
    )
}

export default Home;