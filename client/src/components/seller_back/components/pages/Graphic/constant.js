import { Radar, HorizontalBar, Line, Bar } from 'react-chartjs-2'

import {
  formatNumberDecimal,
  formatDateMoment,
  formatPorcentage,
} from './utils'

//這裡將常數匯出
//把圖形的型別定義在一個物件裡面
export const graphicRadar = 'radar'
export const graphicBar = 'bar'
export const graphicHorizontalBar = 'horizontalBar'
export const graphicLine = 'line'

//匯出成一個個元件
export const typesGraphic = {
  [graphicRadar]: Radar,
  [graphicBar]: Bar,
  [graphicHorizontalBar]: HorizontalBar,
  [graphicLine]: Line,
}

//定義有兩條線兩個對比資料
const GRAPHIC_IDS = {
  BAR: 1,
  LINE: 2,
}

export const tooltipsGraphic = (graphicId, currency) => {
  switch (graphicId) {
    case GRAPHIC_IDS.BAR: {
      return {
        title: tooltipItem => tooltipItem[0].yLabel,
        label: (tooltipItem, data) => `Ventas ${tooltipItem.xLabel}`,
      }
    }
    case GRAPHIC_IDS.LINE: {
      return {
        title: (tooltipItem, data) => {
          const date = data.labels[tooltipItem[0].index].split('|')
          return `Date ${
            tooltipItem.length > 1
              ? data.labels[tooltipItem[0].index]
              : date[tooltipItem[0].datasetIndex]
          }`
        },
        label: (tooltipItem, data) =>
          `${
            data.datasets[tooltipItem.datasetIndex].label
          }: ${currency} ${formatNumberDecimal(tooltipItem.yLabel)}`,
        afterLabel: (tooltipItem, data) => {
          const dataSetsValues = data.datasets.map(dataSet =>
            parseInt(dataSet.data[tooltipItem.index], 10)
          )
          const percent =
            (dataSetsValues.reduce((acum = 0, value) => acum / value) - 1) * 100
          return tooltipItem.datasetIndex === data.datasets.length - 1 &&
            !isNaN(percent) &&
            percent !== Infinity
            ? `Variación: ${formatPorcentage(percent.toFixed(1))}%`
            : null
        },
      }
    }
    default: {
      return []
    }
  }
}

export const graphicRadarOptions = graphicId => {
  const optionGraphic = {
    responsive: true,
    tooltips: {
      mode: 'x',
      intersect: false,
      callbacks: tooltipsGraphic(graphicId),
    },
    hover: {
      mode: 'x',
      intersect: false,
    },
    legend: { display: false },
    scales: {
      xAxes: [
        {
          ticks: {
            callback: value => {
              const date = value.split(' | ')
              return formatDateMoment(date[0], 'DD-MM-YYYY', 'DD-MM-YY')
            },
          },
        },
      ],
    },
  }
  return optionGraphic
}

export const graphicOptionsLine = graphicId => {
  const optionGraphic = {
    responsive: true,
    tooltips: {
      mode: 'x',
      intersect: false,
      callbacks: tooltipsGraphic(graphicId),
    },
    hover: {
      mode: 'x',
      intersect: false,
    },
  }
  return optionGraphic
}

export function optionsForGraphic(type, graphicId, currency) {
  switch (type) {
    case graphicRadar: {
      return graphicRadarOptions(graphicId, currency)
    }
    case graphicLine: {
      return graphicOptionsLine(graphicId, currency)
    }
    default: {
      return {}
    }
  }
}
