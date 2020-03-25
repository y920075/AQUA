import React from 'react'

function Breadcrumb(props) {
  const pathname = props.location.pathname

  return (
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <a href="#">自由潛水蛙鞋</a>
      </li>
      <li className="breadcrumb-item active" ariaCurrent="page">
        {pathname}
      </li>
    </ol>
  )
}

export default Breadcrumb
