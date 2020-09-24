import React from 'react';

const ComentariosGenerales = ({data}) => {
 
        return (
                <div className = 'body'>
                        <h1>COMENTARIOS GENERALES DE LOS ALUMNOS</h1>
                        
                        <p>¿Cómo evalúas el nivel de exigencia en el programa</p>
                        <p className = 'respuestaComentario'>{data.exigencia}</p>

                        <p>Cuéntanos: ¿Qué fue lo más relevante para ti durante el desarrollo del programa?</p>
                        <p className = 'respuestaComentario'>{data.relevancia}</p>

                        <p>Déjanos tus comentarios y o sugerencias</p>
                        <p className = 'respuestaComentario'>{data.sugerencia}</p>
                </div>

        )
}

export default ComentariosGenerales;