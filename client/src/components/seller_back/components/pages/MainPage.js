import React, { Component, useState } from 'react'
import Chart from './Chart'
import { Line } from 'react-chartjs-2'
export default class MainPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      data: {
        labels: ['3/25', '3/26', '3/27', '3/28', '3/29'],
        datasets: [
          {
            label: 'harrison',
            fill: false,
            backgroundColor: 'rgba(19, 41 ,72, 0.25)',
            data: [50, 55, 90, 123, 45, 10],
            borderColor: 'rgb(255, 99, 132)',
          },
          {
            label: 'Garry',
            fill: false,
            backgroundColor: 'rgba(241, 90 ,36, 1)',
            data: [78, 80, 85, 75, 82, 80],
            borderColor: 'rgb(255, 99, 132)',
          },
          {
            label: 'Ivy',
            fill: false,
            backgroundColor: 'rgba(241, 90 ,36, 1)',
            data: [40, 59, 1, 33, 22, 45],
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
      <div className="conteiner">
        <div className="row">
          <section>
            <div className="container-fluid">
              <div className="row">
                <div className="col-xl-10 col-lg-9 col-md-8 ml-auto">
                  <div className="row pt-md-5 mt-md-3 mb-5">
                    <div className="col-xl-4 col-sm-6 p-2">
                      <div className="card card-common">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <i className="fas fa-shopping-cart fa-3x text-warning"></i>
                            <div className="text-right text-secondary">
                              <h5>Sales</h5>
                              <h3>$135,000</h3>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer text-secondary">
                          <i className="fas fa-sync mr-3"></i>
                          <span>Updated Now</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 p-2">
                      <div className="card card-common">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <i className="fas fa-money-bill-alt fa-3x text-success"></i>
                            <div className="text-right text-secondary">
                              <h5>Expenses</h5>
                              <h3>$39,000</h3>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer text-secondary">
                          <i className="fas fa-sync mr-3"></i>
                          <span>Updated Now</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 p-2">
                      <div className="card card-common">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <i className="fas fa-users fa-3x text-info"></i>
                            <div className="text-right text-secondary">
                              <h5>Users</h5>
                              <h3>15,000</h3>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer text-secondary">
                          <i className="fas fa-sync mr-3"></i>
                          <span>Updated Now</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-4 col-sm-6 p-2">
                      <div className="card card-common">
                        <div className="card-body">
                          <div className="d-flex justify-content-between">
                            <i className="fas fa-chart-line fa-3x text-danger"></i>
                            <div className="text-right text-secondary">
                              <h5>Visitors</h5>
                              <h3>45,000</h3>
                            </div>
                          </div>
                        </div>
                        <div className="card-footer text-secondary">
                          <i className="fas fa-sync mr-3"></i>
                          <span>Updated Now</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="row">
          <div className="col-sm-6">
            <h2 className="text-center">購買率前三名顧客</h2>
            <Line
              options={{
                responsive: true,
              }}
              data={this.state.data}
              height={300}
              width={500}
            />
            <Chart />
          </div>
        </div>
      </div>
    )
  }
}

// function MainPage(props) {

//   const [chartDataSet,SetChartDat] = useState([{}])
//       SetChartDat(
//                 [{
//                   labels:["hwer","1adas","qweeqw","qwe","ttert"],
//                   dataset: [{
//                             labels:"Member1",
//                             backgroundColor:"rgba(255, 0 ,255, 0.88)",
//                             data: [12,15,747,123,2,3]
//                           },{
//                               labels:"Member2",
//                               backgroundColor:"rgba(255, 0 ,255, 0.75)",
//                               data: [12,15,77,13,2,3]
//                             }]

//                }])
//     return (

//         <div className="row">
//           <div  className="col-sm-12">
//             <Line
//               options={{
//                 responsive:true
//               }}
//               data = {chartDataSet}
//             />
//           </div>
//         </div>
//     )
// }

// export default MainPage
