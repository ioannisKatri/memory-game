import {useEffect, useState} from "react"

import Game from "./Game"
import WithMessage from "../with-message/With-message"

export default function GameContainer() {
    let [squaresNumber, setSquaresNumber] = useState(4);
    let [isCorrectSquare, setIsCorrectSquare] = useState(null);
    let [squareArray, setSquareArray] = useState(new Array(squaresNumber).fill(null))
    let [hsl, setHSL] = useState(Math.floor(Math.random() * (360)) + 1)
    let correctSquare = Math.floor(Math.random() * (squaresNumber * squaresNumber)) + 1;

    useEffect(() => {
    }, [isCorrectSquare])

    const validateCorrectSquare = (value) => {
        if (value === true) {
            setIsCorrectSquare(true)
            setSquaresNumber(squaresNumber += 1)
            setSquareArray(new Array(squaresNumber).fill(null))
            setHSL(Math.floor(Math.random() * (360)) + 1);
        } else {
            setIsCorrectSquare(false)
        }
    }

    let displayMessage = !(isCorrectSquare === null || isCorrectSquare === true);
    return WithMessage(Game)(displayMessage, "Sorry you lost",
        {validateCorrectSquare, squareArray, correctSquare, squaresNumber, hsl}
    )
}

