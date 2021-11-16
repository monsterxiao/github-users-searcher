import React from 'react'
import styled from 'styled-components'

const Footer = () => {
    return (
        <section className='section'>
            <Wrapper>
                <h4>
                    2021 @
                    <a href='https://github.com/monsterxiao'> monsterxiao</a>
                </h4>
            </Wrapper>
        </section>
    )
}

const Wrapper = styled.footer`
    padding: 1.5rem;
    margin-top: 4rem;
    background: var(--clr-primary-3);
    text-align: center;

    h4 {
        margin-bottom: 0;
        font-weight: 400;
        color: var(--clr-primary-10);
        a {
            color: var(--clr-primary-8);
            transition: var(--transition);
            cursor: pointer;
            &:hover {
                color: var(--clr-primary-10);
            }
        }
    }
`

export default Footer
