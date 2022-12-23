import React from "react";
import Button from 'react-bootstrap/Button';

const CounterButton = (props) => {
    const { counter, setCounter } = props;

    const incrementCounter = () => {
        if (counter < 10 || counter === 0) {
            setCounter(counter +1);
        } if (counter > 10) {
            setCounter(counter -1)
        }
    };

    return (
        <Button onClick={incrementCounter} variant="info">{counter}</Button>
    )

}

export default CounterButton;