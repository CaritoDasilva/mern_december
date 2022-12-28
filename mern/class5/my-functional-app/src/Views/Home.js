import React, { useState } from "react";
// import CounterButton from "../Components/CounterButton";
import FormRegister from "../Components/FormRegister";
import PerfilUsuario from "../Components/PerfilUsuario";
import styles from './Home.module.scss';

const Home = () => {
//    const [counter, setCounter] = useState(0)
    const [user, setUser] = useState({
        userName: '',
        email: '',
        id: '',
        password: ''
    })

    return (
        <div className={styles["home-container"]}>
            {/* <h1>Acá un componente funcional</h1>
            <CounterButton counter={counter} setCounter={setCounter} /> */}
            <h3>Ingresa tus datos</h3>
            <div className={styles["info-container"]}>
                <FormRegister 
                    user={user}
                    setUser={setUser}
                />
                <PerfilUsuario
                    user={user}
                />
            </div>
        </div>
    )
}

export default Home;