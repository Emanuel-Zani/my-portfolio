import Layout from "@/components/Layout";
import { proyects } from "proyects.js";
import Card from "@/components/Card";

export default function Proyects() {
  console.log("Proyectos array", proyects);
  return (
    <Layout>
      <h1 className="text-center">Proyectos</h1>
      <div className="container row">
        {proyects.map((p) => (
          <Card 
          name={p.name}
          detail={p.detail}
          img={p.img}
          tec={p.tec}
          link={p.link}
          />
        ))}
      </div>
    </Layout>
  );
}
