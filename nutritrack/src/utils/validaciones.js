// Reglas de validación manual para el formulario de registro de comidas.
// No se usa ninguna libreria de validacion, todo se resuelve con JavaScript.

const SOLO_LETRAS_Y_ESPACIOS = /^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/
const FORMATO_CORREO = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function validarCampo(nombreCampo, valorCampo) {

    if (nombreCampo === "nombre") {
        const valor = valorCampo.trim()
        if (valor === "") {
            return "El nombre es obligatorio."
        }
        if (valor.length < 3) {
            return "El nombre debe tener al menos 3 caracteres."
        }
        if (!SOLO_LETRAS_Y_ESPACIOS.test(valor)) {
            return "El nombre solo puede contener letras y espacios."
        }
        return ""
    }

    if (nombreCampo === "correo") {
        const valor = valorCampo.trim()
        if (valor === "") {
            return "El correo electrónico es obligatorio."
        }
        if (!FORMATO_CORREO.test(valor)) {
            return "El correo electrónico no tiene un formato válido."
        }
        return ""
    }

    if (nombreCampo === "edad") {
        if (valorCampo === "" || valorCampo === null) {
            return "La edad es obligatoria."
        }
        const numero = Number(valorCampo)
        if (!Number.isInteger(numero)) {
            return "La edad debe ser un número entero."
        }
        if (numero < 5 || numero > 100) {
            return "La edad debe ser un número entre 5 y 100."
        }
        return ""
    }

    if (nombreCampo === "peso") {
        if (valorCampo === "" || valorCampo === null) {
            return "El peso es obligatorio."
        }
        const numero = Number(valorCampo)
        if (Number.isNaN(numero)) {
            return "El peso debe ser un número válido."
        }
        if (numero < 20 || numero > 300) {
            return "El peso debe estar entre 20 y 300 kg."
        }
        const decimales = valorCampo.toString().split(".")[1]
        if (decimales && decimales.length > 1) {
            return "El peso solo admite un decimal."
        }
        return ""
    }

    if (nombreCampo === "fecha") {
        if (valorCampo === "") {
            return "La fecha del registro es obligatoria."
        }
        const hoy = new Date()
        hoy.setHours(0, 0, 0, 0)
        const fechaSeleccionada = new Date(valorCampo + "T00:00:00")
        if (fechaSeleccionada > hoy) {
            return "La fecha no puede ser posterior al día de hoy."
        }
        return ""
    }

    if (nombreCampo === "tipoComida") {
        if (valorCampo === "") {
            return "Debes seleccionar el tipo de comida."
        }
        return ""
    }

    if (nombreCampo === "descripcion") {
        const valor = valorCampo.trim()
        if (valor === "") {
            return "La descripción de los alimentos es obligatoria."
        }
        if (valor.length < 10 || valor.length > 200) {
            return "La descripción debe tener entre 10 y 200 caracteres."
        }
        return ""
    }

    if (nombreCampo === "calorias") {
        if (valorCampo === "" || valorCampo === null) {
            return "Las calorías estimadas son obligatorias."
        }
        const numero = Number(valorCampo)
        if (!Number.isInteger(numero)) {
            return "Las calorías deben ser un número entero."
        }
        if (numero < 100 || numero > 6000) {
            return "Las calorías deben ser un número entre 100 y 6000."
        }
        return ""
    }

    if (nombreCampo === "vasosAgua") {
        if (valorCampo === "" || valorCampo === null) {
            return "Los vasos de agua consumidos son obligatorios."
        }
        const numero = Number(valorCampo)
        if (!Number.isInteger(numero)) {
            return "Los vasos de agua deben ser un número entero."
        }
        if (numero < 0 || numero > 20) {
            return "Los vasos de agua deben ser un número entre 0 y 20."
        }
        return ""
    }

    if (nombreCampo === "actividadFisica") {
        if (valorCampo === "") {
            return "Debes indicar si realizaste actividad física."
        }
        return ""
    }

    return ""
}

// Valida el objeto de formulario completo y devuelve el objeto de errores
export function validarFormularioCompleto(formulario) {
    let errores = {}

    Object.keys(formulario).forEach(function (nombreCampo) {
        const mensaje = validarCampo(nombreCampo, formulario[nombreCampo], formulario)
        if (mensaje !== "") {
            errores[nombreCampo] = mensaje
        }
    })

    return errores
}
