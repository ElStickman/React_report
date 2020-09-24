import React, { Component } from 'react';
import '../Css/FacultyReport.css';

var data = [{id:1, facultyName:'Nombre de Facultad', startDate:'2020-01-01'}]

function FacultyReport() {

    return (
        <>
        <h1>Reportes Facultad de Derecho</h1>
            <table id='FacultyReport'>
                <tr>
                    <th>
                        Programa
               </th>
                    <th>
                        Fecha de inicio
               </th>
                    <th>
                        Expectativas
               </th>
                    <th>
                        Encuesta General
               </th>
                    <th>
                        Encuesta de Salida
               </th>
                    <th>
                        Encuesta clases Zoom
               </th>
                </tr>
                {
                    data.map((data) =>{
                        return(
                        <tr>
                            <td>
                                {data.facultyName}
                            </td>
                            <td>
                                {data.startDate}
                            </td>
                            <td>
                                <i class="fas fa-book-reader"></i>
                            </td>
                        </tr>
                    )})
                }
            </table>
            <p>pencil 2</p>
        </>
    );

}

export default FacultyReport;