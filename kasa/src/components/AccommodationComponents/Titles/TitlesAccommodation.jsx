import "../Titles/TitlesAccommodation.css";
import json from "../../../json/logements.json"




export default function TitlesAccommodation() {
    const actualUrl = document.location.href
    const actualId = actualUrl.split("/")[4]
    let actualTitle = ""
    let actualLocation = ""


    json.map((accommodation) => {
        if (accommodation.id === actualId) {
            actualTitle = accommodation.title
            actualLocation = accommodation.location
            return actualTitle + actualLocation
        } else {
            return false
        }
    })

    return <div className="title-and-subtitle">
        <h2 className="title">{`${actualTitle}`}</h2>
        <h3>{`${actualLocation}`}</h3>
    </div>
}

