import React, {Component} from 'react';
import '../Css/App.css';
import {Doughnut} from 'react-chartjs-2';

class DoughnutChartComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      datasets: [{
        data: this.props.data.data,
        backgroundColor: ['red', 'yellow', 'green'],
      }],
      labels: this.props.data.labels
    }
  }

  render() {
    return (
        <center><h1> {this.props.data.titulo} </h1>
        <Doughnut data = {{
          labels: this.state.labels,
          datasets: this.state.datasets,
        }}
        options = {{
          cutoutPercentage: 50,
          rotation: 1 * Math.PI, //DEFAULT: -0.5 * Math.PI
          circumference: Math.PI, //2 * Math.PI es el maximo.
          maintainAspectRatio: false,
          animation:{ duration: 3000},
          display: false
        }} 
<<<<<<< HEAD:my-app/src/Donut.js
        height = '150%'
=======
        width={600}

>>>>>>> 796730d0f4ca4d87c292de0a4b200a8ab5ad9ece:my-app/src/Components/Donut.js
        /></center>
    )
  }
}
export default DoughnutChartComponent