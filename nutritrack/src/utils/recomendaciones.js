// Calcula las recomendaciones de cuidado nutricional a partir de los datos
// del registro. Se mantiene separado del JSX para que la vista solo se
// encargue de mostrar, no de calcular.

export function calcularRecomendaciones(registro) {
    const recomendaciones = []

    const vasosAgua = Number(registro.vasosAgua)
    const calorias = Number(registro.calorias)
    const edad = Number(registro.edad)

    if (vasosAgua < 8) {
        const vasosFaltantes = 8 - vasosAgua
        recomendaciones.push(
            "Te faltaron " + vasosFaltantes + " vaso(s) de agua para llegar a los 8 recomendados. Intenta aumentar tu consumo de líquidos."
        )
    }

    if (calorias > 2500) {
        recomendaciones.push(
            "Tu consumo calórico fue de " + calorias + " kcal, por encima de lo habitual. Revisa el tamaño de tus porciones."
        )
    } else if (calorias < 1200) {
        recomendaciones.push(
            "Tu consumo calórico fue de " + calorias + " kcal, un valor bastante bajo. Evita saltarte comidas durante el día."
        )
    }

    if (registro.actividadFisica === "No") {
        recomendaciones.push(
            "No registraste actividad física hoy. Se recomienda realizar al menos 30 minutos de ejercicio."
        )
    }

    if (edad > 60) {
        recomendaciones.push(
            "Para personas mayores de 60 años se recomienda priorizar alimentos ricos en calcio y proteína, y mantener buena hidratación."
        )
    } else if (edad < 12) {
        recomendaciones.push(
            "Para niños es importante asegurar una alimentación variada, con frutas y verduras, y evitar el exceso de azúcares."
        )
    }

    // si no se disparó ninguna alerta, felicitamos al usuario
    if (recomendaciones.length === 0) {
        recomendaciones.push(
            "¡Buen trabajo! Tu registro de hoy se ve balanceado. Sigue manteniendo estos hábitos."
        )
    }

    return recomendaciones
}
