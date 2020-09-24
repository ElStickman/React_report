import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Css/App.css'

var tabladatos = []
function Table({ data }) {
    data.pregunta.forEach( function(pregunta, indice, array) {
        data.pregunta[indice] = data.pregunta[indice].replace(/\./gi, " ")
        data.pregunta[indice] = data.pregunta[indice].replace("De acuerdo a tu experiencia", "De acuerdo a tu experiencia, ¿")
        if (data.pregunta[indice].includes("X")) {
            data.pregunta[indice] = data.pregunta[indice].concat("?")
         }
        data.pregunta[indice] = data.pregunta[indice].replace("X ", "¿")
        data.pregunta[indice] = data.pregunta[indice].replace("X", "¿")
        data.pregunta[indice] = data.pregunta[indice].replace(" ?", "?")
        data.pregunta[indice] = data.pregunta[indice].replace(" ¿", "¿")
        //console.log(data.pregunta[indice]);
        if (data.promedio[indice]) {
            tabladatos[indice] = (
                <tr>
                    <td>{data.pregunta[indice]}</td>
                    <td>{data.promedio[indice]}</td>
                    <td>{data.detractores[indice]}</td>
                    <td>{data.promotores[indice]}</td>
                    <td>{data.isns[indice]}</td>
                </tr>
            )
        }
    })

    return (
        

        <div className='table-responsive'>
            <p>En una escala de 1 a 7, donde 1 es "Muy Insatisfecho" y 7 es "Muy Satisfecho"</p>
            <table className='table table-striped'>
                <thead className='bg-primary'>
                    <th>Pregunta</th>

                    <th>Promedio</th>
                    <th>Detractores</th>
                    <th>Promotores</th>
                    <th>ISN</th>
                </thead>

                <tbody>
                {tabladatos}

                </tbody>
            </table>
        </div>

    );

}

export default Table;