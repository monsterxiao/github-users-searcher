import React, { useRef } from 'react'
import useEcharts from './useEcharts'

const Doughnut = ({ data }) => {
    const chartRef = useRef()

    const options = {
        title: {
            text: '编程语言 Star 数（Top 10）',
            subtext: 'Stars Per Language',
            left: 'center',
        },
        tooltip: {
            trigger: 'item',
        },
        legend: {
            orient: 'vertical',
            top:'15%',
            left: 'left',
        },
        dataset: [
            {
                source: data,
            },
        ],
        series: [
            {
                name: '收藏量（Star）',
                type: 'pie',
                radius: ['20%', '40%'],
                center:['60%','50%'],
                itemStyle: {
                    borderRadius: 5,
                    borderColor: '#fff',
                    borderWidth: 2,
                },
                encode: {
                    itemName: 'label',
                    value: 'value',
                },
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                    },
                },
            },
        ],
    }

    // custom hook for rendering Echarts
    useEcharts(chartRef, options)

    return <div className='chart-container' ref={chartRef} />
}

export default Doughnut
