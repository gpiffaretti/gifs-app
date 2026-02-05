import { useState } from 'react'

interface Props {
    initialValue: number
}

export const useCounter = ({ initialValue}: Props) => {

    const [count, setCount] = useState(initialValue)

    const handleSubstract = () => {
        setCount((prevState) => prevState - 1)
    }

    const handleAdd = () => {
        setCount((prevState) => prevState + 1)
    }

    const handleReset = () => {
        setCount(5)
    }

    return {
        // Props
        count,

        // Methods
        handleSubstract,
        handleAdd,
        handleReset
    }
}
