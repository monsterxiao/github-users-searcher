import React, { useEffect } from 'react'
import * as echarts from 'echarts'

const useEcharts = (chartRef, options) => {
    let myChart = null

    const renderChart = () => {
        // verify DOM
        const chart = echarts.getInstanceByDom(chartRef.current)
        if (chart) {
            myChart = chart
        } else {
            // init echarts (svg)
            myChart = echarts.init(chartRef.current, null, {
                renderer: 'svg',
            })
        }
        // set option
        myChart.setOption(options)
    }

    useEffect(() => {
        renderChart()
        return () => {
            // clean up
            myChart && myChart.dispose()
        }
    }, [])
    return
}

export default useEcharts
