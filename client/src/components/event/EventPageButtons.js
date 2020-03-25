import React, { useEffect, useState } from 'react'

//傳入參數 props.totalPages = 總共頁數
//傳入方法 props.getDataFromServer() = 向伺服器請求新的資料
//此元件class與event功能共用
//2020-03-21
function EventPageButtons(props) {
  const [pageButtons, setPageButtons] = useState([]) //存放page按鈕的陣列

  //依據totalPages製作頁數按鈕
  //先製作出<li>列表後存入本地state，然後透過.map印出
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
            props.getDataFromServer(page)
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
