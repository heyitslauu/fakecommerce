import PropTypes from "prop-types";
import GameCard from "../components/GameCard";

function GameSection({ games, headerTitle}) {
  return (
    <div className="w-full lg:w-4/5 mx-auto text-white py-4">
      <p className="uppercase text-3xl font-black">{headerTitle}</p>
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-y-4 gap-x-4 pt-2 ">
        {
          games.map((game, index) => (
            <GameCard key={index} {...game} />
          ))
        }
      </div>
    </div>
  )
}

GameSection.propTypes = {
  games: PropTypes.array,
  headerTitle: PropTypes.string
}

export default GameSection;