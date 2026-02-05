import { useCounter } from "../hooks/useCounter"

export const MyCounterApp = () => {
    
    const { count, handleAdd, handleSubstract, handleReset } = useCounter({ initialValue: 5 })

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}>
            <h1>counter: {count}</h1>
            <div>
                <button onClick={handleAdd}>Increment</button>
                <button onClick={handleSubstract}>Decrement</button>
                <button onClick={handleReset}>Reset</button>
            </div>
        </div>
    )
}
