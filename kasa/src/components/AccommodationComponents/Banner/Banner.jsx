import "./Banner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons"
import { faChevronRight } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";




export default function Banner({ actualPicture }) {
    const [slidePosition, setSlidePosition] = useState(0)

    function slideForward() {
        const newPosition = slidePosition + 1
        if (newPosition <= actualPicture.length - 1) {
            setSlidePosition(newPosition)
        } else {
            setSlidePosition(0)
        }

    }

    function slideBackward() {
        const newPosition = slidePosition - 1

        if (newPosition > 0) {
            setSlidePosition(newPosition)
        } else {
            setSlidePosition(actualPicture.length - 1)
        }
    }


    return (
        <div className="image_container">
            <FontAwesomeIcon onClick={slideBackward} icon={faChevronLeft} />
            < img src={`${actualPicture[slidePosition]}`} alt={'Présentation du logement'} />
            <p> {slidePosition + 1}/{actualPicture.length}</p>
            <FontAwesomeIcon onClick={slideForward} icon={faChevronRight} />
        </div>
    );
}

