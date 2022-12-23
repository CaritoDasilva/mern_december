import React, { useState } from "react";
import CounterButton from "../Components/CounterButton";
import FormRegister from "../Components/FormRegister";

const Home = () => {
    const [counter, setCounter] = useState(0)

    return (
        <div>
            {/* <h1>Acá un componente funcional</h1>
            <CounterButton counter={counter} setCounter={setCounter} /> */}
            <h3>Ingresa tus datos</h3>
            <FormRegister />
        </div>
    )
}

export default Home;