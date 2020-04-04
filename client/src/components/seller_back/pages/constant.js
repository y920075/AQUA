export const GRAPHIC = {
  labels: [
    '07-11-2019',
    '08-11-2019',
    '09-11-2019',
    '10-11-2019',
    '11-11-2019',
    '12-11-2019',
    '13-11-2019',
  ],
  datasets: [
    {
      label: 'Periodo Actual',
      data: [28742, 18342, 1223, 33510, 42540, 28760, 27490],
      borderColor: '#108bc9',
      backgroundColor: '#108bc9',
      fill: false,
      pointRadius: 3,
      pointHoverRadius: 4,
      borderWidth: 2,
    },
    {
      label: 'Periodo Anterior',
      data: [20650, 15251, 31190, 16030, 24800, 15910, 21934],
      borderColor: '#9B9B9B',
      backgroundColor: '#9B9B9B',
      fill: false,
      pointRadius: 3,
      pointHoverRadius: 4,
      borderWidth: 2,
    },
  ],
}

export const GRAPHICS = [
  {
    type: 'radar',
    width: 150,
    height: 50,
    data: { id: 1, ...GRAPHIC, currency: '$' },
  },
  {
    type: 'line',
    width: 300,
    height: 100,
    data: { id: 2, ...GRAPHIC, currency: '$' },
  },
  {
    type: 'bar',
    width: 300,
    height: 100,
    data: { id: 3, ...GRAPHIC, currency: '$' },
  },
  {
    type: 'horizontalBar',
    width: 300,
    height: 100,
    data: { id: 4, ...GRAPHIC, currency: '$' },
  },
]
