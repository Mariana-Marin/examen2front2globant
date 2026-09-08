import { NavLink } from 'react-router-dom'
import '../../styles/estilos.css'

export function Menu() {

    function claseEnlace({ isActive }) {
        return isActive ? "enlace-menu enlace-activo" : "enlace-menu"
    }

    return (
        <header className="encabezado">
            <div className="encabezado-contenedor">

                <NavLink to="/" className="marca-menu">
                    <span className="logo-menu" aria-hidden="true">🥗</span>
                    NutriTrack
                </NavLink>

                <nav aria-label="Menu principal">
                    <ul className="lista-menu">
                        <li>
                            <NavLink to="/" className={claseEnlace}>
                                Registro
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/acerca-de" className={claseEnlace}>
                                Acerca de
                            </NavLink>
                        </li>
                    </ul>
                </nav>

            </div>
        </header>
    )
}
