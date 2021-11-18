import React, { useRef } from 'react'
import useEcharts from './useEcharts'

const Bar = ({ data }) => {
    const chartRef = useRef()

    const options = {
        title: {
            text: '最受欢迎仓库',
            subtext: 'Most Popular',
            left: 'center',
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow',
            },
        },
        legend: {
            data: ['Stars', 'Forked'],
            orient: 'vertical',
            right: '8%',
        },
        grid: {
            left: '1%',
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
        xAxis: {
            name: '欢迎程度（Value）',
            nameLocation: 'center',
            nameTextStyle: {
                fontWeight: 'bold',
                padding: [20, 0, 0, 0],
                color: '#222',
            },
            type: 'value',
        },
        yAxis: {
            name: '仓库名称（Repos）',
            nameLocation: 'end',
            nameTextStyle: {
                fontWeight: 'bold',
                color: '#222',
            },
            axisLabel: {
                fontSize: 10,
                width: 50,
                padding: [0, 20, 0, 0],
                interval: 0,
                overflow: 'break',
            },
            type: 'category',
        },
        series: [
            {
                name: 'Stars',
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: '#E8EAF6',
                },
                datasetIndex: 0,
                encode: {
                    // 将 "stars" 列映射到 X 轴。
                    x: 'stars',
                    // 将 "label" 列映射到 Y 轴。
                    y: 'label',
                },
            },
            {
                name: 'Forked',
                type: 'bar',
                showBackground: true,
                backgroundStyle: {
                    color: '#E8EAF6',
                },
                datasetIndex: 1,
                encode: {
                    // 将 "forks" 列映射到 X 轴。
                    x: 'forks',
                    // 将 "label" 列映射到 Y 轴。
                    y: 'label',
                },
            },
        ],
    }

    // custom hook for rendering Echarts
    useEcharts(chartRef, options)

    return <div className='chart-container' ref={chartRef} />
}

export default Bar
