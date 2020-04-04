import React, { Component, useState, useEffect } from 'react'
// import Chart from './Chart'
import { Line } from 'react-chartjs-2'
import ChartRight from './ChartRight'
import { Link, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import {
  getUserClickDataAsync,
  getTotalDataAsync,
} from '../../../actions/seller/index'

class MainPage extends Component {
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
            borderColor: 'rgb(255, 204, 0)',
          },
          {
            label: 'Ivy',
            fill: false,
            backgroundColor: 'rgba(255, 204 ,0, 1)',
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
  componentDidMount() {
    this.props.getUserClickDataAsync()
    this.props.getTotalDataAsync()
  }
  // componentDidUpdate(props) {
  //   getUserClickDataAsync()

  //   console.log(props.getClickData)
  // }
  render() {
    // console.log(this.props.getClickData)
    console.log(this.props.totalPrice)

    const clickdata = this.props.getClickData.userClick
    const totalData = this.props.totalPrice.total
    return (
      <div className="conteiner">
        <div className="row">
          <div className="container-fluid">
            <div className="row d-flex justify-content-lg-around pt-md-5 mt-md-3 mb-5">
              <div className="col-xl-4 col-sm-6 p-2">
                <div className="card  text-center my-3">
                  <div className="d-flex justify-content-center">
                    <i
                      width="150"
                      height="150"
                      className="fas card-img-top fa-shopping-cart fa-3x text-warning"
                    ></i>
                  </div>

                  <div className="card-body text-nowrap">
                    <h2>總銷售額</h2>
                    <h2 className="card-text">
                      {/* $135,000 */}
                      {totalData
                        ? totalData.map((item, index) => {
                            return item.sum_total
                          }) + '元'
                        : '$135,000'}
                    </h2>
                    <div className="card-footer mb-3">
                      <i className="fas fa-sync mr-3"></i>
                      <span>更新</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-sm-6 p-2">
                <div className="card text-center my-3">
                  <div className="d-flex justify-content-center">
                    <i className="fas card-img-top fa-users fa-3x text-info"></i>
                  </div>

                  <div className="card-body text-nowrap">
                    <h2>常客</h2>
                    <h2 className="card-text">5人</h2>
                    <div className="card-footer mb-3">
                      <i className="fas fa-sync mr-3"></i>
                      <span>更新</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-sm-6 p-2">
                <div className="card text-center my-3">
                  <div className="d-flex justify-content-center">
                    <i className="fas card-img-top fa-chart-line fa-3x text-danger"></i>
                  </div>

                  <div className="card-body text-nowrap">
                    <h2>今日到訪者</h2>
                    <h2 className="card-text">
                      {clickdata
                        ? clickdata.map((item, index) => {
                            return item.click_total
                          })
                        : '15人'}
                      {/* 15人 */}
                    </h2>
                    <div className="card-footer mb-3">
                      <i className="fas fa-sync mr-3"></i>
                      <span>更新</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            {/* <Chart /> */}
            <h2 className="text-center">單位(購買商品數/點擊商品數)</h2>
          </div>

          <ChartRight />
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => {
  return {
    getClickData: store.sellerReducer.getClickData,
    totalPrice: store.sellerReducer.totalPrice,
  }
}

// 指示dispatch要綁定哪些action creators
const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    { getUserClickDataAsync, getTotalDataAsync },
    dispatch
  )
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(MainPage)
)
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
