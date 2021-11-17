import React from 'react'
import styled from 'styled-components'
import { AppCtx } from '../context/context'
import { Pie, Column, Bar, Doughnut } from './Charts'

const Repos = () => {
    const { repos } = React.useContext(AppCtx)

    // transfer the data for EChart

    return (
        <section className='section'>
            <Wrapper className='section-center'>
                <Pie />
                <Column />
                <Doughnut />
                <Bar />
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

    .chart-container {
        height: 400px;
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
