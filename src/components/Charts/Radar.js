import React, { useRef } from 'react'
import useEcharts from './useEcharts'

const Radar = () => {
    const chartRef = useRef()

    const options = {
        title: {
            text: 'Referer of a Website',
            subtext: 'Fake Data',
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
                name: 'Budget vs spending',
                type: 'radar',
                symbol: 'rect',
                symbolSize: 8,
                lineStyle: {
                    type: 'dashed',
                    color: 'hsl(185, 62%, 45%)',
                },
                areaStyle: {
                    color: 'hsl(185, 94%, 87%)',
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
