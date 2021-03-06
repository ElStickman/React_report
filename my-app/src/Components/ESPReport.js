import React, { useEffect, useState } from 'react';
import '../Css/App.css';
import ComentariosGenerales from './ComentariosGenerales.js';
import Donut from './Donut.js';
import SummaryHeader from './SummaryHeader.js';
import Table from './Table.js'

var dataJson = require('../data/2020-09-11_2020-09-11_ESP.json');

//1418
const ESPReport = () => {

  const [processedJsonData, setData] = useState(null)
  useEffect(() => {
    let processedJsonData_1 = []
    for (const record in dataJson) {

      var dates = dataJson[record]
      for (const date in dates) {
        var distribucionNPS = dates[date].distribucion['X.Qué.tan.probable.es.que.recomiendes.este.programa.a.un.amigo.o.conocido.']
        var detractoresNPS = 0
        var neutrosNPS = 0
        var promotoresNPS = 0
        for (const respuestas in distribucionNPS) {
          if (distribucionNPS[respuestas].x <= 6) {
            detractoresNPS = detractoresNPS + distribucionNPS[respuestas].Freq
          }
          if (distribucionNPS[respuestas].x > 6 && distribucionNPS[respuestas].x <= 8) {
            neutrosNPS = neutrosNPS + distribucionNPS[respuestas].Freq
          }
          if (distribucionNPS[respuestas].x > 8 && distribucionNPS[respuestas].x <= 10) {
            promotoresNPS = promotoresNPS + distribucionNPS[respuestas].Freq
          }
        }
        var donutDataNPS = {
          labels: [
            'Detractores',
            'Neutros',
            'Promotores'
          ],
          data: [detractoresNPS, neutrosNPS, promotoresNPS],
          titulo: 'NPS'
        }
        var distribucionISN = dates[date].distribucion['De.acuerdo.a.tu.experiencia..Cuál.es.tu.nivel.general.de.satisfacción.con.el.programa.académico.que.realizaste.en.la.UAI.']
        var detractoresISN = 0
        var neutrosISN = 0
        var promotoresISN = 0
        for (const respuestas in distribucionISN) {

          if (distribucionISN[respuestas].x <= 4) {
            detractoresISN = detractoresISN + distribucionISN[respuestas].Freq
          }
          if (distribucionISN[respuestas].x > 4 && distribucionISN[respuestas].x <= 5) {
            neutrosISN = neutrosISN + distribucionISN[respuestas].Freq
          }
          if (distribucionISN[respuestas].x > 5 && distribucionISN[respuestas].x <= 7) {
            promotoresISN = promotoresISN + distribucionISN[respuestas].Freq
          }
        }
        var donutDataISN = {
          labels: [
            'Detractores',
            'Neutros',
            'Promotores'
          ],
          data: [detractoresISN, neutrosISN, promotoresISN],
          titulo: 'ISN'
        }

        var preguntas = dates[date].preguntas
        var isns = dates[date]['isn.nps']
        var promotores = dates[date].promotores
        var detractores = dates[date].detractores
        var promedioObject = dates[date].avgPorPregunta[0]
        
        var promedios = []
        for (const pregunta in promedioObject) {
          promedios.push(promedioObject[pregunta])
        }
        
        var preguntaNivelExigencia = dates[date].valoresTexto['X.Cómo.evalúas.el.nivel.de.exigencia.en.el.programa.']
        var respuestasNivelExigencia = []
        preguntaNivelExigencia.forEach(respuestaNivelExigencia => {
          respuestasNivelExigencia.push(respuestaNivelExigencia)
        })

        var preguntaRelevancia = dates[date].valoresTexto['Cuéntanos...Qué.fue.lo.más.relevante.para.ti.durante.el.desarrollo.del.programa.']
        var respuestasRelevancia = []
        preguntaRelevancia.forEach(respuestaRelevancia => {
          respuestasRelevancia.push(respuestaRelevancia)
        })
          
        var preguntaSugerencia = dates[date].valoresTexto['Déjanos.tus.comentarios.y.o.sugerencias']
        var respuestasSugerencia = []
        preguntaSugerencia.forEach(respuestaSugerencia => {
          respuestasSugerencia.push(respuestaSugerencia)
        })
         
        var respuestasComentarios = { exigencia: respuestasNivelExigencia,
                                      relevancia: respuestasRelevancia,
                                      sugerencia: respuestasSugerencia
                                    }

        var tableData = { pregunta: preguntas,
                          promedio: promedios, 
                          detractores: detractores, 
                          neutros: [], 
                          promotores: promotores, 
                          isns: isns 
                        }

        var ratio = Math.round(dates[date]['tasaRespuesta'] * 100) + '%'
        var answers = dates[date]['respuestas']

        var headerData = {facultyName: dates[date].facultad[0],
                          cohortName: dates[date].nombre[0], surveyDate: date, 
                          totalStudents: dates[date].matriculados[0], 
                          totalRespondents: answers, 
                          ratioStudentsRespondents: ratio
                         }

        processedJsonData_1.push({id: record,
                                  donutNPS: donutDataNPS, 
                                  donutISN: donutDataISN, 
                                  header: headerData, 
                                  table: tableData, 
                                  comentarios: respuestasComentarios
                                  }
                                )
        break;
      }
    }

    setData(processedJsonData_1)

  }, [])
  if (processedJsonData === null) {
    return (
      <p>Cargando...</p>
    )
  }

  return (
    <div className="App">
<<<<<<< HEAD
      {processedJsonData.filter((data) => {

        return (
          data.id === "939"
        )

  }).map((processedData)=>{
    
    return (<>
    <SummaryHeader data = {processedData.header}></SummaryHeader>
    <table id='summary'>

    <tr>
      <td>
        <Donut data = {processedData.donutISN}></Donut>
      </td><td>
        <Donut data = {processedData.donutNPS}></Donut>
      </td>
      
    </tr>

    </table>
=======

{processedJsonData
  .filter((data) => {
    return data.id === "1418";
  })
  .map((processedData) => {
    
    return (<>
    <SummaryHeader data = {processedData.header}></SummaryHeader>
    <table id="summary">
                <tr>
                  <div id="donutid">
                    <Donut data={processedData.donutISN}></Donut>
                  </div>
                  <div id="donutid">
                    <Donut data={processedData.donutNPS}></Donut>
                  </div>
                </tr>
              </table>
>>>>>>> ab4c5884ecfbef77557e46a98fa6c2a44b7637cc
    <Table data = {processedData.table}></Table>
    <p>pencil</p>
    <ComentariosGenerales data = {processedData.comentarios}></ComentariosGenerales>
    </>)
    
    })}

    </div>
  );
}

export default ESPReport;
