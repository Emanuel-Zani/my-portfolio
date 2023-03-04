import Link from "next/link";

export default function Card({ name, detail, img, link, tec }) {
  return (
    <div
      className="container shadow p-3 mb-5 bg-white rounded "
      style={{ maxWidth: 450 }}
    >
      <h3>{name}</h3>
      <div className="container shadow-sm p-3 mb-5 bg-light rounded ">
        <img className="img-fluid" src={img} />
      </div>
      <div className="container mt-1 row">
        <div className="col-sm">
          <h5>Descripción</h5>
          <p>{detail}</p>
        </div>
      </div>
      <hr />
      <h5>Tecnologias</h5>
      <div className="container row">
        {tec.map((t) => (
          <div className="col-sm">
            <p>{t}</p>
          </div>
        ))}
      </div>
      <hr />
      <Link href={link}>
        <p>Link del proyecto</p>
      </Link>
    </div>
  );
}
