import React, { useRef } from 'react'
import useEcharts from './useEcharts'

const Radar = () => {
    const chartRef = useRef()

    const options = {
        color: ['#37A2FF'],
        title: {
            text: '编程语言分布',
            subtext: 'Programming Languages',
            left: 'center',
        },
        tooltip: {
            trigger: 'item',
        },

        radar: {
            shape: 'circle',
            indicator: [
                { name: 'Sales', max: 6500 },
                { name: 'Administration', max: 16000 },
                { name: 'Information Technology', max: 30000 },
                { name: 'Customer Support', max: 38000 },
                { name: 'Development', max: 52000 },
                { name: 'Marketing', max: 25000 },
            ],
            radius: 100,
            axisName: {
                color: '#222',
            },
        },
        series: [
            {
                name: '雷达图',
                type: 'radar',
                symbol: 'rect',
                symbolSize: 8,
                lineStyle: {
                    type: 'dashed',
                    color: 'hsl(185, 62%, 45%)',
                },
                areaStyle: {
                    color: 'hsl(184, 80%, 74%)',
                },

                emphasis: {
                    lineStyle: {
                        width: 4,
                    },
                },

                data: [
                    {
                        value: [4200, 3000, 20000, 35000, 50000, 18000],
                        name: 'Allocated Budget',
                    },
                ],
            },
        ],
    }

    // custom hook for rendering Echarts
    useEcharts(chartRef, options)

    return <div className='chart-container' ref={chartRef} />
}

export default Radar
