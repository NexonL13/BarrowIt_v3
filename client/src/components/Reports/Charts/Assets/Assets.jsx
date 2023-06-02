import { Card, Title, LineChart } from "@tremor/react"

const chartdata = [
  {
      year: 'Monday',
      'Borrowed Growth Rate': 15.4,
      'Returned Growth Rate': 2.67,
  },
  {
      year: 'Tuesday',
      'Borrowed Growth Rate': 30.6,
      'Returned Growth Rate': 16.7,
  },
  {
      year: 'Wednesday',
      'Borrowed Growth Rate': 1.96,
      'Returned Growth Rate': 1.61,
  },
  {
      year: 'Thursday',
      'Borrowed Growth Rate': 60.7,
      'Returned Growth Rate': 30.6,
  },
  {
      year: 'Friday',
      'Borrowed Growth Rate': 1.88,
      'Returned Growth Rate': 1.67,
  },
  {
    year: 'Saturday',
    'Borrowed Growth Rate': 75.8,
    'Returned Growth Rate': 50.6,
},
    //...
]


const AssetsChart = () => {
  return (
    <div className='w-full'>
    <Card className='p-10'>
      <Title>Assets</Title>
      <LineChart
          className="mt-6 h-60"
          data={ chartdata }
          index="year"
          categories={ ['Borrowed Growth Rate', 'Returned Growth Rate'] }
          colors={ ['emerald', 'gray'] }
          yAxisWidth={ 40 }
          showLegend={ false }
      />
  </Card>
  </div>
  )
}

export default AssetsChart