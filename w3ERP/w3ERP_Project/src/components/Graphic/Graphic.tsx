import Chart from 'react-apexcharts'
import { theme } from "../../styles/themeStyles";

export type RadialBarProps = {
  percentageGraphic: number
}

const primaryColor: any = "#796CE0"
const infoColor: any = "#000E4D"

const defaultOptions: ApexCharts.ApexOptions = {
  fill: { colors: infoColor },
  grid: { padding: { top: 0, left: 0, right: 0, bottom: 0 } },
  chart: {
    width: 70,
    height: 70,
    sparkline: {
      enabled: true,
    },
  },
  plotOptions: {
    radialBar: {
      hollow: { size: '45%' },
      track: { background: primaryColor },
      dataLabels: {
        name: { show: false },
        value: {
          offsetY: 5,
          fontSize: '12px',
          color: theme.palette.common.white,
          fontWeight: 'bold',
        },
      },
    },
  },
}

export function RadialBarDasboard({ percentageGraphic }: RadialBarProps) {
  return (
    <Chart
      series={[percentageGraphic]}
      width={80}
      height={80}
      options={defaultOptions}
      type="radialBar"
    />
  )
}