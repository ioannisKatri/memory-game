import styled from "styled-components";

function square({counter, correctSquare, isCorrectSquare, hsl}) {
    return (
        <Square hsl={hsl} correct={counter === correctSquare}
                onClick={() => isCorrectSquare(counter === correctSquare)}>
        </Square>)
}

const Square = styled.span`
  display: inline-block;
  border-radius: 3px;
  width: 40px;
  height: 40px;
  background: hsla(${props => props.hsl}, ${props => props.correct === true ? "70%" : "100%"}, 50%, 1);
  border: 2px solid white;
`
export default square;