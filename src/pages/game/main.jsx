import styled from 'styled-components';
import GameContainer from "../../components/game/GameContainer";


const game = () => (
    <Main>
        <h1>Welcome to the memory game</h1>
        <GameContainer/>
    </Main>
)


export const Main = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export default game;

