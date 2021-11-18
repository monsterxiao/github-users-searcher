import React, { useRef } from 'react'
import useEcharts from './useEcharts'
import * as echarts from 'echarts/core'

const Line = ({ data }) => {
    const chartRef = useRef()

    const options = {
        color: ['#FF0087', '#FFBF00'],
        title: {
            text: '最受关注仓库',
            subtext: 'Most watched',
            left: 'center',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985',
                },
            },
        },
        legend: {
            data: ['Stars', 'Forked'],
            orient: 'vertical',
            right: '8%',
        },
        grid: {
            left: '5%',
            right: '15%',
            bottom: '20%',
            containLabel: true,
        },
        dataset: [
            {
                // 序号为 0 的 dataset。
                source: data,
            },
            {
                // 序号为 1 的 dataset。
                source: data,
            },
        ],
        xAxis: [
            {
                name: '仓库名称（Repos）',
                nameLocation: 'center',
                nameTextStyle: {
                    fontWeight: 'bold',
                    padding: [30, 0, 0, 0],
                    color: '#222',
                },
                axisLabel: {
                    fontSize: 10,
                    width: 55,
                    interval: 0,
                    overflow: 'break',
                },
                type: 'category',
                boundaryGap: false,
            },
        ],
        yAxis: [
            {
                name: '关注度（value）',
                nameLocation: 'end',
                nameTextStyle: {
                    fontWeight: 'bold',
                    color: '#222',
                },
                type: 'value',
            },
        ],
        series: [
            {
                name: 'Stars',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0,
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(255, 0, 135)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(135, 0, 157)',
                        },
                    ]),
                },
                emphasis: {
                    focus: 'series',
                },
                datasetIndex: 0,
                encode: {
                    // 将 "label" 列映射到 X 轴。
                    x: 'label',
                    // 将 "stars" 列映射到 Y 轴。
                    y: 'stars',
                },
            },
            {
                name: 'Forked',
                type: 'line',
                stack: 'Total',
                smooth: true,
                lineStyle: {
                    width: 0,
                },
                showSymbol: false,
                areaStyle: {
                    opacity: 0.8,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                        {
                            offset: 0,
                            color: 'rgba(255, 191, 0)',
                        },
                        {
                            offset: 1,
                            color: 'rgba(224, 62, 76)',
                        },
                    ]),
                },
                emphasis: {
                    focus: 'series',
                },
                datasetIndex: 1,
                encode: {
                    // 将 "label" 列映射到 X 轴。
                    x: 'label',
                    // 将 "stars" 列映射到 Y 轴。
                    y: 'forks',
                },
            },
        ],
    }

    // custom hook for rendering Echarts
    useEcharts(chartRef, options)

    return <div className='chart-container' ref={chartRef} />
}

export default Line
