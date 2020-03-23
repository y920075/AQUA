import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
const MySwal = withReactContent(Swal)

class SweetAlert {
  constructor() {}

  //送出前確認
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
  static success(title) {
    MySwal.fire({
      icon: 'success',
      title: title,
      showConfirmButton: false,
      timer: 1500,
    })
  }
  //錯誤訊息
  static errorAlert(errorCode, errorMsg) {
    MySwal.fire({
      icon: 'error',
      title: `錯誤代碼：${errorCode}`,
      text: `錯誤訊息：${errorMsg}`,
    })
  }
}

export default SweetAlert
