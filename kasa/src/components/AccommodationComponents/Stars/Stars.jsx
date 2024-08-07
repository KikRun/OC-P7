import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import "./Stars.css"

export default function Stars({ rating }) {

    const totalStars = 5
    const stars = Array.from(Array(totalStars).keys()).map((value, index) => <FontAwesomeIcon key={index} icon={faStar} className={index < rating ? "star_red" : "star_grey"} />)

    return (<div className="star_container">
        {stars}
    </div>)
}