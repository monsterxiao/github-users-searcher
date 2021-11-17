import React, { useRef } from 'react'
import useEcharts from './useEcharts'

const Bar = () => {
    const chartRef = useRef()
    
    const options = {
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'cross' },
        },
        xAxis: {
            type: 'value',
        },
        yAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)',
                },
            },
        ],
    }

    // custom hook for rendering Echarts
    useEcharts(chartRef, options)

    return <div className='chart-container' ref={chartRef} />
}

export default Bar
