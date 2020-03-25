import React from 'react'

// import Chart from '../../../../../node_modules/chart.js/Chart.js'
// Chart.defaults.global.defaultFontFamily = "Roboto, sans-serif";

// Data generation
// function getRandomArray(numItems) {
//   // Create random array of objects
//   let names = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   let data = [];
//   for(var i = 0; i < numItems; i++) {
//     data.push({
//       label: names[i],
//       value: Math.round(20 + 80 * Math.random())
//     });
//   }
//   return data;
// }

// function getRandomDateArray(numItems) {
//   // Create random array of objects (with date)
//   let data = [];
//   let baseTime = new Date('2018-05-01T00:00:00').getTime();
//   let dayMs = 24 * 60 * 60 * 1000;
//   for(var i = 0; i < numItems; i++) {
//     data.push({
//       time: new Date(baseTime + i * dayMs),
//       value: Math.round(20 + 80 * Math.random())
//     });
//   }
//   return data;
// }

// function getData() {
//   let data = [];

//   data.push({
//     title: 'Visits',
//     data: getRandomDateArray(150)
//   });

//   data.push({
//     title: 'Categories',
//     data: getRandomArray(20)
//   });

//   data.push({
//     title: 'Categories',
//     data: getRandomArray(10)
//   });

//   data.push({
//     title: 'Data 4',
//     data: getRandomArray(6)
//   });

//   return data;
// }


// // BarChart
// class BarChart extends React.Component {
//   constructor(props) {
//     super(props);
//     this.canvasRef = React.createRef();
//   }

//   componentDidUpdate() {
//     this.myChart.data.labels = this.props.data.map(d => d.label);
//     this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
//     this.myChart.update();
//   }

//   componentDidMount() {
//     this.myChart = new Chart(this.canvasRef.current, {
//       type: 'bar',
//       options: {
//           maintainAspectRatio: false,
//         scales: {
//           yAxes: [
//             {
//               ticks: {
//                 min: 0,
//                 max: 100
//               }
//             }
//           ]
//         }
//       },
//       data: {
//         labels: this.props.data.map(d => d.label),
//         datasets: [{
//           label: this.props.title,
//           data: this.props.data.map(d => d.value),
//           backgroundColor: this.props.color
//         }]
//       }
//     });
//   }

//   render() {
//     return (
//         <canvas ref={this.canvasRef} />
//     );
//   }
// }


// // LineChart
// class LineChart extends React.Component {
//   constructor(props) {
//     super(props);
//     this.canvasRef = React.createRef();
//   }

//   componentDidUpdate() {
//     this.myChart.data.labels = this.props.data.map(d => d.time);
//     this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
//     this.myChart.update();
//   }

//   componentDidMount() {
//     this.myChart = new Chart(this.canvasRef.current, {
//       type: 'line',
//       options: {
//               maintainAspectRatio: false,
//         scales: {
//           xAxes: [
//             {
//               type: 'time',
//               time: {
//                 unit: 'week'
//               }
//             }
//           ],
//           yAxes: [
//             {
//               ticks: {
//                 min: 0
//               }
//             }
//           ]
//         }
//       },
//       data: {
//         labels: this.props.data.map(d => d.time),
//         datasets: [{
//           label: this.props.title,
//           data: this.props.data.map(d => d.value),
//           fill: 'none',
//           backgroundColor: this.props.color,
//           pointRadius: 2,
//           borderColor: this.props.color,
//           borderWidth: 1,
//           lineTension: 0
//         }]
//       }
//     });
//   }

//   render() {
//     return <canvas ref={this.canvasRef} />;
//   }
// }


// // Doughnut
// class DoughnutChart extends React.Component {
//   constructor(props) {
//     super(props);
//     this.canvasRef = React.createRef();
//   }

//   componentDidUpdate() {
//     this.myChart.data.labels = this.props.data.map(d => d.label);
//     this.myChart.data.datasets[0].data = this.props.data.map(d => d.value);
//     this.myChart.update();
//   }

//   componentDidMount() {
//     this.myChart = new Chart(this.canvasRef.current, {
//       type: 'doughnut',
//       options: {
//           maintainAspectRatio: false
//       },
//       data: {
//         labels: this.props.data.map(d => d.label),
//         datasets: [{
//           data: this.props.data.map(d => d.value),
//           backgroundColor: this.props.colors
//         }]
//       }
//     });

//   }


//   render() {
//     return <canvas ref={this.canvasRef} />;
//   }
// }


// // App
// class MainPage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       data: getData()
//     };
//   }

//   componentDidMount() {
//     window.setInterval(() => {
//       this.setState({
//         data: getData()
//       })
//     }, 5000)
//   }

//   render() {
//     return (
//       <div className="App">
//         <div className="main chart-wrapper">
//           <LineChart
//             data={this.state.data[0].data}
//             title={this.state.data[0].title}
//             color="#3E517A"
//           />
//         </div>
//         <div className="sub chart-wrapper">
//           <BarChart
//             data={this.state.data[1].data}
//             title={this.state.data[1].title}
//             color="#70CAD1"
//           />
//         </div>
//         <div className="sub chart-wrapper">
//           <BarChart
//             data={this.state.data[2].data}
//             title={this.state.data[2].title}
//             color="#B08EA2"
//           />
//         </div>
//         <div className="sub chart-wrapper">
//           <DoughnutChart
//             data={this.state.data[3].data}
//             title={this.state.data[3].title}
//             colors={['#a8e0ff', '#8ee3f5', '#70cad1', '#3e517a', '#b08ea2', '#BBB6DF']}
//           />
//         </div>
//       </div>
//     );
//   }
// }
export default MainPage

function MainPage() {
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
      </div>
    )
}

