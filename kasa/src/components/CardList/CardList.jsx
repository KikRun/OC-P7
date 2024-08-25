import Card from "../Card/Card"
import json from "../../json/logements.json"

export default function CardList() {
    return (
        <div className="main-container">
            {json.map((logement, index) => <Card key={index} logement={logement} />)}
        </div>
    );
}
