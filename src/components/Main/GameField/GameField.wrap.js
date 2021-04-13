import GameField from './GameField.js';
import { connect } from 'react-redux'; 

function GameFieldWrap (){

    return (
        <GameField cards={cards} handleCards={handleCards} />
    );
}

const actionCards = {
    setActionCards : "setCards"
}

export default connect(null, actionCards) (GameFieldWrap);