import {Component} from 'react'
import './index.css'
import {PieChart, Pie, Sector, Cell, Legend} from 'recharts'

const COLORS = ['#18ed66', '#e31a1a', '#FF8042']

export default class PieChartComponent extends Component {
  render() {
    const {data} = this.props

    return (
      <>
        <PieChart width={400} height={400} className="pieChart">
          <Pie
            dataKey="value"
            data={data}
            cx={200}
            cy={200}
            labelLine
            outerRadius={150}
            fill="#8884d8"
            label="name"
          >
            {data.map((entry, index) => (
              <Cell key={data.name} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend verticalAlign="top" height={36} />
        </PieChart>
      </>
    )
  }
}
