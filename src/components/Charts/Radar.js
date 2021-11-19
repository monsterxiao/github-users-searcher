import React, { useRef } from 'react'
import useEcharts from './useEcharts'

const Radar = ({ data }) => {
    const chartRef = useRef()
    const indicators = []
    const radarValue = []
    // 假如数据为空，要给indicators预设值，否则 Echarts 报错
    if (data.length === 0) {
        indicators.push({ name: '无数据' })
    } else {
        // 数据非空，则把数据处理成 radar 图的数据格式
        data.forEach((item) => {
            const { label, value } = item
            let maxValue = value + 1
            indicators.push({ name: label, max: maxValue })
            radarValue.push(value)
        })
    }

    const options = {
        color: ['#37A2FF'],
        title: {
            text: '编程语言偏好',
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
