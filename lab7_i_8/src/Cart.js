import React from "react";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";

import Counter from "./Counter";

function Cart() {
    const [state, setState] = React.useState({
        counters: [
            { id: 1, value: 0 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ],
    });
    const handleIncrement = (counter) => () => {
        const counters = [...state.counters];
        const index = counters.indexOf(counter);
        setState({
            ...state,
            counters: counters.map((counter, i) => {
                if (i === index) {
                    return {
                        ...counter,
                        value: counter.value + 1,
                    };
                }
                return counter;
            }),
        });
    };
    const handleDecrement = (counter) => () => {
        const counters = [...state.counters];
        const index = counters.indexOf(counter);
        setState({
            ...state,
            counters: counters.map((counter, i) => {
                if (i === index) {
                    return {
                        ...counter,
                        value: counter.value === 0 ? 0 : counter.value - 1,
                    };
                }
                return counter;
            }),
        });
    };
    const handleReset = () => {
        setState({
            ...state,
            counters: state.counters.map((counter) => ({
                ...counter,
                value: 0,
            })),
        });
    };
    const handleDelete = (counterId) => () => {
        setState({
            ...state,
            counters: state.counters.filter(
                (counter) => counter.id !== counterId
            ),
        });
    };
    const handleRestart = () => {
        window.location.reload();
    };
    return (
        <React.Fragment>
            <Chip label={state.counters.filter((c) => c.value !== 0).length} />
            <Button onClick={handleReset}>reset</Button>
            <Button onClick={handleRestart}>restart</Button>
            <div>
                {state.counters.map((counter) => (
                    <Counter
                        onIncrement={handleIncrement(counter)}
                        onDecrement={handleDecrement(counter)}
                        onDelete={handleDelete(counter.id)}
                        amount={counter.value}
                    />
                ))}
            </div>
        </React.Fragment>
    );
}

export default Cart;
