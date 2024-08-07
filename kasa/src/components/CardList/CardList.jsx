import "../Footer/Footer.css";
import Card from "../Card/Card"
import json from "../../json/logements.json"

export default function CardList() {
    return (
        <div className="main-container">
            {json.map((logement) => <Card logement={logement} />)}
        </div>
    );
}
