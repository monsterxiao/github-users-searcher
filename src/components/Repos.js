import React from 'react'
import styled from 'styled-components'
import { AppCtx } from '../context/context'
import { Radar, Line, Bar, Doughnut } from './Charts'

const Repos = () => {
    const { repos } = React.useContext(AppCtx)

    // 把仓库的 languages 和 stars 数据提取并汇总
    const languages = repos.reduce((total, item) => {
        const { language, stargazers_count } = item

        if (language === null) return total
        if (total[language] === undefined) {
            total[language] = {
                label: language,
                value: 1,
                stars: stargazers_count,
            }
        } else {
            total[language] = {
                ...total[language],
                value: total[language].value + 1,
                stars: total[language].stars + stargazers_count,
            }
        }
        return total
    }, {})
    // console.log('languages', languages)

    // 把仓库数据(含 starts 和 forks )提取并汇总
    let allRepos = repos.reduce((total, item) => {
        const { stargazers_count, name, forks } = item
        total[name] = {
            label: name,
            forks: forks,
            stars: stargazers_count,
        }
        return total
    }, {})
    // console.log('all repos', allRepos)

    // top #10 language
    const mostUsed = Object.values(languages)
        .sort((a, b) => {
            return b.value - a.value
        })
        .slice(0, 10)
    // console.log('mostUsed', mostUsed)

    // top #10 stars per language
    const mostStar = Object.values(languages)
        .sort((a, b) => {
            return b.stars - a.stars
        })
        .map((item) => {
            return { ...item, value: item.stars }
        })
        .slice(0, 10)
    // console.log('mostStar', mostStar)

    // top #5 stars repos
    const starsRepos = Object.values(allRepos)
        .sort((a, b) => {
            return b.stars - a.stars
        })
        .slice(0, 5)
    // console.log('starsRepos', starsRepos)

    const popularRepos = [...starsRepos].reverse()
    console.log(popularRepos)

    return (
        <section className='section'>
            <Wrapper className='section-center'>
                <Radar />
                <Line data={starsRepos} />
                <Doughnut />
                <Bar data={popularRepos} />
            </Wrapper>
        </section>
    )
}

const Wrapper = styled.div`
    display: grid;
    justify-items: center;
    gap: 2rem;
    @media (min-width: 800px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (min-width: 1200px) {
        grid-template-columns: 2fr 3fr;
    }

    div {
        width: auto !important;
    }

    .chart-container {
        height: 450px;
        width: 100% !important;
        border-radius: var(--radius) !important;
        background: var(--clr-white);
    }

    svg {
        padding: 1rem;
        width: 100% !important;
    }
`

export default Repos
