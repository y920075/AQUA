import React, { useEffect, useState } from 'react'

function Pages(props) {
  const [pageButtons, setPageButtons] = useState([]) //存放page按鈕的陣列

  //依據totalPages製作頁數按鈕
  useEffect(() => {
    let nowPageButton = []
    for (let i = 1; i <= props.totalPages; i++) {
      nowPageButton.push(
        <li
          className="page-item"
          key={i}
          data-page={i}
          onClick={event => {
            const page = event.target.textContent
            props.getDataFromServer(page)
            // console.log(page) 有拿到
          }}
        >
          <span className="page-link">{i}</span>
        </li>
      )
    }
    setPageButtons(nowPageButton)
  }, [props.totalPages])

  return (
    <>
      <ul className="pagination ">
        <li className="page-item page-prev">
          <span className="page-link">&laquo;</span>
        </li>
        {pageButtons.map(value => {
          return value
        })}
        <li className="page-item page-next">
          <span className="page-link">&raquo;</span>
        </li>
      </ul>
    </>
  )
}

export default Pages
