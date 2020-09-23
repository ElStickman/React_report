import React, {Component} from 'react';
import './CSS/App.css';
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
      <div>

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
          
          

        }} width={815}

        /></center>
      </div>
    )
  }
}
export default DoughnutChartComponent