import React from 'react'

const ComponenteA = ({comision, curso, alumnos, persona}) => {
    return (
        <div>
            <p>Curso: {curso}</p>
            <p>Comision: {comision}</p>
            <p>Estudiante: {persona.nombre} {persona.apellido}</p>
        </div>
    )
}

export default ComponenteA