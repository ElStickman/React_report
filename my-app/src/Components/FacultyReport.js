import React, { Component } from 'react';
import '../Css/FacultyReport.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookReader, faUserGraduate, faCheckSquare, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

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
                                <FontAwesomeIcon icon={faBookReader}></FontAwesomeIcon>
                            </td>
                            <td>
                                <FontAwesomeIcon icon={faUserGraduate}></FontAwesomeIcon>
                            </td>
                            <td>
                                <FontAwesomeIcon icon= {faCheckSquare}></FontAwesomeIcon>
                            </td>
                            <td>
                            <FontAwesomeIcon icon= {faMobileAlt}></FontAwesomeIcon>
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