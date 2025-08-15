import { moves } from "./data.js";
import PokeMoveCard from "./PokeMoveCard.js";

const PokeMoves = () => {
  return (
    <div>
      <h1>PokeMoves</h1>
      <ul>
        {moves.map((move) => (
          <PokeMoveCard key={move.id} {...move}>
            {move.id}.{move.move}
          </PokeMoveCard>
        ))}
      </ul>
    </div>
  );
};

export default PokeMoves;
