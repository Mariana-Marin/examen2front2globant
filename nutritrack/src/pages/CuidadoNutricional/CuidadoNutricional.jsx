import { useLocation, Link } from 'react-router-dom'
import { calcularRecomendaciones } from '../../utils/recomendaciones'
import '../../styles/estilos.css'

const ETIQUETAS_TIPO_COMIDA = {
    tipoComida: "Tipo de comida principal",
    descripcion: "Descripción de los alimentos",
    calorias: "Calorías estimadas",
    vasosAgua: "Vasos de agua consumidos",
    actividadFisica: "Actividad física realizada"
}

export function CuidadoNutricional() {

    const { state } = useLocation()

    // si el usuario entra directo a esta ruta sin haber llenado el
    // formulario, "state" viene vacío y mostramos un mensaje en vez de
    // romper la vista
    if (!state) {
        return (
            <main className="contenedor-pagina">
                <section className="tarjeta-formulario tarjeta-centrada">
                    <h1>Aún no hay un registro</h1>
                    <p>
                        Todavía no has diligenciado el formulario de comidas de hoy.
                    </p>
                    <Link to="/" className="boton-principal boton-enlace">
                        Ir al formulario
                    </Link>
                </section>
            </main>
        )
    }

    const registro = state
    const recomendaciones = calcularRecomendaciones(registro)

    return (
        <main className="contenedor-pagina">
            <section className="tarjeta-formulario">

                <h1>Hola, {registro.nombre.split(" ")[0]} 👋</h1>
                <p className="texto-introductorio">
                    Este es el resumen de tu registro del {registro.fecha} y las
                    recomendaciones de cuidado nutricional para ti.
                </p>

                <h2>Resumen del registro</h2>
                <ul className="lista-resumen">
                    <li><strong>Nombre:</strong> {registro.nombre}</li>
                    <li><strong>Correo:</strong> {registro.correo}</li>
                    <li><strong>Edad:</strong> {registro.edad} años</li>
                    <li><strong>Peso:</strong> {registro.peso} kg</li>
                    <li><strong>Fecha del registro:</strong> {registro.fecha}</li>
                    <li><strong>{ETIQUETAS_TIPO_COMIDA.tipoComida}:</strong> {registro.tipoComida}</li>
                    <li><strong>{ETIQUETAS_TIPO_COMIDA.descripcion}:</strong> {registro.descripcion}</li>
                    <li><strong>{ETIQUETAS_TIPO_COMIDA.calorias}:</strong> {registro.calorias} kcal</li>
                    <li><strong>{ETIQUETAS_TIPO_COMIDA.vasosAgua}:</strong> {registro.vasosAgua}</li>
                    <li><strong>{ETIQUETAS_TIPO_COMIDA.actividadFisica}:</strong> {registro.actividadFisica === "Si" ? "Sí" : "No"}</li>
                </ul>

                <h2>Recomendaciones para ti</h2>
                <ul className="lista-recomendaciones">
                    {recomendaciones.map(function (recomendacion, indice) {
                        return (
                            <li key={indice}>{recomendacion}</li>
                        )
                    })}
                </ul>

                <Link to="/" className="boton-principal boton-enlace">
                    Hacer un nuevo registro
                </Link>

            </section>
        </main>
    )
}
