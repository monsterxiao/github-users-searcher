import React, { useRef } from 'react'
import useEcharts from './useEcharts'
import * as echarts from 'echarts/core'

const Line = () => {
    const chartRef = useRef()

    const options = {
        color: ['#FF0087', '#FFBF00'],
        title: {
            text: '仓库关注度排行榜',
            subtext: 'Most Popular and Forked Repos',
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
            data: ['最受欢迎', 'Forked'],
            orient: 'vertical',
            right: '8%',
        },
        grid: {
            left: '5%',
            right: '10%',
            bottom: '20%',
            containLabel: true,
        },
        xAxis: [
            {
                name: '仓库名称（Repos）',
                nameLocation: 'center',
                nameTextStyle: {
                    fontWeight: 'bold',
                    padding: [15, 0, 0, 0],
                    color: '#222',
                },
                type: 'category',
                boundaryGap: false,
                data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            },
        ],
        yAxis: [
            {
                name: '收藏量（Stars）',
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
                name: '最受欢迎',
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
                data: [140, 232, 101, 264, 90, 340, 250],
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
                data: [120, 282, 111, 234, 220, 340, 310],
            },
        ],
    }

    // custom hook for rendering Echarts
    useEcharts(chartRef, options)

    return <div className='chart-container' ref={chartRef} />
}

export default Line
