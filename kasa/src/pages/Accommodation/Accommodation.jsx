import "../Accommodation/Accommodation.css"
import Banner from "../../components/AccommodationComponents/Banner/Banner"
import Titles from "../../components/AccommodationComponents/Titles/TitlesAccommodation"
import User from "../../components/AccommodationComponents/User/UserAccommodation"
import TagList from "../../components/AccommodationComponents/TagList/TagList"
import TextCollapse from "../../components/TextCollapse/TextCollapse"
import { Navigate, useParams, useLocation, } from "react-router-dom"
import json from "../../json/logements.json"
import Stars from "../../components/AccommodationComponents/Stars/Stars"


export default function Accommodation() {
    const { id } = useParams()
    const accommodation = json.find((item) => item.id === id)

    let location = useLocation();

    if (!accommodation) {
        console.log("wrong url")
        console.log(accommodation)
        console.log(location)
        return <Navigate to="/home" state={{ from: location }} replace />
    }

    return (<main>
        <Banner actualPicture={accommodation.pictures} />

        <section className="titles">
            <div>
                <Titles />
                <TagList actualTags={accommodation.tags} actualId={accommodation.id} />
            </div>

            <div className="titles_infos">
                <User actualUser={accommodation.host.name} actualProfilePicture={accommodation.host.picture} />
                <Stars rating={accommodation.rating} />
            </div>
        </section>

        <div className="informations">
            <TextCollapse title="Description" content={accommodation.description}></TextCollapse>
            <TextCollapse title="Équipements" content={accommodation.equipments}></TextCollapse>
        </div>
    </main>)
}
