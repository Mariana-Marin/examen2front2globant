import fotoMariana from '../../assets/mariana-marin.png'
import fotoJhon from '../../assets/jhon-castrillon.png'
import '../../styles/estilos.css'

const programadores = [
    {
        nombre: "Mariana Marin",
        foto: fotoMariana,
        grupoPrograma: "Globant-CESDE",
        institucion: "CESDE",
        anio: "2026",
        usuarioGitHub: "Mariana-Marin",
        urlGitHub: "https://github.com/Mariana-Marin",
        descripcion: "TAE en Análisis y Desarrollo de Software, enfocada en construir interfaces claras y funcionales. Trabaja principalmente con JavaScript, React, HTML5 y CSS3, y viene explorando Vite y React Router para armar aplicaciones de una sola página."
    },
    {
        nombre: "Jhon Castrillon",
        foto: fotoJhon,
        grupoPrograma: "Globant-CESDE",
        institucion: "CESDE",
        anio: "2026",
        usuarioGitHub: "JhonCastrillon",
        urlGitHub: "https://github.com/JhonCastrillon",
        descripcion: "TAE en Análisis y Desarrollo de Software, interesado en el desarrollo front-end y la lógica de negocio en JavaScript. Maneja React, HTML5, CSS3 y se encuentra reforzando el manejo de formularios controlados y validaciones manuales."
    }
]

export function AcercaDe() {
    return (
        <main className="contenedor-pagina">
            <section className="tarjeta-formulario">

                <h1>Acerca de</h1>
                <p className="texto-introductorio">
                    NutriTrack fue desarrollada por los siguientes estudiantes.
                </p>

                <div className="lista-perfiles">
                    {programadores.map(function (persona) {
                        return (
                            <article className="tarjeta-perfil" key={persona.usuarioGitHub}>
                                <img
                                    src={persona.foto}
                                    alt={"Foto de " + persona.nombre}
                                    className="foto-perfil"
                                />

                                <h2>{persona.nombre}</h2>
                                <p><strong>Grupo y programa:</strong> {persona.grupoPrograma}</p>
                                <p><strong>Institución:</strong> {persona.institucion}</p>
                                <p><strong>Año:</strong> {persona.anio}</p>
                                <p>
                                    <strong>GitHub:</strong>{" "}
                                    <a href={persona.urlGitHub} target="_blank" rel="noreferrer">
                                        @{persona.usuarioGitHub}
                                    </a>
                                </p>
                                <p className="descripcion-perfil">{persona.descripcion}</p>
                            </article>
                        )
                    })}
                </div>

            </section>
        </main>
    )
}
