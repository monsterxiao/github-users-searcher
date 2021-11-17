import React, { useRef } from 'react'
import useEcharts from './useEcharts'

const Bar = () => {
    const chartRef = useRef()

    const options = {
        title: {
            text: '编程语言分布',
            subtext: 'Language',
            left: 'center',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
        },
        grid: {
            left: '5%',
            right: '10%',
            bottom: '20%',
            containLabel: true,
        },
        xAxis: {
            name: '仓库名称（Repos）',
            nameLocation: 'center',
            nameTextStyle: {
                fontWeight: 'bold',
                padding: [15, 0, 0, 0],
                color: '#222',
            },
            type: 'value',
        },
        yAxis: {
            name: '收藏量（Stars）',
            nameLocation: 'end',
            nameTextStyle: {
                fontWeight: 'bold',
                color: '#222',
            },
            type: 'category',
            data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        },
        series: [
            {
                data: [120, 200, 150, 80, 70, 110, 130],
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: '#E8EAF6',
                },
            },
        ],
    }

    // custom hook for rendering Echarts
    useEcharts(chartRef, options)

    return <div className='chart-container' ref={chartRef} />
}

export default Bar
