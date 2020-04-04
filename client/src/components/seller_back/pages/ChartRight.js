import React, { Component, useState } from 'react'
import Chart from './Chart'
import { Line } from 'react-chartjs-2'

export default class ChartRight extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {
        labels: ['3/25', '3/26', '3/27', '3/28', '3/29'],
        datasets: [
          {
            label: 'Harry',
            fill: false,
            backgroundColor: 'rgba(19, 41 ,72, 0.25)',
            data: [50, 55, 90, 120, 45, 0],
            borderColor: 'rgb(255, 99, 132)',
          },
          {
            label: 'Jamie',
            fill: false,
            backgroundColor: 'rgba(241, 90 ,36, 1)',
            data: [90, 20, 40, 75, 82, 53],
            borderColor: 'rgb(255, 204, 0)',
          },
          {
            label: 'harrison',
            fill: false,
            backgroundColor: 'rgba(241, 90 ,36, 1)',
            data: [41, 21, 42, 33, 22, 201],
            borderColor: 'rgb(0, 99, 132)',
          },
        ],
        maintainAspectRatio: false,
      },
      scales: {
        xAxes: [
          {
            ticks: {
              callback: function(label, index, labels) {
                return label.toFixed(2) + '%'
              },
            },
          },
        ],
        yAxes: [
          {
            ticks: {
              callback: function(label, index, labels) {
                return label
              },
              fontSize: 24,
              fontColor: 'black',
            },
            display: true,
          },
        ],
      },
    }
  }
  render() {
    return (
      <div className="col-sm-6">
        <h2 className="text-center">到訪率前三名顧客</h2>
        <Line
          options={{
            responsive: true,
          }}
          data={this.state.data}
          height={300}
          width={500}
        />
        <h2 className="text-center">單位(到訪商品/次)</h2>
      </div>
    )
  }
}
