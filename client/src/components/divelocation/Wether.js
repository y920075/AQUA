import React, { useState } from 'react'
import { Tabs } from 'react-bootstrap'
import { Tab } from 'react-bootstrap'

function Wether() {
  const [key, setKey] = useState('SeaForNow')

  return (
    <div>
      <Tabs
        id="controlled-tab-example"
        activeKey={key}
        onSelect={k => setKey(k)}
        className="wethertabs"
      >
        <Tab eventKey="SeaForNow" title="現在海況">
          <table className="weathertable">
            <thead>
              <tr>
                <th>海溫</th>
                <th>氣溫</th>
                <th>浪週期</th>
                <th>浪高</th>
                <th>浪向</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>21</td>
                <td>19</td>
                <td>6.3</td>
                <td>1.2</td>
                <td>東北東</td>
              </tr>
            </tbody>
          </table>
        </Tab>
        <Tab eventKey="Week" title="一周天氣預報">
          <table className="weathertable">
            <thead>
              <tr>
                <th>星期一</th>
                <th>星期二</th>
                <th>星期三</th>
                <th>星期四</th>
                <th>星期五</th>
                <th>星期六</th>
                <th>星期日</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3</td>
                <td>1</td>
                <td>2</td>
              </tr>
              <tr>
                <td>3</td>
                <td>1</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </Tab>
        <Tab eventKey="Tide" title="一週潮汐預報">
          <table className="weathertable">
            <thead>
              <tr>
                <th>\</th>
                <th>星期一</th>
                <th>星期二</th>
                <th>星期三</th>
                <th>星期四</th>
                <th>星期五</th>
                <th>星期六</th>
                <th>星期日</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>滿潮</td>
                <td>1</td>
                <td>2</td>
              </tr>
              <tr>
                <td>相對台灣高盛基準</td>
                <td>1</td>
                <td>2</td>
              </tr>
              <tr>
                <td>乾潮</td>
                <td>1</td>
                <td>2</td>
              </tr>
              <tr>
                <td>相對台灣高盛基準</td>
                <td>1</td>
                <td>2</td>
              </tr>
              <tr>
                <td>滿潮</td>
                <td>1</td>
                <td>2</td>
              </tr>
              <tr>
                <td>相對台灣高盛基準</td>
                <td>1</td>
                <td>2</td>
              </tr>
              <tr>
                <td>乾潮</td>
                <td>1</td>
                <td>2</td>
              </tr>
              <tr>
                <td>相對台灣高盛基準</td>
                <td>1</td>
                <td>2</td>
              </tr>
            </tbody>
          </table>
        </Tab>
      </Tabs>
    </div>
  )
}

export default Wether
