

export default function Card({ logement }) {
  return (
    <section className="main-card">
      <a id={`${logement.id}`} href={`/Accommodation/${logement.id}`}>
        <h6>{logement.title}</h6>
        <img src={`${logement.cover}`} alt={`Présentation du logement : ${logement.title}`}></img>
      </a>
    </section >
  );
}
