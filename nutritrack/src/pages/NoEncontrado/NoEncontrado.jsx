import { Link } from 'react-router-dom'
import '../../styles/estilos.css'

export function NoEncontrado() {
    return (
        <main className="contenedor-pagina">
            <section className="tarjeta-formulario tarjeta-centrada">
                <h1>404</h1>
                <p>La página que buscas no existe.</p>
                <Link to="/" className="boton-principal boton-enlace">
                    Volver al inicio
                </Link>
            </section>
        </main>
    )
}
