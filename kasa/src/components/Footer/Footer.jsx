import "../Footer/Footer.css";
import Logo from "../../assets/LOGO_white.svg"

export default function Footer() {
    return <footer className="footer">
        <img src={Logo} alt="Logo Kasa" ></img>
        <p>@2020 Kasa. All rights reserved</p>
    </footer>
}