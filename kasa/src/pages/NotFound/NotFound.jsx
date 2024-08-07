import "../NotFound/NotFound.css"

export default function NotFound(props) {
    return (
        <main className="error">
            <h2 className="error-title"> 404 </h2 >
            <h3 className="error-subtitle">Oups! La page que vous demandez n'existe pas.</h3>
            <a className="error-redirection" href="/">Retourner sur la page d’accueil</a>
        </main>
    )



}
