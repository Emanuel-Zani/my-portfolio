import Link from "next/link";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary ">
      <button
        class="navbar-toggler m-3"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item m-3">
            <Link class="nav-link " href="/">
              <i class="bi bi-house-door"> </i>
              Perfil
            </Link>
          </li>
          <li class="nav-item m-3">
            <Link class="nav-link" href="/proyects">
              <i class="bi bi-journals"> </i>
              Proyectos
            </Link>
          </li>
          <li class="nav-item m-3">
            <Link class="nav-link" href="/contact">
              <i class="bi bi-envelope"> </i>
              Contacto
            </Link>
          </li>
          
        </ul>
      </div>
    </nav>
  );
}
