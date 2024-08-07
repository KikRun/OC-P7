import "./Header.css"
import Logo from "../../assets/LOGO_Desk.svg"

export default function HeaderFooter() {
    return (
        <header className="header">
            <img src={Logo} alt="Logo Kasa"></img>
            <nav className="nav">
                <a href="/">Accueil</a>
                <a href="/a-propos">A propos</a>
            </nav>
        </header>)
}

