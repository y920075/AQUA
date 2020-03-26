import React from 'react'
import '../../style/Comment.scss'

function Comment() {
  return (
    <div>
      <div className="commentboard">
        <div className="comments">
          <div className="d-flex">
            <a href="">
              <img
                src="./images/divelocation/portrait_technique_0014.jpg"
                alt=""
              />
            </a>
            <div>
              <div className="d-flex sign align-items-end">
                <h4>Flavia Valeriana</h4>
                <h6>2020/3/13 13:25</h6>
              </div>
              <div className="comentitself">
                <h6 className="satis">★★★★★</h6>
                <p className="artical">
                  這是個好地方，有停車場、商店、潛水店、充氣服務。特殊的海灣地形能抵擋洶湧的潮流，吸引豐富的海洋生態在此棲息發展
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex comments">
          <a href="">
            <img
              src="./images/divelocation/portrait_technique_0014.jpg"
              alt=""
            />
          </a>
          <div className="inputarea">
            <div className="comentitself">
              <textarea name="comment" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="d-flex justify-content-end sentcomment">
              <button type="submit" className="btn">
                送出
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Comment
