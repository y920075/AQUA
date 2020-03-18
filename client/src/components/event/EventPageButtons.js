import React, { useEffect, useState } from 'react'

function EventPageButtons(props) {
  const [pageButtons, setPageButtons] = useState([]) //存放page按鈕的陣列

  //依據totalPages製作頁數按鈕
  useEffect(() => {
    let nowPageButton = []
    for (let i = 1; i <= props.totalPages; i++) {
      nowPageButton.push(
        <li
          className="page-item JY-classPage"
          key={i}
          data-page={i}
          onClick={event => {
            const page = event.target.textContent
            props.getEventData(page)
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
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-end">
          <li className="page-item page-prev">
            <span className="page-link">Previous</span>
          </li>
          {pageButtons.map(value => {
            return value
          })}
          <li className="page-item page-next">
            <span className="page-link">Next</span>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default EventPageButtons
