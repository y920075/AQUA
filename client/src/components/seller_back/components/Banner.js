import React from 'react'

function Banner(props) {
    console.log(props)
    return (
      
              <div className="jumbotron mt-5 ml-5">
                <div className="container">
                  <h1 className="display-4">{props.pagename}</h1>
                  <p className="lead">這是 {props.pagename} 的說明</p>
                </div>
              </div>
          )
        }
        
    

export default Banner

