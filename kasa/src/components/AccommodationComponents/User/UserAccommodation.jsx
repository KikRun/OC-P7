import "../User/UserAccommodation.css";

export default function UserAccommodation({ actualUser, actualProfilePicture }) {


    return <div className="user">
        <h5>{`${actualUser}`}</h5>
        <img src={`${actualProfilePicture}`} alt={`Profile de ${actualUser}`}></img>
    </div >

}