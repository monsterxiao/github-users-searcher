import React, { useRef } from 'react'
import useEcharts from './useEcharts'

const Column = () => {
    const chartRef = useRef()

    const options = {
        title: {
            text: 'Referer of a Website',
            subtext: 'Fake Data',
            top: '5%',
            left: 'center',
        },
        xAxis: {
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        yAxis: {
            type: 'value',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
        },
        series: [
            {
                name: '表格测试',
                data: [120, 300, 150, 80, 70, 110, 130],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: 'rgba(180, 180, 180, 0.2)',
                },
                emphasis: {
                    label: {
                        show: true,
                        fontSize: '15',
                        fontWeight: 'bold',
                    },
                },
            },
        ],
    }

    // custom hook for rendering Echarts
    useEcharts(chartRef, options)
    
    return <div className='chart-container' ref={chartRef} />
}

export default Column
