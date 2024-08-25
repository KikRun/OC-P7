import imageBanner from "../../assets/IMG_header_2.png"
import TextCollapse from "../../components/TextCollapse/TextCollapse.jsx"
import json from "../../json/apropos.json"
import "../APropos/APropos.css"


export default function APropos() {
    return <main>
        < div className="top-container" >
            <img className="top-image" src={imageBanner} alt="Falaise au bord e l'océan"></img>
        </div >
        <div className="text_container">
            {json.map((item) => <TextCollapse title={item.title} content={item.text}></TextCollapse>)}
        </div>
    </main>
} 