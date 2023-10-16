import PropTypes from "prop-types"

function GameCard ({name, alt, src}) {
  return (
    <div className="text-white bg-secondary rounded-lg">
      <img src={src} alt={alt} className="w-full rounded-t-lg"/>
      <div className="px-4 py-2">
        <h1 className="text-center font-medium text-xl md:text-lg">{name}</h1>
      </div>
    </div>
  )
}

GameCard.propTypes = {
  name: PropTypes.string,
  alt: PropTypes.string,
  src: PropTypes.string
}


export default GameCard;