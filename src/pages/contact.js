import Layout from "@/components/Layout";
import Link from "next/link";
import Form from "@/components/Form";

export default function Contact() {
  return (
    <Layout>
      <div className="container ">
        <h1 className="text-center">Contacto</h1>
        <Form />
        <div className="container row  text-center">
          <hr style={{visibility: 'hidden'}}/>
          <hr style={{visibility: 'hidden'}}/>
          <h3 className="text-center">Redes</h3>
          <hr style={{visibility: 'hidden'}}/>
          <div className="container col-6">
            <Link style={{textDecoration: 'none'}} href="https://www.linkedin.com/in/emanuel-zani-929716145/">
              <h2>
                <i class="bi bi-linkedin"> </i>LinkedIn
              </h2>
            </Link>
          </div>
          <div className="container  col-6">
            <Link style={{textDecoration: 'none'}} href="https://github.com/Emanuel-Zani">
              <h2 >
                <i class="bi bi-github"> </i>GitHub
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  );
}
