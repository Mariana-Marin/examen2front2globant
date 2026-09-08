import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { CampoFormulario } from '../../components/CampoFormulario/CampoFormulario'
import { validarCampo, validarFormularioCompleto } from '../../utils/validaciones'
import '../../styles/estilos.css'

const CLAVE_LOCAL_STORAGE = "nutritrack_ultimo_registro"

const formularioVacio = {
    nombre: "",
    correo: "",
    edad: "",
    peso: "",
    fecha: "",
    tipoComida: "",
    descripcion: "",
    calorias: "",
    vasosAgua: "",
    actividadFisica: ""
}

export function RegistroComidas() {

    const navegar = useNavigate()

    const [formulario, setFormulario] = useState(formularioVacio)
    const [errores, setErrores] = useState({})
    const [camposTocados, setCamposTocados] = useState({})

    // Al montar la vista, si hay un registro guardado en localStorage lo
    // recuperamos para que el usuario no pierda lo que ya había escrito
    useEffect(function () {
        const registroGuardado = localStorage.getItem(CLAVE_LOCAL_STORAGE)
        if (registroGuardado) {
            try {
                setFormulario(JSON.parse(registroGuardado))
            } catch {
                // si el dato guardado esta corrupto simplemente lo ignoramos
            }
        }
    }, [])

    function manejarCambios(evento) {
        const nombreCampo = evento.target.name
        const valorCampo = evento.target.value

        const nuevoFormulario = {
            ...formulario,
            [nombreCampo]: valorCampo
        }

        setFormulario(nuevoFormulario)
        localStorage.setItem(CLAVE_LOCAL_STORAGE, JSON.stringify(nuevoFormulario))

        // validacion en tiempo real: solo mostramos el error si el campo
        // ya fue tocado antes (para no bombardear de errores al empezar)
        if (camposTocados[nombreCampo]) {
            setErrores({
                ...errores,
                [nombreCampo]: validarCampo(nombreCampo, valorCampo, nuevoFormulario)
            })
        }
    }

    function manejarSalidaDeCampo(evento) {
        const nombreCampo = evento.target.name
        const valorCampo = evento.target.value

        setCamposTocados({
            ...camposTocados,
            [nombreCampo]: true
        })

        setErrores({
            ...errores,
            [nombreCampo]: validarCampo(nombreCampo, valorCampo, formulario)
        })
    }

    function manejarEnvio(evento) {
        evento.preventDefault()

        const nuevosErrores = validarFormularioCompleto(formulario)
        setErrores(nuevosErrores)

        // marcamos todos los campos como tocados para que se vean los errores
        const todosTocados = {}
        Object.keys(formulario).forEach(function (nombreCampo) {
            todosTocados[nombreCampo] = true
        })
        setCamposTocados(todosTocados)

        if (Object.keys(nuevosErrores).length > 0) {
            // hay errores: no navegamos, nos quedamos en el formulario
            const primerCampoConError = document.getElementById(Object.keys(nuevosErrores)[0])
            if (primerCampoConError) {
                primerCampoConError.scrollIntoView({ behavior: "smooth", block: "center" })
            }
            return
        }

        localStorage.setItem(CLAVE_LOCAL_STORAGE, JSON.stringify(formulario))
        navegar("/cuidado-nutricional", { state: formulario })
    }

    return (
        <main className="contenedor-pagina">
            <section className="tarjeta-formulario">

                <h1>Registro diario de alimentación</h1>
                <p className="texto-introductorio">
                    Cuéntanos qué consumiste hoy para poder darte recomendaciones
                    de cuidado nutricional. Todos los campos son obligatorios.
                </p>

                <form onSubmit={manejarEnvio} noValidate>

                    <CampoFormulario etiqueta="Nombre completo" idCampo="nombre" error={errores.nombre}>
                        <input
                            type="text"
                            id="nombre"
                            name="nombre"
                            value={formulario.nombre}
                            onChange={manejarCambios}
                            onBlur={manejarSalidaDeCampo}
                            placeholder="Ej: Laura Gómez"
                        />
                    </CampoFormulario>

                    <CampoFormulario etiqueta="Correo electrónico" idCampo="correo" error={errores.correo}>
                        <input
                            type="email"
                            id="correo"
                            name="correo"
                            value={formulario.correo}
                            onChange={manejarCambios}
                            onBlur={manejarSalidaDeCampo}
                            placeholder="ejemplo@correo.com"
                        />
                    </CampoFormulario>

                    <div className="fila-doble">
                        <CampoFormulario etiqueta="Edad" idCampo="edad" error={errores.edad}>
                            <input
                                type="number"
                                id="edad"
                                name="edad"
                                value={formulario.edad}
                                onChange={manejarCambios}
                                onBlur={manejarSalidaDeCampo}
                                placeholder="Años"
                            />
                        </CampoFormulario>

                        <CampoFormulario etiqueta="Peso (kg)" idCampo="peso" error={errores.peso}>
                            <input
                                type="number"
                                step="0.1"
                                id="peso"
                                name="peso"
                                value={formulario.peso}
                                onChange={manejarCambios}
                                onBlur={manejarSalidaDeCampo}
                                placeholder="Ej: 68.5"
                            />
                        </CampoFormulario>
                    </div>

                    <CampoFormulario etiqueta="Fecha del registro" idCampo="fecha" error={errores.fecha}>
                        <input
                            type="date"
                            id="fecha"
                            name="fecha"
                            value={formulario.fecha}
                            onChange={manejarCambios}
                            onBlur={manejarSalidaDeCampo}
                        />
                    </CampoFormulario>

                    <CampoFormulario etiqueta="Tipo de comida principal" idCampo="tipoComida" error={errores.tipoComida}>
                        <select
                            id="tipoComida"
                            name="tipoComida"
                            value={formulario.tipoComida}
                            onChange={manejarCambios}
                            onBlur={manejarSalidaDeCampo}
                        >
                            <option value="">Selecciona una opción</option>
                            <option value="Desayuno">Desayuno</option>
                            <option value="Almuerzo">Almuerzo</option>
                            <option value="Cena">Cena</option>
                            <option value="Refrigerio">Refrigerio</option>
                        </select>
                    </CampoFormulario>

                    <CampoFormulario etiqueta="Descripción de los alimentos" idCampo="descripcion" error={errores.descripcion}>
                        <textarea
                            id="descripcion"
                            name="descripcion"
                            value={formulario.descripcion}
                            onChange={manejarCambios}
                            onBlur={manejarSalidaDeCampo}
                            rows={3}
                            placeholder="Ej: Arroz, pollo a la plancha, ensalada y jugo natural"
                        />
                    </CampoFormulario>

                    <div className="fila-doble">
                        <CampoFormulario etiqueta="Calorías estimadas del día" idCampo="calorias" error={errores.calorias}>
                            <input
                                type="number"
                                id="calorias"
                                name="calorias"
                                value={formulario.calorias}
                                onChange={manejarCambios}
                                onBlur={manejarSalidaDeCampo}
                                placeholder="Ej: 1800"
                            />
                        </CampoFormulario>

                        <CampoFormulario etiqueta="Vasos de agua consumidos" idCampo="vasosAgua" error={errores.vasosAgua}>
                            <input
                                type="number"
                                id="vasosAgua"
                                name="vasosAgua"
                                value={formulario.vasosAgua}
                                onChange={manejarCambios}
                                onBlur={manejarSalidaDeCampo}
                                placeholder="Ej: 6"
                            />
                        </CampoFormulario>
                    </div>

                    <CampoFormulario etiqueta="¿Realizó actividad física?" idCampo="actividadFisica" error={errores.actividadFisica}>
                        <div className="grupo-radios" id="actividadFisica">
                            <label className="opcion-radio">
                                <input
                                    type="radio"
                                    name="actividadFisica"
                                    value="Si"
                                    checked={formulario.actividadFisica === "Si"}
                                    onChange={manejarCambios}
                                    onBlur={manejarSalidaDeCampo}
                                />
                                Sí
                            </label>

                            <label className="opcion-radio">
                                <input
                                    type="radio"
                                    name="actividadFisica"
                                    value="No"
                                    checked={formulario.actividadFisica === "No"}
                                    onChange={manejarCambios}
                                    onBlur={manejarSalidaDeCampo}
                                />
                                No
                            </label>
                        </div>
                    </CampoFormulario>

                    <button type="submit" className="boton-principal">
                        Registrar y ver recomendaciones
                    </button>

                </form>

            </section>
        </main>
    )
}
