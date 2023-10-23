import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

function Header() {
 return (
  <div className="bg-secondary text-white py-4 px-4">
    <div className="w-11/12 mx-auto ">
      <div className="flex items-center  justify-between">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faBars} className="text-xl cursor-pointer"/>
          <Link to="/"><h1 className="font-bold text-xl">Game Shop</h1></Link>
        </div>
        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="text-xl"/>
          <Link to="/signup" className="bg-accent cursor-pointer rounded-2xl px-4 py-1 font-medium">Sign Up</Link>
        </div>
      </div>
    </div>
  </div>
 )
}

export default Header;