// Componente reutilizable para envolver un campo del formulario:
// pinta la etiqueta, el control (recibido como children) y el error debajo.

export function CampoFormulario({ etiqueta, idCampo, error, children }) {
    return (
        <div className={"campo-formulario" + (error ? " campo-con-error" : "")}>
            <label htmlFor={idCampo} className="etiqueta-campo">
                {etiqueta}
            </label>

            {children}

            {error &&
                <p className="mensaje-error" role="alert">
                    {error}
                </p>
            }
        </div>
    )
}
