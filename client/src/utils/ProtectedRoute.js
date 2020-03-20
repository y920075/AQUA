import React from 'react'
import { Route, Redirect } from 'react-router-dom'

// 從React Router官方網站文件中標準的寫法
// 除了要判斷從上層傳入的一個是否登入的狀態值
// 使用children.props.isAuth，這一點和官網的範例有所不同
// 官方網站因為所有元件寫在同一個檔案所以可以模擬出全應用中的狀態
// 這裡因為拆分了元件不能像官網的範例這樣作
// 注意Redirect要不同元件間才能作301重新導向
// props 解構拉出children，和其它的組成一個其餘物件
const ProtectedRoute = ({ children, ...rest }) => {
  console.log(children)

  return (
    <Route
      {...rest}
      render={props =>
        children.props.isAuth === true ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: props.location },
            }}
          />
        )
      }
    />
  )
}

export default ProtectedRoute
