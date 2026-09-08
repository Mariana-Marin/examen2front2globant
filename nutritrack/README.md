# NutriTrack

Registro diario de alimentación construido con React, Vite y React Router DOM.

## Estudiantes

* Mariana Marin
* Jhon Castrillon
* **Grupo:** Globant-CESDE

## Descripción de la aplicación

NutriTrack permite registrar lo que una persona consumió durante el día
mediante un formulario controlado de 10 campos, con validación manual (sin
librerías) que impide enviar datos incompletos o con formato inválido.

Al enviar un registro válido, la aplicación navega automáticamente a una
vista de **cuidado nutricional** con el resumen del registro y
recomendaciones calculadas a partir de los datos (hidratación, calorías,
actividad física y edad). También incluye una vista **Acerca de** con la
información de los programadores.

## Instalación y ejecución

```bash
npm install
npm run dev
```

La aplicación queda disponible en `http://localhost:5173`.

Para generar el build de producción:

```bash
npm run build
npm run preview
```

## Rutas

| Ruta                   | Vista                 |
| ----------------------- | --------------------- |
| `/`                     | Registro de comidas   |
| `/cuidado-nutricional`  | Cuidado nutricional   |
| `/acerca-de`            | Acerca de             |
| `*`                     | Página no encontrada  |

## Campos del formulario y reglas de validación

| # | Campo | Reglas |
| - | ----- | ------ |
| 1 | Nombre completo | Obligatorio, mínimo 3 caracteres, solo letras y espacios. |
| 2 | Correo electrónico | Obligatorio, formato `texto@dominio.extension`. |
| 3 | Edad | Obligatorio, número entero entre 5 y 100. |
| 4 | Peso (kg) | Obligatorio, número entre 20 y 300, máximo un decimal. |
| 5 | Fecha del registro | Obligatorio, no puede ser una fecha futura. |
| 6 | Tipo de comida principal | Obligatorio, Desayuno / Almuerzo / Cena / Refrigerio. |
| 7 | Descripción de los alimentos | Obligatorio, entre 10 y 200 caracteres. |
| 8 | Calorías estimadas | Obligatorio, número entero entre 100 y 6000. |
| 9 | Vasos de agua consumidos | Obligatorio, número entero entre 0 y 20. |
| 10 | Actividad física | Obligatorio, Sí o No. |

## Funcionalidades adicionales implementadas

* Validación en tiempo real (`onBlur` y mientras se escribe una vez el campo fue tocado).
* Persistencia del último registro en `localStorage`.
* Ruta `*` con página 404 propia.
* Diseño adaptable a dispositivos móviles.
* Aplicación desplegada en GitHub Pages: **https://mariana-marin.github.io/examen2front2globant/**
