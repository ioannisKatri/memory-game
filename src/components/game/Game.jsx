import Square from '../square/Square'

function Game({validateCorrectSquare, squareArray, squaresNumber, correctSquare, hsl}) {
    let counter = 0;
    return (
        <div>
            <h3>This is the square Number {squaresNumber}</h3>

            {squareArray.map((val, indexX) => (
                <div key={indexX}>
                    {squareArray.map((value, indexY) => (
                        <Square key={indexY} counter={counter += 1}
                                correctSquare={correctSquare}
                                isCorrectSquare={validateCorrectSquare}
                                hsl={hsl}/>
                    ))}
                </div>
            ))}
        </div>
    )
}

export default Game