import React, { useRef } from 'react'
import useEcharts from './useEcharts'

const Radar = ({ data }) => {
    const chartRef = useRef()
    let indicators = []
    let radarValue = []
    data.forEach((item) => {
        const { label, value } = item
        let maxValue = value + 1
        indicators.push({ name: label, max: maxValue })
        radarValue.push(value)
    })
    console.log(indicators)
    console.log(radarValue)

    const options = {
        color: ['#37A2FF'],
        title: {
            text: '编程语言分布（Top 10）',
            subtext: `Most Used Languages`,
            left: 'center',
        },
        tooltip: {
            trigger: 'item',
        },

        radar: {
            shape: 'circle',
            indicator: indicators,
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
                        value: radarValue,
                        name: '编程语言偏好',
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
