import Layout from "@/components/Layout";
import React from "react";
import { skills } from "proyects.js";
export default function Home() {
  console.log("skills", skills);
  return (
    <Layout>
      <div className="container text-center">
        <h1 className="text-center " style={{ fontSize: 60 }}>
          Emanuel Zani
        </h1>
        <h2 style={{ margin: 50 }}>Web Developer</h2>
        <div className="container text-center">
          <h3 className="text-info" >Perfil</h3>
          <p className="text-center text-secondary" style={{ fontSize: 20 }}>
            Full Stack Developer con formación en SoyHenry y en Egg Educaciones,
            con experiencia trabajando con React, Next Js, Javacript, Node Js,
            Redux, My Sql, PostgreSQL, Bootstrap, HTML y CSS. Tuve experiencia
            creando proyectos propios y proyectos en equipo. Con aprendizaje
            rápido, resolución de problemas, comunicación, trabajo en equipo y
            autonomía.
          </p>
        </div>
        <div className="row ">
          <div className=" col-md-4 ">
            <h3 className="text-info">Experiencia</h3>
            <div className="container border rounded" style={{ padding: 20 }}>
              <h4>Programador full stack (académica)</h4>
              <h6>sept 2022 - feb 2023</h6>
              <p>
                Complete el bootcamp Soy Henry Full-Stack Developer, el cual
                consta de un curso intensivo con más de 800hs de práctica y
                aprendizaje. En el mismo tuve que aprobar cuatro módulos y luego
                dos proyectos, un proyecto individual y un proyecto grupal.
              </p>
              <p>- Proyecto Individual (PI) - Wikigames</p>
              <p>- Proyecto Final (PF) - Novelty Books</p>
              <h5>Aptitudes</h5>
              <p>
                React.js · Next.js · JavaScript · Redux.js · Express.js ·
                Node.js · Sequelize.js · PostgreSQL · HTML · GitHub · Hojas de
                estilos en cascada (CSS) · Bootstrap
              </p>
            </div>
          </div>
          <div className="col-md-8">
            <h3 className="text-info">Habilidades</h3>
            <div className="container ">
              {skills.map((s) => (
                <div className="row text-center mt-2">
                  <h6 className="">
                    -{s.skill}{" "}
                    <img
                      style={{ maxWidth: 45, maxHeight: 30 }}
                      className="rounded img-thumbnail"
                      src={s.img}
                    />
                  </h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
