import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import errorImg from '../images/404-img.png'

const Error = () => {
    return (
        <Wrapper>
            <div>
                <h1>404</h1>
                <h3>哎呀，找不到页面！</h3>
                <img src={errorImg} alt='404' />
                <Link to='/' className='btn'>
                    回到主页
                </Link>
            </div>
        </Wrapper>
    )
}

const Wrapper = styled.section`
    min-height: 100vh;
    display: grid;
    place-items: center;
    background: var(--clr-primary-10);
    text-align: center;
    h1 {
        font-size: 10rem;
    }
    img {
        width: 50vh;
        padding-bottom: 1rem;
    }
    h3 {
        color: var(--clr-grey-3);
        margin-bottom: 1.5rem;
    }
`
export default Error
