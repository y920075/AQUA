import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

class SweetAlert {
  //送出前確認
  /*
    title = 提示窗的標題
    setStateFunc = 要被改變的state
    stateData = 要改變的值
    callback = 按下確認之後要執行的function
    callBackData = function參數1
    callBackData2 = function參數2
  */
  static sendConfirm(
    title,
    setStateFunc,
    stateData,
    callback,
    callBackData = '',
    callBackData2 = ''
  ) {
    MySwal.fire({
      title: title,
      icon: 'question',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '送出',
    }).then(async result => {
      if (result.value) {
        if (callback) await callback(callBackData, callBackData2)
        if (setStateFunc && stateData) setStateFunc(stateData)
      }
    })
  }
  //成功執行
  // title = 提示訊息
  static success(title) {
    MySwal.fire({
      icon: 'success',
      title: title,
      showConfirmButton: false,
      timer: 1500,
    })
  }

  //錯誤訊息
  /*
    errorCode = 錯誤代碼
    errorMsg = 錯誤訊息
  */
  static errorAlert(errorCode, errorMsg) {
    MySwal.fire({
      icon: 'error',
      title: `錯誤代碼：${errorCode}`,
      text: `錯誤訊息：${errorMsg}`,
    })
  }

  //多步驟提示框
  /*
    Steps = 有幾個步驟
    queueMsg = 每個步驟的設定(標題、內文或是是否要有輸入框等..)
    setStateFunc = 要被改變的state
    stateData = 要改變的值
    callback = 按下確認之後要執行的function
    callbackData = function的傳入參數
  */
  static questionAlert(
    Steps,
    queueMsg,
    setStateFunc,
    stateData,
    callback = '',
    callbackData = ''
  ) {
    MySwal.mixin({
      confirmButtonText: '下一步 &rarr;',
      showCancelButton: true,
      progressSteps: Steps,
    })
      .queue(queueMsg)
      .then(async result => {
        if (result.value) {
          const inputData = result.value[0]
          if (callback) await callback(callbackData, inputData)
          if (setStateFunc && stateData) setStateFunc(stateData)
        }
      })
  }
}

export default SweetAlert
