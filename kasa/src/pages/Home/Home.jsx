import "../Home/Home.css"
import imageBanner from "../../assets/IMG_header.png"

import CardList from "../../components/CardList/CardList"

export default function Home() {
    return <main>
        {/* Banner */}
        <div className="top-container">
            <img className='top-image' src={imageBanner} alt="Falaise au bord de l'océan"></img>
            <div className="top-title"><span>{`Chez vous,\xa0 `}</span><span>{"partout et ailleurs"}</span></div>
        </div>
        {/* CardList */}
        <CardList />
    </main>
}

